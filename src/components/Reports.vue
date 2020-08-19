<template>
  <div class="reports">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">数据统计</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">数据报表</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <div id="myEcharts"></div>
    </el-card>
  </div>
</template>

<script>
import echarts from "echarts";
import _ from "lodash";
export default {
  data() {
    return {
      options: {
        title: {
          text: "用户来源",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#E9EEF3",
            },
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            boundaryGap: false,
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
      },
    };
  },
  async mounted() {
    let { data } = await this.$axios.get("reports/type/1");
    console.log(data);
    const myChart = echarts.init(document.getElementById("myEcharts"));

    const result = _.merge(data.data, this.options);
    myChart.setOption(result);
  },
  created() {},
  methods: {},
};
</script>

<style lang="less" scoped>
#myEcharts {
  width: 100%;
  height: 400px;
}
</style>