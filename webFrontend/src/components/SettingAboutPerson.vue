<template>
    <div style="margin-left: 75%; margin-top: 1%; display: flex;">
        <!-- <button type="button" class="btn btn-default btn-circle btn-lg a" style="margin-left: 2%;"><i class="bi bi-arrow-right"></i></button>
    <button type="button" @click="goLoad()" class="btn btn-default btn-circle btn-lg b" style="margin-left: 4%;"><i class="bi bi-person" ></i></button>
    <button type="button" class="btn btn-default btn-circle btn-lg c" style="margin-left: 4%;"><i class="bi bi-x-lg"></i></button> -->
        <el-button type="info">返回<i class="bi bi-arrow-right"></i></el-button>
    <el-button type="primary">个人<i class="bi bi-person"></i></el-button>
    <el-button type="danger">退出<i class="bi bi-x-lg"></i></el-button>
        <!-- <el-button-group>
            <el-button type="primary" class="bi bi-arrow-right"></el-button>
            <el-button type="primary" class="bi bi-person"></el-button>
            <el-button type="danger" class="bi bi-x-lg"></el-button>
        </el-button-group> -->
    </div>
</template>

<script setup lang="ts">
import router from '../router';
const goLoad = () => {
    router.push({ name: 'test1' })
}
</script> 

<style scoped>
.btn:hover {
    background-color: white;
}

.a {
    background-color: rgb(88, 151, 196);
}

.b {
    background-color: rgb(244, 206, 105);
}

.c {
    background-color: rgb(235, 138, 164);
}

.btn-circle {
    width: 40px;
    height: 40px;
    text-align: center;
    padding: 5px 0;
    font-size: 12px;
    line-height: 1.428571429;
    border-radius: 15px;
}

.btn-circle {
    width: 30px;
    height: 30px;
    text-align: center;
    padding: 6px 0;
    font-size: 12px;
    line-height: 1.428571429;
    border-radius: 15px;
}

.btn-circle.btn-lg {
    width: 40px;
    height: 40px;
    padding: 8px 10px;
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