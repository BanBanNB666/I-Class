<template>

    <div class="card pc-seen" style="width: 15rem;margin: 30px;">
      <img src="../assets/运筹学.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{course.courseName}}</h5>
        <p class="card-text mb-1" style="text-indent:2px">{{course.memo}}</p>
        <button type="button" class="btn btn-primary"  v-on:click="toClass(course)">去学习</button>
      </div>
    </div>

    <button class="cardbtn ph-seen" v-on:click="toClass"> 
      <div class="card" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-6">
            <img src="../assets/运筹学.jpg" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-6">
            <div class="card-body">
              <p class="card-title">{{course.courseName}}</p>
              <p class="card-text"><small class="text-muted">{{course.memo}}</small></p>
            </div>
          </div>
        </div>
      </div>
    </button>

</template>
    
<script>

export default {
  name: 'HelloWorld',
  props:['course','userType','studentMsg'],
  data() {
    return {
      user: {

      }
    }
  },
  methods: {
    toClass(obj) { 
      console.log(this.userType)
      const routeData = this.$router.resolve({
        path: '/ClassMainView',
        query: {
          'userType':this.userType,
          'course':JSON.stringify(obj),
          'studentMsg':JSON.stringify(this.studentMsg),
        }
      })
      window.open(routeData.href, '_blank')

    }
  }
}
</script>
      
<style scoped>

@media screen and (max-width: 768px) {
  /*小于等于768 手机*/
  .pc-seen{
    display: none;
  }
  .cardbtn{
    margin-left: 10px;
    margin-bottom: 10px;
    padding: 0;
    border: none;
  }
}

@media screen and (min-width: 992px) {
  /*大于等于992*/
  .ph-seen{
    display: none;
  }
  .pc-seen{
    display: inline-block;
  }
  
}

</style>
      