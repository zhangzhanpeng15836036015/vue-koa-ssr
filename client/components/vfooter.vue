<template>
  <div class="footer">
    <div
      class="navation"
      v-for=" (ele,index) in list"
      :key="index"
      @click="goPage(ele)"
    >{{ele.name}}</div>
    <!-- <div>银行卡</div>
    <div>订单</div>
    <div>我的</div>-->
  </div>
</template>
<script>
export default {
  name: "vfooter",
  data() {
    return {
      list: [
        {
          name: "首页",
          route: "/"
        },
        {
          name: "银行卡",
          route: "/myCard"
        },
        {
          name: "订单",
          route: "/myOrder"
        },
        {
          name: "我的",
          route: "/min"
        }
      ]
    };
  },
  methods: {
    hello() {
      console.log("footer");
    },
    goPage(ele) {
      console.log(ele);
      this.$router.push({
        path: ele.route
      });
    }
  }
};
</script>
<style scoped>
.footer {
  width: 100%;
  height: 50px;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  border-top: 1px solid #ccc;
  justify-content: space-around;
  align-items: center;
}
.navation {
  flex: 1;
  height: 49px;
  text-align: center;
  line-height: 49px;
  cursor: pointer;
}
</style>
