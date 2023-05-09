<template>
    <!-- <div style=" display: flex; padding-top: 5px;">
        <input style="height:70% ;" type="text" class="form-control" placeholder="查询文件" aria-label="Recipient's username"
            v-model="searchFile" aria-describedby="button-addon2">
        <button @click="emitOneFile" type="button" class="btn btn-default "><i class="bi bi-arrow-right"
                style="font-size: 15px"></i></button>
    </div> -->

    <div style="margin-top: 5px; height: auto; width: 70%;">
            <el-input class="" size="mini" placeholder="搜索文件" v-model="input3">
            </el-input>
            <el-button @click="emitOneFile"  slot="append" class="bi bi-search"></el-button>
    </div>
</template>

<script setup lang="ts">
let searchFile = "";
let input3 = ""
//从父组件拿数据
const props = defineProps<{
    data: any

}>()

//给父组件事件：传出一个文件
const emit = defineEmits(['on-click'])
const emitOneFile = () => {
    let temp: any;
    let isFind = false;
    // for(temp in props.bucket.Files){
    //     if(props.bucket.Files[temp].fileName == searchFile){
    //         isFind = true
    //         emit('on-click',props.bucket.Files[temp])
    //     }
    // }
    // if(!isFind){
    //     console.log(props.bucket)
    //     emit('on-click',"")
    // }
}
</script>

<style scoped>
div{
    display:flex;
}
.btn:hover {
    background-color: white;
}

.btn {
    background-color: rgb(244, 206, 105);
    border: 3px;
    margin-top: 0%;
}

.btn-circle {
    width: 30px;
    height: 30px;
    text-align: center;
    padding: 6px 0;
    font-size: 12px;
    line-height: 1.428571429;
    border-radius: 15px;
    margin-top: 1px;
}

.btn-circle.btn-lg {
    width: 45px;
    height: 45px;
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.33;
    border-radius: 25px;
}

.btn-circle.btn-xl {
    width: 70px;
    height: 70px;
    padding: 10px 16px;
    font-size: 24px;
    line-height: 1.33;
    border-radius: 35px;
}
</style>