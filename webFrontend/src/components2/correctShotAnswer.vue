<template>
  <section class="p-5  text-dark text-center text-sm-start">
    <div class="container">
      <div class="col-md-8 column">
        <div class="jumbotron">




          <div style="margin-top: 2%;">题目：</div>
          <textarea v-model="msg.questionMsg" name="reworkmes1" cols="100" rows="4" style="OVERFLOW:   visible"
            class="form-control" placeholder="题目描述+分值" disabled=ture aria-label="Username"
            aria-describedby="basic-addon1"></textarea>

            <div style="margin-top: 2%;">学生答案：</div>
            <textarea v-model="msg.stuAnswerMsg" name="reworkmes2" cols="100" rows="4"
            style="OVERFLOW:visible ;margin-top:1% " class="form-control" placeholder="学生答案" disabled=ture aria-label="Username"
            aria-describedby="basic-addon1"></textarea>

            <div style="margin-top: 2%;">标准答案：</div>
            <textarea v-model="msg.answerMsg" name="reworkmes2" cols="100" rows="4"
            style="OVERFLOW:visible ;margin-top:1% " class="form-control" placeholder="标准答案" disabled=ture
            aria-label="Username" aria-describedby="basic-addon1"></textarea>


            <div style="margin-top: 2%;">请打分：</div>
          <div class="input-group news-input" style="width: 50%; margin-top: 2%;">
            <div class="input-group mb-3">
              <input v-model="msg.scoreMsg" name="name1" type="text" class="form-control" placeholder="请打分"
                aria-label="Username" aria-describedby="basic-addon1">
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'correctShotAnswer',
  props:[
   'msgF'
  ],
  data() {
    
    return {


      msg: {
        questionMsg: '',
        answerMsg: '',
        scoreMsg: 0,
        type: "简答题",
        stuAnswerMsg:'',
      },
    }
  },
  methods: {

    //发送数据回父组件
    getAnswer() {
      this.$emit('backAnswer', this.msg.scoreMsg)
    },
  },
  created(){
    this.msg.questionMsg = this.msgF.content + "(满分" + this.msgF.score+"分）"
    this.msg.answerMsg =  this.msgF.answer
    this.msg.stuAnswerMsg = this.msgF.stuAnswer
  }
}
</script>