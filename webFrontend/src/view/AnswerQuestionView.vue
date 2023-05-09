<template>
    <div>
        <h3 style="margin-left: 40% ; margin-top:2%">{{ setName }}</h3>

    </div>
    <!-- 导航按钮组 -->
    <div class="toolbar row" style="padding:2% ;">
        <div class="col-3" v-for="ques, index in questions" :key="index" style="float: left;">
            <button type="button" class="btn btn-primary btn2" @click="jump(index + 1)">{{ index + 1 }}</button>
        </div>
    </div>

    <div v-for="ques, index in questions" :key="index">
        <div v-if="ques.type == '选择题'">
            <div v-bind:id="index + 1">
                <h4 style="margin-left:5%">题{{ index + 1 }}</h4>
            </div>
            <AnswerSingleChoice :msgF="questions[index]" :ref="`child${index}`" @backAnswer="backanswer">
            </AnswerSingleChoice>
        </div>
        <div v-if="ques.type == '填空题'">
            <div v-bind:id="index + 1">
                <h4 style="margin-left:5%">题{{ index + 1 }}</h4>
            </div>
            <AnswerCompletion :msgF="questions[index]" :ref="`child${index}`" @backAnswer="backanswer">
            </AnswerCompletion>
        </div>
        <div v-if="ques.type == '简答题'">
            <div v-bind:id="index + 1">
                <h4 style="margin-left:5%">题{{ index + 1 }}</h4>
            </div>
            <AnswerShotAnswer :msgF="questions[index]" :ref="`child${index}`" @backAnswer="backanswer">
            </AnswerShotAnswer>
        </div>
        <div v-if="ques.type == '编程题'">
            <div v-bind:id="index + 1">
                <h4 style="margin-left:5%">题{{ index + 1 }}</h4>
            </div>
            <AnswerProgramming :msgF="questions[index]" :ref="`child${index}`" @backAnswer="backanswer"
                :usermsg="usermsg" :student-no="studentMsg.studentNo"></AnswerProgramming>
        </div>
    </div>

    <button data-bs-toggle="modal" data-bs-target="#myModal" style="margin-left:30% ;" v-on:click="getAnswer" class="btn btn-primary btn-lg my-4" data-toggle="modal"
        data-target="#myModal">
        提交
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
                    <button type="button" @click="sendAnswer" class="btn btn-danger" data-bs-dismiss="modal">确定</button>
                </div>

            </div>
        </div>
    </div>

</template>



<script>
import AnswerProgramming from '../components2/answerProgramming.vue'
import AnswerSingleChoice from '@/components2/answerSingleChoice.vue'
import AnswerShotAnswer from '@/components2/answerShotAnswer.vue';
import AnswerCompletion from '@/components2/answerCompletion.vue';
import $ from 'jquery';

export default {

    name: 'AnswerQuestionView',

    components: { AnswerProgramming, AnswerSingleChoice, AnswerShotAnswer, AnswerCompletion },
    props: [],

    data() {

        return {
            count: 0,
            usermsg: null,
            temp: {

            },
            questions: [],
            studentMsg: '',
            allAnswer: [],
            setId: '',
            setName: '',
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
            console.log("i am in add")
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
                    'setId': 8
                },
                method: 'post',

            }).then(res => {
                this.questions = res.data.extend.questions
                console.log(this.questions)
            }).catch(err => {
                console.log(err)``
            })
        },


        //父组件给子组件信号，要求返回答案
        getAnswer() {
            let index = 0
            for (index; index < this.questions.length; index++) {
                this.$refs[`child${index}`][0].getAnswer()
            }
        },

        //父组件得到子组件的答案
        backanswer(data) {
            // 事件处理函数
            this.allAnswer.push(data.replace(/\s*/g, ''))
            console.log(this.allAnswer)
        },

        //发起ajax请求提交数据到后台
        sendAnswer() {
            console.log(this.setId)
            console.log(this.studentMsg.studentId)
            console.log(this.allAnswer)
            this.$http({
                url: "/creatStuAnsSet",
                params: {
                    'setId': this.setId,
                    'studentId': this.studentMsg.studentId,
                },
                data: this.allAnswer,

                method: 'post',

            }).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }

    },


    created() {
        this.getQuestion();//需要触发的函数
        this.studentMsg = JSON.parse(this.$route.query.studentMsg)
        this.setId = JSON.parse(localStorage.getItem('setId'))
        this.setName = JSON.parse(localStorage.getItem('setName'))

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








