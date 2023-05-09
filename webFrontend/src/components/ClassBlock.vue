<template>
  <div class="box">
    <div class="topic">

      <ul class="nav nav-tabs">
        <li class="nav-item" v-if="type==1">
          <a :class="{'active': true,'nav-link': true}" aria-current="page">
            <button v-on:click="chanegStatu(1)" :class="{'select':statu==1,'btn':true}">我学的课</button>
          </a>
        </li>
        <li class="nav-item" v-if="type==2"> 
          <a :class="{'active': true ,'nav-link': true }">
            <button v-on:click="chanegStatu(2)" :class="{'select':statu==2,'btn':true}">我教的课</button>
          </a>
        </li>
      </ul>
    
    </div>
    <div class="func">

      <AddClass v-if = "type==1"></AddClass>
      <CreateClass v-if = "type==2"></CreateClass>

      <div style="display: inline-block; float: right;">
        <div class="col-lg-12">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="搜索课程...">
            <span class="input-group-btn">
              <button class="btn btn-default" type="button">Go!</button>
            </span>
          </div><!-- /input-group -->
        </div><!-- /.col-lg-6 -->
      </div>
    </div>

    <div class="classcontainer pt-2">
        <template v-for="c in course" :key="c.courseId">
          <Class :course = 'c' :userType="type" :studentMsg="studentMsg"></Class>
        </template>
    </div>

  </div>

</template>


<script>
import Class from "./Class.vue";
import AddClass from "./AddClass.vue";
import CreateClass from "./CreateClass.vue";

export default {
  props:['course','type','studentMsg'],
  data() {
    return {
      statu:1,
    };
  },
  methods: {
    toClass() {
      alert("aaa");
      this.$router.push("/");
    },
    chanegStatu(num){
      this.statu = num
    },
    getClassList() {
      this.$http({
        url: "/student/getAllCourse",
        data: '',
        method: 'post',

      }).then(res => {
        // console.log(res.data.extend)
        this.classList = res.data.extend.courses
        console.log(res.data.extend.courses)
        console.log(this.classList)

      }).catch(err => {
        console.log(err)
      })
    }
  },
  created(){
    
  },
  components: { Class, AddClass, CreateClass }
}
</script>
    
<style scoped>
@media screen and (max-width: 768px) {
  /*小于等于768 手机*/
    .box {
      width: 100%;
      height: auto;
      padding: 10px;
      background-color: whitesmoke;
    }
    .classcontainer {
      height: 440px;
      margin-top: 10px;
      overflow: auto;
      background-color: white;
      border-radius: 10px;
    }
    .func {
      padding-top: 10px;
      height: 50px;
      background-color: transparent;
    }
    .nav-link{
      padding: 0;
    }

}

@media screen and (min-width: 992px) {
  /*大于等于992*/
  .box {
      width: auto;
      height: 650px;
      padding: 10px;
      background-color: whitesmoke;
      box-shadow: 5px 5px 5px #c0bebe;
    }
    .classcontainer {
      height: 520px;
      margin-top: 10px;
      overflow: auto;
      background-color: white;
      border-radius: 10px;
    }
    .func {
      margin-left: 30px;
      padding-top: 10px;
      height: 50px;
      background-color: transparent;
    }
}
.select{
  font-weight: 600;
  color: rgb(11,94,215);
}


.topic {
  height: 50px;
  background-color: transparent;
}

</style>
    