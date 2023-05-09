<template>
    <div class="container-fluid">
        <div class="row">
            <HeadBlock></HeadBlock>
        </div>
        <div class="row mt-4">
            <div class="col-2 offset-1">
                <MyMsg1></MyMsg1>
            </div>
            <div class="col-8">
                <MyMsg2></MyMsg2>
            </div>
        </div>
    </div>
</template>
<script>

import HeadBlock from '../components/HeadBlock.vue';
import MyMsg1 from '../components/MyMsg-1.vue';
import MyMsg2 from '../components/MyMsg-2.vue';

export default {
    name: "MainView",
    components: {
        HeadBlock,
        MyMsg1,
        MyMsg2
    },
    data() {
        return {
           studentMsg:null
        }
    },

    //取得个人信息localStorage
    created() {
        this.studentMsg = JSON.parse(localStorage.getItem('studentMsg'))
        console.log('mymsg')
        console.log(this.studentMsg)
    }
}

</script>
    
<style>

</style>