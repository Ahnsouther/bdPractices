<template>
    <!-- 封装echarts 组件 -->
    <div class="ahn-echarts" :id="echatrsId"></div>
</template>

<script>
import echarts from "echarts";
export default {
  props: ["op"],
  data() {
    return {
      echatrsId: "echarts-dom" + parseInt(Date.now() + Math.random())
    };
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      var myEcharts = echarts.init(document.getElementById(this.echatrsId));
      myEcharts.setOption(this.op);
      window.addEventListener(
        "resize",
       function(){
           myEcharts.resize();
       }
      );
    }
  }
};
</script>

<style lang="less" scoped>
.ahn-echarts {
  width: 100%;
  height: 100%;
  color: #fff;
}
</style>
