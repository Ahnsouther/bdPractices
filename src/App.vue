<template>
  <div id="app">
<<<<<<< HEAD
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
=======
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
>>>>>>> cd5d0ee1dcee0f0ee0414384d660203b62e3c722
}
</style>
