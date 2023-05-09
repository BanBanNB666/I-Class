<!-- <template>
  <section class="p-5  text-dark text-center text-sm-start">
    <div class="container">
      <div class="col-md-9 column">
        <div class="jumbotron">

          <textarea :name="reworkmes1" disabled=true cols="100" rows="7" style="OVERFLOW:   visible" class="form-control"
            :placeholder="content" aria-label="Username" aria-describedby="basic-addon1"></textarea>
          <textarea :name="reworkmes2" cols="100" rows="7" style="OVERFLOW:visible ;margin-top:1% " class="form-control"
            placeholder="此处作答" v-model="msg" aria-label="Username" aria-describedby="basic-addon1"></textarea>

        </div>
      </div>
    </div>
  </section>
</template>
<script>


export default {
  name: 'answerShotAnswer',

  components: {},

  data() {
    return {
      reworkmes1:'',
      reworkmes2:'',
      content:'',
      msg:'',
    }
  },

  methods: {
    parentMsg(msg) {
      this.content = msg.content
      console.log(this.content)
    },
    getAnswer() {
      console.log("single return" + this.msg)
      this.$emit('backAnswer', this.msg)
    },
  },
  created(){
    this.reworkmes1 = parseInt(Math.random() * 10000000)+""
    this.reworkmes2 = parseInt(Math.random() * 10000000)+""
  }
}
</script> -->

<template>
  <section class="p-5  text-dark text-center text-sm-start">
    <div class="container">
      <div class="col-md-9 column">
        <div class="jumbotron">

          <textarea :name="reworkmes1" cols="100" rows="7" style="OVERFLOW:   visible" class="form-control"
            :placeholder="content" disabled=ture aria-label="Username" aria-describedby="basic-addon1"></textarea>
          <textarea :name="reworkmes2" cols="100" rows="7" style="OVERFLOW:visible ;margin-top:1% " class="form-control"
            placeholder="此处作答，标清空号" v-model="msg"  aria-label="Username" aria-describedby="basic-addon1"></textarea>

        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'answerShotAnswer',
  props:[
   'msgF'
  ],
  data() {
    return {
      reworkmes1:'',
      reworkmes2:'',
      content:'',
      msg:'',
    }
  },
  methods: {
    parentMsg(msg) {
      console.log(msg)
    },
    getAnswer() {
      this.$emit('backAnswer', this.msg)
    },
  },
  created(){
    this.content = this.msgF.content
    this.reworkmes1 = parseInt(Math.random() * 10000000)+""
    this.reworkmes2 = parseInt(Math.random() * 10000000)+""
  }
}
</script>