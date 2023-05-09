<template>
  <div class="container-fluid">
    <div class="row">
      <HeadBlock></HeadBlock>
    </div>
    <div class="row mt-2">
      <div class="col-2">
        <SubmitSelect v-bind:page="page"></SubmitSelect>
      </div>
      <div class="col-10">
        <SubmitCorrect v-if="page==1"></SubmitCorrect>
        <SubmitChart v-if="page==2"></SubmitChart>
      </div>
    </div>
  </div>
</template>
<script>


import HeadBlock from '../components/HeadBlock.vue';
import SubmitSelect from '../components/SubmitSelect.vue';
import SubmitCorrect from '../components/SubmitCorrect.vue';
import SubmitChart from '../components/SubmitChart.vue';

export default {
  name: "MainView",
  data() {
    return {
      page: 1
    }
  },
  components: {
    HeadBlock,
    SubmitSelect,
    SubmitCorrect,
    SubmitChart
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