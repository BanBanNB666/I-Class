<template>
    <section class="p-5  text-dark text-center text-sm-start">
        <div class="container">
            <div class="col-md-8 column">
                <div class="jumbotron">




                    <div style="margin-top: 2%;">题目：</div>
                    <textarea v-model="msg.questionMsg" name="reworkmes1" cols="100" rows="4"
                        style="OVERFLOW:   visible" class="form-control" placeholder="题目描述+分值" disabled=ture
                        aria-label="Username" aria-describedby="basic-addon1"></textarea>

                    <button style="margin-left:30% ;" class="btn btn-primary btn-lg my-4"
                        data-toggle="modal" data-target="#myModal" ><a style="text-decoration: none; color: white;" target="_blank" href="https://www.baidu.com/">点击查看学生代码效果</a>
                        
                    </button>

                    <div style="margin-top: 2%;">请打分：</div>
                    <div class="input-group news-input" style="width: 50%; margin-top: 2%;">
                        <div class="input-group mb-3">
                            <input v-model="msg.scoreMsg" name="name1" type="text" class="form-control"
                                placeholder="请打分" aria-label="Username" aria-describedby="basic-addon1">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'correctProgram',
    props: [
        'msgF'
    ],
    data() {
        return {
            msg: {
                questionMsg: '',
                answerMsg: '',
                scoreMsg: 0,
                type: "编程题",
                stuAnswerMsg: '',
            },
        }
    },
    methods: {

        //发送数据回父组件
        getAnswer() {
            this.$emit('backAnswer', this.msg.scoreMsg)
        },
    },

    created() {
        console.log(this.msgF)
        this.msg.questionMsg = this.msgF.content + "(满分" + this.msgF.score + "分）"
    }
}
</script>