<template>
  <div class="analysis">
    <div class="title">
      贷款详情
    </div>
    <div class="echart-container">
      <div class="echart-item" v-for="(option, index) in options" :key="index">
        <v-chart :options="option" />
      </div>
    </div>
  </div>
</template>

<script>
import ECharts from "vue-echarts";
import "echarts/lib/chart/line";
import res from "./mock.js";
export default {
  name: "Analysis",
  components: {
    "v-chart": ECharts
  },
  data() {
    return {
      options: []
    };
  },
  created() {
    console.log(res);
    this.options = res.data;
  }
};
</script>

<style lang="less">
.echart-item {
  width: 700px;
  height: 600px;
  margin: 0 auto;
  background: #2e3036;
  > .echarts {
    width: 100%;
    height: 100%;
  }
}
</style>

<style lang="less" scoped>
.analysis {
  .title {
    font-family: PingFangSC-Regular;
    height: 50px;
    line-height: 50px;
    font-size: 36px;
    color: #ffffff;
    letter-spacing: 0;
    text-align: justify;
  }
}
</style>
