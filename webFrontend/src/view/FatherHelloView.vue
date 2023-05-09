<template>
    <input v-model="msg" />
    <button v-on:click="notify">广播事件</button>
    <!--子组件-->
    <SonHello ref="child"></SonHello>
</template>

<script>
import SonHello from '@/components2/sonHello.vue';

export default {
    name: "addTime",
    data() {
        return {
            msg: "",
        }
    },
    components: {
        SonHello
    },
    methods: {
        notify: function () {
            this.$refs.child.parentMsg(this.msg);
        },
    },
    created() {
        let str = "hellow  world!"            //注意hellow与world之前有两个空格
        console.log(str.trim().split(" "))
        console.log(str.trim().split(" ").length)
    }

}

</script>

