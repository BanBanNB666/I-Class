<template>
    <div class="selectblock row">
        <div class="col-4 p-0">
            <button v-on:click="this.$parent.changePage(1)" :class="{'select':page==1}">课程</button>
        </div>
        <div class="col-4 p-0">
            <button v-on:click="this.$parent.changePage(2)" :class="{'select':page==2}">通知</button>
        </div>
        <div class="col-4 p-0">
            <button v-on:click="this.$parent.changePage(3)" :class="{'select':page==3}">收藏</button>
        </div>
    </div>
</template>
  
<script>
export default {
    //name: 'HelloWorld',
    props: ['page'],
    data() {
        return {
            user: {
                scr: require("../assets/默认头像.png"),
                name: "default"
            }
        }
    },
    methods: {
       
    }
}
</script>
     
<style scoped>
@media screen and (max-width: 768px) {
  /*小于等于768 手机*/
    .selectblock {
        margin: 0;
        padding: 0;
        background-color: whitesmoke;
        position: absolute;
        bottom: 0;
    }

}

@media screen and (min-width: 992px) {
  /*大于等于992*/
  .selectblock {
        padding: 10px;
        height: 650px;
        background-color: whitesmoke;
        box-shadow: 5px 5px 5px #c0bebe;
        display: none;
    }

}

a {
    text-decoration: none;
    color: black;
}

.select{
    background-color: rgb(170, 167, 167);
}

button {
    border: 0px solid;
    width: 100%;
    height: 50px;
    list-style: none;
    text-align: center;
    background-color: transparent;
    display: block;
}

button:hover {
    background-color: rgb(207, 207, 207);
}

</style>
    