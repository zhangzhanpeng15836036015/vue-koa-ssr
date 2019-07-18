const ejs = require("ejs");
const Koa = require("koa");
const app = new Koa();
const memoryFs = require("memory-fs");
const Router = require("koa-router");
const axios = require("axios");
const webpack = require("webpack");
const VueserverRenderer = require("vue-server-renderer");
const serverConfig = require("../../build/webpack.server.conf");
const path = require("path");
const fs = require("fs");

const serverRender = require("./server-render");
const serverCompiler = webpack(serverConfig);
const mfs = new memoryFs();
serverCompiler.outputFileSystem = mfs;

let bundle;
serverCompiler.watch({}, (err, stats) => {
  if (err) {
    throw err;
    stats = stats.toJson();
    stats.errors.forEach(err => {
      console.log(err);
    });
    stats.warnings.forEach(err => {
      console.log(err);
    });
  }
  const bundlePath = path.join(
    serverConfig.output.path,
    "vue-ssr-server-bundle.json"
  );
  bundle = JSON.parse(mfs.readFileSync(bundlePath, "utf-8"));
  // console.log(bundle, 1212);
  console.log(" new bundle generated");
  //读出来 的是一个字符串 转成 json 格式
});

const handleSSR = async ctx => {
  if (!bundle) {
    ctx.body = "你等一会，别着急";
    return;
  }
  const clientMainfestResp = await axios.get(
    "http://127.0.0.1:8001/vue-ssr-client-manifest.json"
  );
  const clientManifest = clientMainfestResp.data;
  const template = fs.readFileSync(
    path.join(__dirname, "../server-template.ejs"),
    "utf-8"
  );
  const renderer = VueserverRenderer.createBundleRenderer(bundle, {
    inject: false,
    clientManifest
  });

  // console.log(renderer, 112);
  await serverRender(ctx, renderer, template);
};
const router = new Router();

router.get("*", handleSSR);

module.exports = router;
