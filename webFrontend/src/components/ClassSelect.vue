<template>
  <div class="selectblock">
      <div class = "photodiv">   
          <img class="img-fluid headphoto" :src="classMsg.scr" alt="Chania">
          <p class="username">{{classMsg.name}}</p>
      </div>
      <ul v-if="type==1"> 
        <li><button v-on:click="this.$parent.changePage(1)" :class="{'select':page==1}">课程介绍</button></li>
         <li><button v-on:click="this.$parent.changePage(2)" :class="{'select':page==2}">作业</button></li>
         <li><button v-on:click="this.$parent.changePage(3)" :class="{'select':page==3}">考试</button></li>
         <li><button v-on:click="this.$parent.changePage(4)" :class="{'select':page==4}">实验</button></li>
         <li><button>默认</button></li>
      </ul>
      <ul v-if="type==2"> 
        <li><button v-on:click="this.$parent.changePage(1)" :class="{'select':page==1}">课程介绍</button></li>
         <li><button v-on:click="this.$parent.changePage(2)" :class="{'select':page==2}">管理作业</button></li>
         <li><button v-on:click="this.$parent.changePage(3)" :class="{'select':page==3}">管理考试</button></li>
         <li><button v-on:click="this.$parent.changePage(4)" :class="{'select':page==4}">管理实验</button></li>
         <li><button>默认</button></li>
      </ul>

  </div>
</template>

<script>
      
export default {
  //name: 'HelloWorld',
  props:['page','type'],
  data() {
    return {
      classMsg: {
          scr: require("../assets/运筹学.jpg"),
          name: "运筹学"
      }
    }
  },
  methods:{
   
  }
}
</script>
  
<style scoped>
  .select{
      background-color: rgb(170, 167, 167);
  }
  .selectblock{
      padding: 10px;
      height: 650px; 
      background-color: whitesmoke;
      box-shadow: 5px 5px 5px #c0bebe;
    
  }
  .headphoto {
    
      height: 100px;
      border-radius: 10px;
      text-align: center;
  }
  .photodiv{
      text-align: center;
  }
  .username{

      margin-top: 20px;
      margin-bottom: 20px;
      font-size: 20px;
  }
  li{
      height: 50px;
      list-style: none;
      text-align: center;
     
  }
  ul{
      padding-top: 20px;
      padding-left: 0px;
      
  }
  button{
      border: 0px solid;
      width: 100%; 
      height: 50px;
      list-style: none;
      text-align: center;
      display: block;
      background-color: transparent;
  }
  button:hover{
      background-color: rgb(207, 207, 207);;
  }
</style>
  