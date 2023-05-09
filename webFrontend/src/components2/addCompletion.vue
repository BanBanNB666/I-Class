<template>
  <section class="p-5  text-dark text-center text-sm-start">
    <div class="container">
      <div class="col-md-12 column">
        <div class="jumbotron">
          <h1>
            录入填空题
          </h1>

          <div class="input-group news-input" style="width: 50%;">
            <div class="input-group mb-3">
              <input v-model="msg.scoreMsg" name="name1" type="text" class="form-control" placeholder="分值"
                aria-label="Username" aria-describedby="basic-addon1">
            </div>
          </div>


          <textarea v-model="msg.questionMsg" name="reworkmes1" cols="100" rows="7" style="OVERFLOW:   visible"
            class="form-control" placeholder="题目描述" aria-label="Username" aria-describedby="basic-addon1"></textarea>
          <textarea v-model="msg.answerMsg" name="reworkmes2" cols="100" rows="7" style="OVERFLOW:visible ;margin-top:1% "
            class="form-control" placeholder="答案" aria-label="Username" aria-describedby="basic-addon1"></textarea>

        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'addCompletion',
  data() {
    return {


      msg: {
        questionMsg: '',
        answerMsg: '',
        scoreMsg:0,
        type:"填空题"
      },
    }
  },
  methods: {

    backScoreSum() {
      this.$emit('backScoreSum', this.msg.scoreMsg)
    },
    getQuestion() {
      this.$emit('backAnswer', this.msg)
    },
  },
}
</script>