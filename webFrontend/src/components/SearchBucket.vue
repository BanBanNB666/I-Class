<template>
    <!-- <div class="input-group" style="margin-bottom: 2%; height: auto;">
        <input v-model="searchBucket" style="border-radius:10px ;" type="text" class="form-control" placeholder="查询桶" aria-label="Recipient's username"
            aria-describedby="button-addon2">
        <button @click="emitOneBucket()" style="border-radius:10px ;" class="bi bi-arrow-right" type="button" id="button-addon2"></button>
    </div> -->

    <div style="margin-top: 5px; height: auto; width: 100%;">
            <el-input class="" size="mini" placeholder="搜索桶" v-model="input3">
            </el-input>
            <el-button @click="emitOneBucket()"  slot="append" class="bi bi-search"></el-button>
    </div>

</template>

<script setup lang="ts">
let searchBucket = ""
let input3 = ""
let input4 = ""
//从父组件拿数据
const props = defineProps<{
    data: any
}>()

//给父组件事件：传出一个桶
const emit = defineEmits(['on-click'])
const emitOneBucket = () => {
    let temp: any;
    let isFind = false;
    for (temp in props.data) {
        if (props.data[temp].bucketName == searchBucket) {
            emit('on-click', props.data[temp])
            isFind = true;
        }
    }
    if (!isFind) {
        emit('on-click', "")
    }
}

</script>

<style scoped>
/* .inputGroup {
  display: inline-block;
} */

div{
    display:flex;
    margin-bottom: 1%;
}
</style>