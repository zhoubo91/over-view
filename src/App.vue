<template>
  <div id="app">
    <Slider />
    <Analysis />
    <DiviedTable />
  </div>
</template>

<script>
import Analysis from "./components/Analysis.vue";
import DiviedTable from "./components/DiviedTable";
import Slider from "./components/Slider";

export default {
  name: "App",
  components: {
    Analysis,
    DiviedTable,
    Slider
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /* background: #212228; */
}
* {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style-type: none;
}
</style>
