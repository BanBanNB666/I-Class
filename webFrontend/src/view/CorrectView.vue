<template>
    <div>
        <h3 style="margin-left: 40% ; margin-top:2%">批改第n次作业</h3>
    </div>
    <!-- 导航按钮组 -->
    <div class="toolbar row" style="padding:2% ;">
        <div class="col-3" v-for="ques, index in questions" :key="index" style="float: left;">
            <button type="button" class="btn btn-primary btn2" @click="jump(index + 1)">{{ index + 1 }}</button>
        </div>
    </div>

    <div v-for="ques, index in questions" :key="index">
        <div v-if="ques.type == '简答题'">
            <div v-bind:id="index + 1">
                <h4 style="margin-left:5%">题{{ index + 1 }}</h4>
            </div>
            <CorrectShotAnswer :msgF="questions[index]" :ref="`child${index}`" @backAnswer="backanswer">
            </CorrectShotAnswer>
        </div>
        <div v-if="ques.type == '编程题'">
            <div v-bind:id="index + 1">
                <h4 style="margin-left:5%">题{{ index + 1 }}</h4>
            </div>
            <CorrectProgram :msgF="questions[index]" :ref="`child${index}`" @backAnswer="backanswer"></CorrectProgram>
        </div>
    </div>

    <button data-bs-toggle="modal" data-bs-target="#myModal" style="margin-left:30% ;" v-on:click="getAnswer"
        class="btn btn-primary btn-lg my-4" data-toggle="modal" data-target="#myModal">
        提交改分
    </button><br>
    <div class="modal fade" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- 模态框头部 -->
                <div class="modal-header">
                    <h4 class="modal-title">确定提交</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- 模态框内容 -->
                <div class="modal-body">
                    <input type="text" readonly class="form-control" placeholder="提交后不可修改" name="email">
                </div>

                <!-- 模态框底部 -->
                <div class="modal-footer">
                    <button type="button" @click="sendCorrect" class="btn btn-danger"
                        data-bs-dismiss="modal">确定</button>
                </div>

            </div>
        </div>
    </div>
</template>



<script>


import $ from 'jquery';
import CorrectShotAnswer from '../components2/correctShotAnswer.vue';
import CorrectProgram from '../components2/correctProgram.vue';

export default {
    name: 'AnswerQuestionView',

    components: { CorrectShotAnswer, CorrectProgram },

    data() {

        return {
            count: 0,
            setId: '8',
            questions: [],

            allScore: [],
            stuAnswer: [],
        }
    },

    methods: {

        jump(index) {
            let temp = '#' + index
            console.log("i am in jum" + temp)
            $('html,body').animate({ scrollTop: $(temp).offset().top - 8 }, 200)
        },
        addCount() {
            this.count++
        },
        cli() {
            console.log(this.code)
        },
        goHistory() {
            $('html,body').animate({ scrollTop: $("#history").offset().top - 8 }, 200)
        },
        refresh() {
            this.$refs.codeMirror.refresh()
        },
        // 获取编辑器的值
        getValue() {
            return this.$refs.codeMirror.code
        },
        // 回显赋值
        setValue() {
            this.$refs.codeMirror.setValue('回显的值:比如 function aa() {}')
        },

        //得到所有的题目用以展示
        getQuestion() {
            this.$http({
                url: "/showAllQuestions",
                params: {
                    'setId': this.setId
                },
                method: 'post',

            }).then(res => {
                this.questions = res.data.extend.questions

                for (let i = 0; i < this.questions.length; i++) {
                    // this.questions[i].stuAnswer=this.stuAnswer[i]
                    if (this.questions[i].type == '选择题' || this.questions[i].type == '填空题') {
                        this.questions.splice(i, 1);
                        i--;
                    }
                }
                console.log(this.questions)
            }).catch(err => {
                console.log(err)
            })
        },


        //父组件给子组件信号，要求返回答案
        getAnswer() {
            let index = 0
            for (index; index < this.questions.length; index++) {
                this.$refs[`child${index}`][0].getAnswer()
            }
        },

        //父组件得到子组件的答案并组合打包好
        backanswer(data) {
            // 事件处理函数
            this.allScore.push(data)
        },

        //发起ajax将数据发送给后台
        sendCorrect() {
            this.$http({
                url: "/correctingStuAnswers",
                params: {
                    'setId': JSON.parse(localStorage.getItem('setId')),
                    'studentId': JSON.parse(localStorage.getItem('correctStudentId')),
                },
                data: this.allScore,
                method: 'post',
            }).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }

    },

    created() {
        // this.setId = JSON.parse(localStorage.getItem('setId')),
        // this.correctStudentId = JSON.parse(localStorage.getItem('correctStudentId')),
        console.log(this.setId)
        this.getQuestion();//需要触发的函数

        //请求学生的答卷
        // this.$http({
        //     url: "/getStuAnswerSetInfo",
        //     params: {
        //         'answerSetId': '17',
        //     },
        //     method: 'get',
        // }).then(res => {
        //     console.log(res)
        //     this.stuAnswer = res.data.extend.Answers
        //     console.log(this.stuAnswer)
        // }).catch(err => {
        //     console.log(err)
        // })
        console.log(JSON.parse(localStorage.getItem('item')))
        console.log(JSON.parse(localStorage.getItem('setName')))
    },
}

</script>

<style>
.toolbar {
    position: fixed;
    /*下面的可以是和定位配合使用的*/
    right: 2%;
    width: 18%;
    height: 30%;
    top: 10%;
    border: #b0acac solid 1px;
    background: #f8f8f8;
    border-radius: 20px;
}
</style>








