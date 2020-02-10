<template>
  <!-- Dynamic components  -->
  <!-- <keep-alive> -->
  <!-- <component :is="app-baidu"></component> -->
  <!-- </keep-alive> -->
  <div id="app">
    <div id="nav"></div>
    <router-view />
    <app-baidu></app-baidu>
    <app-tela></app-tela>
  </div>
</template>


<script>
import baidu from "./components/baidu";
import tela from "./components/tela";
export default {
  components: {
    "app-baidu": baidu,
    "app-tela": tela
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // color: #2c3e50;
  color: #000;
}
body {
  margin: 0px;
  // padding: 10px;
}
body::-webkit-scrollbar {
  display: none;
}
* {
  margin: 0;
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
}
html,
body {
  height: 100%;
}
#nav {
  a {
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
