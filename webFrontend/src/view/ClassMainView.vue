<template>
  <div class="container-fluid">
    <div class="row">
      <HeadBlock></HeadBlock>
    </div>
    <div class="row mt-2">
      <div class="col-2">
        <ClassSelect v-bind:page="page" :type ='userType'></ClassSelect>
      </div>
      <div class="col-10">
        <ClassIntroduction v-if="page == 1" :userType = 'userType' ></ClassIntroduction>
        <HomeworkList v-if="page == 2" :user-type="userType" :courseId = 'course.courseId' :studentMsg = "studentMsg"></HomeworkList>
      </div>
    </div>
  </div>
</template>
<script>

import HeadBlock from '../components/HeadBlock.vue';
import ClassSelect from '../components/ClassSelect.vue';
import ClassIntroduction from '../components/ClassIntroduction.vue';
import HomeworkList from '../components/HomeworkList.vue';

export default {
  name: "MainView",
  data() {
    return {
      page: 1,
      userType:null,
      course:'',
      studentMsg:''
    }
  },
  components: {
    HeadBlock,
    ClassSelect,
    ClassIntroduction,
    HomeworkList
  },
  methods: {
    changePage(num) {
      this.$data.page = num
    }
  },
  created(){
    this.userType = this.$route.query.userType
    this.course = JSON.parse(this.$route.query.course)
    if(this.userType==1)
      this.studentMsg =  JSON.parse(this.$route.query.studentMsg)
    else
    //this.studentMsg = JSON.parse(this.$route.query.teacher)
    console.log(this.userType)
    console.log(this.course)
  }

}

</script>
  
<style>

</style>