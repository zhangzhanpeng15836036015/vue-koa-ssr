<template>
  <div class="header">vue ssr</div>
</template>

<script>
export default {
  name: "vheader",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-sizing: border-box;
  border-bottom: 1px solid #f5f5f5;
}
</style>
