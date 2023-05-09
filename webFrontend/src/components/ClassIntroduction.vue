<template>
    <div class="container">
      <div class="row">
        <!-- 图片 -->
        <div class="col-5">
          <img class="img-fluid photo" :src="classMsg.scr">
        </div>
        <!-- 基本信息 -->
        <div class="col-5">
          <div class = "basicMsg">
             <h1>{{classMsg.name}}</h1>
             <br>
             <p>任课老师: {{classMsg.teacher}}</p>
             <p>班级: {{classMsg.classgroup}}</p>
             <input type="text" value="运筹学好!" :readonly = 'userType==1?true:false'>
             <!-- <p>运筹学好!</p> -->
          </div>
        </div>
      </div>
      <hr>
      <div class="row">
        <!-- 详细介绍 -->
        <textarea name="" id="" cols="30" rows="12" @change="check()" :readonly = 'userType==1?true:false'>       
          运筹学，是现代管理学的一门重要专业基础课。它是20世纪30年代初发展起来的一门新兴学科，其主要目的是在决策时为管理人员提供科学依据，是实现有效管理、正确决策和现代化管理的重要方法之一。该学科应用于数学和形式科学的跨领域研究，利用统计学、数学模型和算法等方法，去寻找复杂问题中的最佳或近似最佳的解答

          运筹学经常用于解决现实生活中的复杂问题，特别是改善或优化现有系统的效率。 研究运筹学的基础知识包括实分析、矩阵论、随机过程、离散数学和算法基础等。而在应用方面，多与仓储、物流、算法等领域相关。因此运筹学与应用数学、工业工程、计算机科学、经济管理等专业相关 [1] 。

         </textarea>

        </div>
      
    </div>

</template>
      
<script>

     
export default {
  name: 'ClassInrtoduction',
  props:['userType'],
  data() {
    return {
      classname:'运筹学',
      classMsg: {
        teacher: '王建林',
        classgroup:'202013',
        scr: require("../assets/运筹学.jpg"),
        name: "运筹学"
      }
    }
  },
  methods:{
    toWhere(){

    },
    check(){
      const bool = window.confirm("检测到数据变动，是否修改？");
      if(bool==true){
        alert('向后台提交数据！')
      }else{
        alert('刷新界面')
      }
    }

  }
}
</script>
        
<style scoped>
.intro{
  text-indent: 2em;
  font-size: 16px;
}
.basicMsg{
  padding-top: 80px;
}
.photo{
  height: 250px;
  width: auto;
  margin: 20px;
  border-radius: 10px;
}
.container{
    height: 650px;
    background-color: whitesmoke;
    box-shadow: 5px 5px 5px #c0bebe;
}
    .btn{
      text-align: left;
      border:none;
      background-color: white;
    }
    button:hover{
      background-color: rgb(184, 177, 177);
    }
   textarea{
    border: none;
    background-color: whitesmoke;
    padding-left: 20px;
    outline:none;
   }
   input{
    border: none;
    background-color: whitesmoke;
    outline:none;
   }
  </style>
        