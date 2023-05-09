<template>
  <nav class="navbar navbar-expand-lg  bg-light  navbar-light fixed-top">
    <div class="container">
      <a href="#" class="navbar-brand">项目名</a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navmenu">
        <ul class="navbar-nav ms-auto">
          <!--margin start = margin left-->
          <li class="nav-item">
            <div class="nav-link">小组成员</div>
          </li>
          <li class="nav-item">
            <div class="nav-link">闻德星</div>
          </li>
          <li class="nav-item">
            <div class="nav-link">冯珞钊</div>
          </li>
          <li class="nav-item">
            <div class="nav-link">谢懋望</div>
          </li>
          <li class="nav-item">
            <div class="nav-link">喻涛</div>
          </li>
          <li class="nav-item">
            <div class="nav-link">杨济中</div>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <AddTime ref="child" @backAnswer="getBackAnswer"></AddTime>
  <div style="margin-left: 4%;" class="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" class="btn-check" name="btnradioa" id="btnradioa" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="btnradioa">作业</label>

  <input type="radio" class="btn-check" name="btnradioa" id="btnradiob" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradiob">考试</label>

  <input type="radio" class="btn-check" name="btnradioa" id="btnradioc" autocomplete="off">
  <label class="btn btn-outline-primary" for="btnradioc">实验</label>
</div>

  <div v-for="count in singleNumber" :key="count">
    <AddSingleChoice :ref="`childa${count}`" @backAnswer="getBackAnswer" @backScoreSum="addScore"></AddSingleChoice>
  </div>

  <div v-for="count in completionNumber" :key="count">
    <AddCompletion :ref="`childb${count}`" @backAnswer="getBackAnswer" @backScoreSum="addScore"></AddCompletion>
  </div>

  <div v-for="count in shotNumber" :key="count">
    <AddShotAnswer :ref="`childc${count}`" @backAnswer="getBackAnswer" @backScoreSum="addScore"></AddShotAnswer>
  </div>

  <div v-for="count in programmNumber" :key="count">
    <AddProgramminng :ref="`childd${count}`" @backAnswer="getBackAnswer" @backScoreSum="addScore"></AddProgramminng>
  </div>



  <section>
    <div class="container" style="margin-top: 2%;">
      <div class="col-md-12 column">
        <div class="card">
          <div class="card-body">
            <h4>继续添加题目</h4>
            <button class="btn btn-primary btn-lg my-4" v-on:click="addSignle" data-toggle="modal"
              data-target="#myModal">
              录入单选题
            </button>

            <button style="margin-left: 5%;" v-on:click="addCompletion" class="btn btn-primary btn-lg my-4"
              data-toggle="modal" data-target="#myModal">
              录入填空题
            </button>

            <button style="margin-left: 5%;" v-on:click="addShot" class="btn btn-primary btn-lg my-4"
              data-toggle="modal" data-target="#myModal">
              录入简答题
            </button>

            <button style="margin-left: 5%;" v-on:click="addProgram" class="btn btn-primary btn-lg my-4"
              data-toggle="modal" data-target="#myModal">
              录入编程题
            </button>
          </div>
        </div>


      </div>
    </div>
  </section>

  <section>
    <div class="container" style="margin-top:2% ;">
      <div class="col-md-12 column">
        <div class="card">
          <div class="card-body">
            <h4>本题目集总分为：{{ scoreSum }}</h4><br>
            <button class="btn btn-primary btn-lg my-4" v-on:click="getScore,getQuestion">
              计算卷面总分
            </button>
            <button class="btn btn-primary btn-lg my-4" v-on:click="sendQuestion" style="margin-left: 2%;">
              完成并发布题目集
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="p-5 bg-light text-white text-center">
    <div class="container">
      <p class="lead">Copyright &copy; 2022 项目名</p>
    </div>
  </footer>
</template>

<script>
import AddProgramminng from '@/components2/addProgramminng.vue';
import AddSingleChoice from '@/components2/addSingleChoice.vue';
import AddShotAnswer from '@/components2/addShotAnswer.vue';
import AddCompletion from '@/components2/addCompletion.vue';
import AddTime from '@/components2/addTime.vue';
import $ from 'jquery';
export default {
  name: "AddQuestionView",

  components: { AddProgramminng, AddSingleChoice, AddShotAnswer, AddCompletion, AddTime },
  props: ['courseId'],
  data() {
    return {
      singleNumber: 0,
      shotNumber: 0,
      programmNumber: 0,
      completionNumber: 0,
      scoreSum: 0,
      acticeName: '',
      msg: {
        startTime: '',
        endTime: '',
        setName: '',
        questions: [],
        type: 0,
      }
    }
  },

  methods: {

    addSignle() {
      this.singleNumber++
    },
    addProgram() {
      this.programmNumber++
    },
    addShot() {
      this.shotNumber++
    },
    addCompletion() {
      this.completionNumber++
    },
    addScore(data) {
      data -= 0
      this.scoreSum += data
    },
    getBackAnswer(data) {
      if (data.setName) {
        this.msg.setName = data.setName
        this.msg.startTime = data.startTime
        this.msg.endTime = data.endTime
      } else {
        this.msg.questions.push(data)
      }
      var val = $('input:radio[id="btnradioa"]:checked').val();
      if (val) {
        this.msg.type = 1
      }
      val = $('input:radio[id="btnradiob"]:checked').val();
      if (val) {
        this.msg.type = 2
      }

      val = $('input:radio[id="btnradioc"]:checked').val();
      if (val) {
        this.msg.type = 3
      }

    },

    //父组件给子组件信号，要求返回答案
    getQuestion() {
      this.$refs.child.getQuestion()
      let index = 1
      for (index; index <= this.singleNumber; index++) {
        this.$refs[`childa${index}`][0].getQuestion()
      }
      index = 1
      for (index; index <= this.completionNumber; index++) {
        this.$refs[`childb${index}`][0].getQuestion()
      }
      index = 1
      for (index; index <= this.shotNumber; index++) {
        this.$refs[`childc${index}`][0].getQuestion()
      }
      index = 1
      for (index; index <= this.programmNumber; index++) {
        this.$refs[`childd${index}`][0].getQuestion()
      }

    },

    //父组件给子组件信号，要求当得分
    getScore() {
      let index = 1
      for (index; index <= this.singleNumber; index++) {
        this.$refs[`childa${index}`][0].backScoreSum()
      }
      index = 1
      for (index; index <= this.completionNumber; index++) {
        this.$refs[`childb${index}`][0].backScoreSum()
      }
      index = 1
      for (index; index <= this.shotNumber; index++) {
        this.$refs[`childc${index}`][0].backScoreSum()
      }
      index = 1
      for (index; index <= this.programmNumber; index++) {
        this.$refs[`childd${index}`][0].backScoreSum()
      }
      console.log(this.msg)
    },

    //发起ajax发送数据到后台
    sendQuestion(){
      // this.$http({
      //           url: "/creatQuestionSet",
      //           params: {
      //               'setId': localStorage.getItem('setId'),
      //               'setName':this.msg.setName,
      //               'startTime':this.msg.startTime,
      //               'endTime':this.msg.endTime,
      //               'totalScore':'',
      //               'totalItems':'',
      //               'courseId':localStorage.getItem('courseId'),
      //               'set_type':this.msg.type,
      //           },
      //           method: 'post',
      //       }).then(res => {
      //           this.questions = res.data.extend.questions
      //           console.log(this.questions)
      //       }).catch(err => {
      //           console.log(err)
      //       })
    }
  }

}

</script>