<template>
  <div>
    content
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "vbody",
  data() {
    return {};
  },
  computed: {},
  methods: {
    hello() {
      console.log("content");
    }
  }
};
</script>
