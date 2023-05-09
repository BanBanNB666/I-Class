<template>
  <div class="container">
    <div class="row">
      <!-- 导航栏 -->
      <ul class="nav nav-tabs pt-2 px-2 col">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/msg">全部</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-secondary" href="/msg">已完成</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-secondary" href="/msg">未完成</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-secondary">已结束</a>
        </li>
      </ul>
      <button class="btn btn-primary m-2 col-1" v-if="userType == 2" @click="toWhere('/addQuestion')">
        创建作业
      </button>
    </div>

    <!-- 作业列表 -->
    <div style="overflow:auto;height:590px;background-color: white;">
      <template v-for="set in questionSets" v-bind:key="set.setId">
        <div class="card bg-light text-dark mt-2  mx-2">
          <!-- 打开作业界面 -->
          <button class="btn-normal" v-on:click="toAnwser('/answerQuestion',set.setId,set.setName)" v-if="userType == 1">
            <div class="card-body">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book-half"
                viewBox="0 0 16 16">
                <path
                  d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
              </svg>
              {{ set.setName }}
              <span style="float: right;">截止时间：{{ set.endTime }}</span>
              <!-- {{item.statu}} -->
            </div>
          </button>
          <button class="btn-normal" v-on:click="toManage('/submit',set.setName)" v-if="userType == 2">
            <div class="card-body">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book-half"
                viewBox="0 0 16 16">
                <path
                  d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
              </svg>
              {{ set.setName }}
              <span style="float: right;">状态</span>
              <!-- {{item.statu}} -->
            </div>
          </button>
        </div>
      </template>
    </div>
  </div>
</template>
    
<script>

export default {
  name: 'HomeworkList',
  props: [
    'userType',
    'courseId',
    'studentMsg'
  ],
  data() {
    return {
      questionSets: [

      ]
    }
  },
  methods: {
    toAnwser(scr,data,data1) {//回答问题页面
      // this.$router.push('/class/homework')  
      // data = JSON.parse(this.$route.query.msg).data
      localStorage.setItem("setId", JSON.stringify(data))
      localStorage.setItem("setName", JSON.stringify(data1))

      const routeData = this.$router.resolve({
        path: scr,
        query: {
          'studentMsg': JSON.stringify(this.studentMsg),
        }
      })
      window.open(routeData.href, '_blank')

    },
    toManage(scr,setName) {//作业管理界面
      localStorage.setItem("setName", JSON.stringify(setName))
      const routeData = this.$router.resolve({
        path: scr,
        query: {

        }
      })
      window.open(routeData.href, '_blank')
    }
  },
  created() {
    this.$http({
      url: "/IntoQuestionSetInfo",
      params: {
        'courseId': this.courseId
      },
      method: 'post',

    }).then(res => {
      console.log(res.data.extend.questionSets)
      this.questionSets = res.data.extend.questionSets
      
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
      
<style scoped>
.container {
  height: 650px;
  background-color: whitesmoke;
  box-shadow: 5px 5px 5px #c0bebe;
}

.btn-normal {
  text-align: left;
  border: none;
  background-color: white;
}
</style>
      