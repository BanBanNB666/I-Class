<template>
    <div class="container-fluid">
      <div class="row">
        <HeadBlock></HeadBlock>
      </div>
      <div class="row mt-2">
        <div class="col-md-2">
          <select-block class="phone" ref="selectBlock" v-bind:page="page" type = 2></select-block>
        </div>
        <div class="col-md-10 col-xs-12 pad">
          <ClassBlock v-if="page == 1" :course="course" type = 2></ClassBlock>
          <!-- <MsgBlock v-if="page == 2"></MsgBlock> -->
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

  import SelectBottom from '../components/SelectBottom.vue'
  
  export default {
    name: "MainView",
    data() {
      return {
        page: 1,
        course:''
      }
    },
    components: {
      HeadBlock,
      SelectBlock,
      ClassBlock,

      SelectBottom
    },
    methods: {
      changePage(num) {
        this.$data.page = num
      },
    },
    created() {
      this.course = JSON.parse(this.$route.query.msg).courseList
      console.log(this.course)
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