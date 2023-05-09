<template>
    <div class="selectblock">
        <div class="photodiv">
            <img class="img-fluid headphoto" :src="user.scr" alt="Chania">
            <p class="username">{{user.name}}</p>
        </div>
        <!-- 学生 -->
        <!-- <ul v-if="type==1">
            <li><button v-on:click="this.$parent.changePage(1)" :class="{'select':page==1}">课程</button></li>
            <li><button v-on:click="this.$parent.changePage(2)" :class="{'select':page==2}">通知<span class="badge bg-light">4</span></button></li>
            <li><button v-on:click="this.$parent.changePage(3)" :class="{'select':page==3}">收藏</button></li>
            <li><button>默认</button></li>
            <li><button>默认</button></li>
        </ul> -->
        <div v-if="type==1">
            <button type="button" class="btn btn-primary" :class="{'select':page==1}" v-on:click="this.$parent.changePage(1)">
               课程
            </button>
            <button type="button" class="btn btn-primary" :class="{'select':page==2}" v-on:click="this.$parent.changePage(2)">
                通知
                <span v-if="newMsgNum!=0" class="badge bg-danger float-end" style="position: absolute;   left: 13%; top: 42%;">{{newMsgNum}}</span>
            </button>
            <button type="button" class="btn btn-primary" :class="{'select':page==3}" v-on:click="this.$parent.changePage(3)">
               收藏

            </button> <button type="button" class="btn btn-primary">
               默认 
            </button>
        </div>
        
        <!-- 老师 -->
        <!-- <ul v-if="type==2">
            <li><button v-on:click="this.$parent.changePage(1)" :class="{'select':page==1}">管理课程</button></li>
            <li><button v-on:click="this.$parent.changePage(2)" :class="{'select':page==2}">我的班级</button></li>
            <li><button v-on:click="this.$parent.changePage(3)" :class="{'select':page==3}">收藏</button></li>
            <li><button>默认</button></li>
            <li><button>默认</button></li>
        </ul> -->
        <div v-if="type==2">
            <button type="button" class="btn btn-primary" :class="{'select':page==1}" v-on:click="this.$parent.changePage(1)">
                管理课程
            </button>
            <button type="button" class="btn btn-primary" :class="{'select':page==2}" v-on:click="this.$parent.changePage(2)">
                我的班级
                <span v-if="newMsgNum!=0" class="badge bg-danger float-end" style="position: absolute;   left: 13%; top: 42%;">{{newMsgNum}}</span>
            </button>
            <button type="button" class="btn btn-primary" :class="{'select':page==3}" v-on:click="this.$parent.changePage(3)">
               收藏

            </button> <button type="button" class="btn btn-primary">
               默认 
            </button>
        </div>
    </div>
</template>
  
<script>
export default {
    //name: 'HelloWorld',
    props: ['page','type','newMsgNum'],
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
        padding: 10px;
        height: 650px;
        background-color: whitesmoke;
        box-shadow: 5px 5px 5px #c0bebe;
        display: none;
    }

}

@media screen and (min-width: 992px) {
  /*大于等于992*/
  .selectblock {
        padding: 10px;
        height: 650px;
        background-color: whitesmoke;
        box-shadow: 5px 5px 5px #c0bebe;

    }

}

a {
    text-decoration: none;
    color: black;
}


.headphoto {

    height: 100px;
    border-radius: 10px;
    text-align: center;
}

.photodiv {
    text-align: center;
}

.username {

    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 20px;
}

li {
    height: 50px;
    list-style: none;
    text-align: center;

}

ul {
    padding-top: 20px;
    padding-left: 0px;

}
.select{
    background-color:rgb(10,88,202);
    color: white;
}
button {
    border: 0px solid;
    width: 100%;
    height: 50px;
    list-style: none;
    text-align: center;
    background-color: transparent;
    display: block;
    color: black;
}

button:hover {
    background-color: rgb(10,88,202);
}
</style>
    