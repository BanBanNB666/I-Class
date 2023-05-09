<template>
  <div class="container-fluid">
    <div class="row">
      <HeadBlock></HeadBlock>
    </div>
    <div class="row mt-2">
      <div class="col-2">
        
      </div>
      <div class="col-10">
        <ClassIntroduction ></ClassIntroduction>
        <HomeworkList ></HomeworkList>
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
      page: 1
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

}

</script>
  
<style>

</style>