<template>
  <div id="mycharts" ref="myRef" class="chart-box"></div>
  <!-- <BucketsList2></BucketsList2> -->
  <TopNavbar></TopNavbar>
</template>

<script setup lang="ts">
import LoginOld from "../components/LoginOld.vue";
import BucketsList2 from "../components/BucketsList2.vue";
import { defineComponent, getCurrentInstance, ref, onMounted } from "vue";
import * as echarts from "echarts";
import TopNavbar from "../components/TopNavbar.vue";

const ctx = getCurrentInstance();
const myRef = ref(null);

const initT = () => {
  if (myRef.value) {
    console.log("??");
    const myChart = echarts.init(myRef.value);
    console.log(myChart);
    myChart.setOption({
      title: {
        text: "本月数据统计",
      },
      tooltip: {},
      legend: {
        data: ["任务数量"],
      },
      xAxis: {
        data: ["javascript", "vue", "ts", "react", "nginx"],
      },
      yAxis: {},
      series: [
        {
          name: "任务数量",
          type: "bar",
          data: [5, 20, 36, 10, 10],
        },
      ],
    });
  }
};

onMounted(() => {
  initT();
});
</script>
