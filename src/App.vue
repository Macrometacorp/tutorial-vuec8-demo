<template>
  <div id="app">
    <div class="header"></div>
    <div class="content">
      <h1 style="font-size:32px">VueC8 : TODO example</h1>
      <Demo1 />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Demo1 from "./components/Demo1.vue";

export default Vue.extend({
  name: "app",
  components: {
    Demo1
  }
});
</script>

<style lang="scss">
html,
body {
  margin: 0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.header {
  background: rgb(255, 218, 0);
  background: linear-gradient(
    90deg,
    rgba(255, 218, 0, 1) 0%,
    rgba(255, 124, 0, 1) 100%
  );
  padding: 10px;
  height: 36px;
}
.content {
  margin: 0% 10%;
  width: 80%;
}
</style>
