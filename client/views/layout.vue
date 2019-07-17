<template>
  <div>
    234567
    <vheader></vheader>
    <vbody></vbody>
    <vfooter></vfooter>
  </div>
</template>
<script>
import vheader from "../components/vheader.vue";
import vbody from "../components/vbody.vue";
import vfooter from "../components/vfooter.vue";

export default {
  metaInfo: {
    title: "zzp112121 learn vue-ssr"
  },
  name: "home",
  data() {
    return {
      a: 1
    };
  },
  components: {
    vheader,
    vbody,
    vfooter
  },
  methods: {
    hello() {
      console.log(hello);
    }
  }
};
</script>
