<template>
  <div id="app">
    <HeaderComponents />
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import HeaderComponents from "./components/HeaderComponents";
export default {
  name: "app",
  components: {
    HeaderComponents
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style></style>
