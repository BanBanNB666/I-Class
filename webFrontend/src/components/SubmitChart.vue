<template>
  <br>
  <br>
  <div class="col con p-2">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a :class="{ 'active': statu == 1, 'nav-link': true }" aria-current="page">
            <button v-on:click="chanegStatu(1)" :class="{ 'select': statu == 1, 'btn': true }">提交情况</button>
          </a>
        </li>
        <li class="nav-item">
          <a :class="{ 'active': statu == 2, 'nav-link': true }">
            <button v-on:click="chanegStatu(2)" :class="{ 'select': statu == 2, 'btn': true }">及格情况</button>
          </a>
        </li>
      </ul>
    <div id="myChart" class="charts"></div>
  </div>

</template>

<script>
// 引入echarts
import * as echarts from 'echarts'
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(() => { // 需要在页面加载完毕后展示图表，这里使用Vue3的组合式生命周期钩子 onMounted()
      let myChart = echarts.init(document.getElementById("myChart"));
      // 设置图表配置项,可以直接从Echarts的示例中，将配置项复制下来后放入下列的myChart.setOption()中实现图表的样式更换
      myChart.setOption({
        legend: {
          // 图例
          data: ["江苏", "浙江", "山东", "广东", "湖南"],
          right: "10%",
          top: "30%",
          orient: "vertical"
        },
        title: {
          // 设置饼图标题，位置设为顶部居中
          text: "xxx",
          top: "0%",
          left: "center"
        },
        grid: {

          height: "00px"
        },
        series: [
          {
            type: "pie", // type设置为饼图
            data: [
              {
                value: 463,
                name: "江苏"
              },
              {
                value: 395,
                name: "浙江"
              },
              {
                value: 157,
                name: "山东"
              },
              {
                value: 149,
                name: "广东"
              },
              {
                value: 147,
                name: "湖南"
              }
            ]
          }
        ]
      });
      window.onresize = function () { // 自适应大小
        myChart.resize();
      };
    });
  }
}
</script>

<style scoped>
.con{
  box-shadow: 5px 5px 5px #c0bebe;
  background-color: whitesmoke;
  border-radius: 10px;


}
.charts {
  height: 280px;
  padding-left: 0px;
  background-color: white;
}
</style>

