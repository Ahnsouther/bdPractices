<template>
  <div id="app">
    <layout></layout>
  </div>
</template>
<script>
import layout from "@/components/layout";
export default {
  name: "app",
  components: {
    layout
  }
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
  background: url("./assets/bg.jpg") center no-repeat;
  background-size: 100% 100%;
}
#app {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: absolute; // 解决外边框合并问题
}
</style>
