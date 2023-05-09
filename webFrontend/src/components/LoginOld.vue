<template>
  <el-row>
    <div id="mycharts" ref="myRef" class="chart-box" />
  </el-row>
  <el-row>
    <el-col :span="12">
      <el-card class="card" style="padding: 0px" shadow="hover">
        <el-row>
          <el-col :span="10">
            <img class="smallImg" src="../imgs/文档.png" alt="文档" />
          </el-col>
          <el-col :span="14">
            <el-row>
              <div class="smallTitle">文档</div>
            </el-row>
            <el-row>
              <div class="smallText">12117个</div>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card class="card" style="padding: 0px" shadow="hover">
        <el-row>
          <el-col :span="10">
            <img class="smallImg" src="../imgs/图片.png" alt="图片" />
          </el-col>
          <el-col :span="14">
            <el-row>
              <div class="smallTitle">图片</div>
            </el-row>
            <el-row>
              <div class="smallText">12117个</div>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="12">
      <el-card class="card" style="padding: 0px" shadow="hover">
        <el-row>
          <el-col :span="10">
            <img class="smallImg" src="../imgs/视频.png" alt="视频" />
          </el-col>
          <el-col :span="14">
            <el-row>
              <div class="smallTitle">视频</div>
            </el-row>
            <el-row>
              <div class="smallText">12117个</div>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card class="card" style="padding: 0px" shadow="hover">
        <el-row>
          <el-col :span="10">
            <img class="smallImg" src="../imgs/未知文件.png" alt="未知文件" />
          </el-col>
          <el-col :span="14">
            <el-row>
              <div class="smallTitle">未知文件</div>
            </el-row>
            <el-row>
              <div class="smallText">12117个</div>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { defineComponent, getCurrentInstance, ref, onMounted } from "vue";
import * as echarts from "echarts";

const props = defineProps<{
  fileNow: any;
}>();

const ctx = getCurrentInstance();
const myRef = ref(null);

const initT = () => {
  if (myRef.value) {
    const myChart = echarts.init(myRef.value);
    myChart.setOption({
      title: {
        text: "存储空间",
        left: "center",
        top: "85%",
        textStyle: {
          fontSize: 20,
          color: "rgb(163,197,247)",
        },
      },
      // series 渲染的图表，可以配置多个
      series: [
        {
          type: "pie",
          radius: ["40%", "60%"],
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: "inside",
            formatter: "{b} ({d}%)",
          },
          // data,配置每项数据
          data: [
            {
              name: "文档",
              value: 80,
              itemStyle: {
                color: "rgb(110,171,255)",
              },
            },
            {
              name: "图片",
              value: 50,
              itemStyle: {
                color: "rgb(255,209,60)",
              },
            },
            {
              name: "视频",
              value: 60,
              itemStyle: {
                color: "rgb(255,103,97)",
              },
            },
            {
              name: "其他",
              value: 80,
              itemStyle: {
                color: "rgb(0,154,97)",
              },
            },
            {
              name: "剩余",
              value: 130,
              itemStyle: {
                color: "rgb(238,243,254)",
              },
            },
          ],
          startAngle: 180,
        },
      ],
    });
  }
};

onMounted(() => {
  initT();
});
</script>

<style lang="css" scoped>
.chart-box {
  width: 300px;
  height: 300px;
}

p {
  color: rgb(156, 192, 247);
  font-size: small;
  width: 60px;
}

.smallImg {
  width: 37px;
}

.card {
  width: 150px;
  margin: 5px;
}

.smallTitle {
  font-weight: 700;
  font-size: 14px;
  font-style: italic;
  text-align: center;
}

.smallText {
  font-weight: 500;
  font-size: 13px;
  text-align: center;
}
.el-card__body {
  padding: 0px;
}
</style>