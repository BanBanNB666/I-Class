<template>
    <div class="container-fluid">
        <div class="row">
            <HeadBlock></HeadBlock>
        </div>
        <div class="row my-4" >
            <div class = "col-2 ">
               
            </div>
            <div class = "col-5  my-1 ">
                  <SubmitIntroduction></SubmitIntroduction>
                  <SubmitChart></SubmitChart>
            </div> 
            <div class = "col-5 my-1 listcontaner">
                <SubmitConditionList></SubmitConditionList>
            </div> 
          
        </div>
    </div>
</template>

<script>

import HeadBlock from '../components/HeadBlock.vue';
import SubmitConditionList from '../components/SubmitList.vue';
import SubmitIntroduction from '../components/SubmitIntroduction.vue';
import SubmitChart from '../components/SubmitChart.vue';

export default {
  // name: '',
  components: {
    HeadBlock,
    SubmitConditionList,
    SubmitIntroduction,
    SubmitChart
},
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

    }
  }
}
</script>

<style>
    .photo{
        height: 200px;
        width: auto;
        border-radius: 10px;
    }
    .listcontaner{
        border-radius: 20px;
        background-color: whitesmoke;
        box-shadow: 5px 5px 5px #c0bebe;
    }
</style>