<template>
  <div class="container">
    <div class="topic">
      <div class="block">通知 ></div>
    </div>
    <div class="func">
      <div style="display: inline-block; float: right;">
        <div class="col-lg-12">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="搜索消息...">
            <span class="input-group-btn">
              <button class="btn btn-default" type="button">Go!</button>
            </span>
          </div><!-- /input-group -->
        </div><!-- /.col-lg-6 -->
      </div>
    </div>
    <div class="classcontainer">

      <div class="accordion p-2" id="accordionExample" v-for="(m, index) in msg" :key="index">
        <div class="accordion-item mt-2">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
              :data-bs-target="'#s' + index" aria-expanded="false" aria-controls="collapseOne" @click="hasRead(m.id)">
              {{ m.id }}
              <span v-if="m.state==0" class="badge bg-danger float-end mx-4">new</span>
            </button>
          </h2>
          <div :id="'s' + index" class="accordion-collapse collapse" aria-labelledby="headingOne"
            data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
              plugin adds the appropriate classes that we use to style each element. These classes control the overall
              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
              CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
              <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>

</template>
  
<script>

export default {
  props: ['msg'],
  data() {
    return {

    }
  },
  methods: {
    hasRead(id) {

      this.$http({
        url: "/readMsgById",
        params: {
          id: id
        },
        method: 'post',

      }).then(res => {

        console.log(res);

      }).catch(err => {
        console.log(err)
      })

      this.$parent.getMsg()
    },
    getNewMsgNum() {
      console.log(this.msg);

      for (var i = 0; i < this.msg.length; i++) {
        if (this.msg[i].state == 0) {
          this.newMsgNum++
        }
      }
      console.log(this.newMsgNum)
    }
  }
}

</script>
    
<style scoped>
a {
  text-decoration: none;
  color: black;
}

.func {
  margin-left: 30px;
  padding-top: 10px;
  height: 50px;
}

.container {
  height: 650px;
  padding-top: 10px;
  background-color: whitesmoke;
  box-shadow: 5px 5px 5px #c0bebe;
}

.topic {
  height: 50px;
  border: 1px solid whitesmoke;
  background-color: rgb(229, 226, 226);
  border-radius: 10px;
}

.classcontainer {
  height: 520px;
  margin-top: 10px;
  overflow: auto;
  background-color: white;
  border-radius: 10px;
}

.block {
  text-align: left;
  margin-top: 10px;
  margin-left: 30px;
  font-size: 20px;
}
</style>
    