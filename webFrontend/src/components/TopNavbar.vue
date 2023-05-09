<template>
    <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"

  >
    <el-menu-item index="0"><img src="../imgs/logo.png" alt="图片描述"></el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">返回</el-menu-item>
    <el-menu-item index="2">账户</el-menu-item>
    <el-menu-item index="3">退出</el-menu-item>

  </el-menu>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const activeIndex = ref('1')
let activeName = 'second'

</script>
<style scoped>
.flex-grow {
  flex-grow: 1;
}
img {
  max-width: 45%;
  height: auto;
  margin-left: 10%;
  margin-bottom: 1%;
  
}
</style>
