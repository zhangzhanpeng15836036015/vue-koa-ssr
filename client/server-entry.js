import createApp from "./create-app";

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp();
    router.push(context.url);

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      //console.log(matchedComponents,90909,"matchedComponents")
      // console.log(context.url,101010)
      if (!matchedComponents.length) {
        return reject(new Error("no components matched"));
      }
      context.meta = app.$meta();
      resolve(app);
    });
  });
};
