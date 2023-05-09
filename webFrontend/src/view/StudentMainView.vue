<template>
  <div class="container-fluid">
    <div class="row">
      <HeadBlock></HeadBlock>
    </div>
    <div class="row mt-2">
      <div class="col-md-2">
        <select-block class="phone" ref="selectBlock" v-bind:page="page" type = 1 :newMsgNum = newMsgNum></select-block>
      </div>
      <div class="col-md-10 col-xs-12 pad">
        <ClassBlock v-if="page == 1" :course="course" type = 1 :studentMsg = "student"></ClassBlock>
        <MsgBlock v-if="page == 2" :msg = msg></MsgBlock>
      </div>
    </div>
    <div class="row">
        <SelectBottom class="phone" ref="selectBlock" v-bind:page="page"></SelectBottom>
    </div>
    </div> 
   
</template>
<script>

import HeadBlock from '../components/HeadBlock.vue';
import SelectBlock from '../components/SelectBlock.vue';
import ClassBlock from '../components/ClassBlock.vue'
import MsgBlock from '../components/MsgBlock.vue'
import SelectBottom from '../components/SelectBottom.vue'

export default {
  name: "MainView",
  data() {
    return {
      page: 1,
      course:'',
      student:'',
      msg:'',
      newMsgNum:0
    }
  },
  components: {
    HeadBlock,
    SelectBlock,
    ClassBlock,
    MsgBlock,
    SelectBottom
  },
  methods: {
    changePage(num) {
      this.$data.page = num
    },
    getMsg(){
        this.$http({
                url: "/getAllMsgByStudentNo",
                params: {
                  studentNo: 20201329
                },
                method: 'post',

            }).then(res => { 

                this.msg = res.data.extend.messages
                console.log(this.msg);
                this.getNewMsgNum();

            }).catch(err => {
                console.log(err)
            })
      },
      getNewMsgNum(){
        console.log(this.msg);
        this.newMsgNum = 0;
        for(var i = 0;i<this.msg.length;i++){
          if(this.msg[i].state==0){
            this.newMsgNum++
          }
        }
        console.log(this.newMsgNum)
      }
  },

  //存放数据到localSrotage
  created() {
    this.course = JSON.parse(this.$route.query.msg).course
    this.student = JSON.parse(this.$route.query.msg).student
    localStorage.setItem("studentMsg",JSON.stringify(this.student))
    this.getMsg()
    console.log(this.course)
    console.log(this.student)
  }

}

</script>
  
<style scoped>
@media screen and (max-width: 768px) {
  /*小于等于768 手机*/
  .pad{
    padding :0px;

  }

}

@media screen and (min-width: 992px) {
  /*大于等于992*/
  .pad{
    padding-right:10px;
  }
}
</style>