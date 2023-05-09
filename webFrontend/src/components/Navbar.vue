<template>
    <nav style="margin-left: 2%;margin-top: 1%; ">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <a href="#/1" @click="backFiles(-1)">开始</a>
                <!-- <button type="button" class="btn btn-outline-primary btn-sm"> 开始 </button> -->
            </li>
            
            <li v-for="(navName,index) in props.navFile" class="breadcrumb-item active">
                <a href="#/1"  @click="backFiles(index )">{{ navName }} </a>
                <!-- <button type="button" class="btn  btn-link btn-sm">{{ navName }} </button> -->
            </li>
        </ol>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
//从父组件拿数据
const props = defineProps<{
    // bucket: any
    navFile: string[]
}>()

console.log(props.navFile.values)

//给父组件事情：我要回到主页
const emit = defineEmits(['on-click'])

//给父组件事情：我要回到前面文件
const backFiles = (index:number) => {
    emit('on-click', index)
}



</script>

<style scoped>
a {
  text-decoration: none; /* 隐藏链接下划线 */
}
a:hover {
  font-size: 1.2em; /* 字体放大到原大小的1.2倍 */
  /* color: rgb(red, green, blue);  */
}
</style>