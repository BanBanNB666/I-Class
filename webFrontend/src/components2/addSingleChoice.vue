<template>
    <section class="p-5  text-dark text-center text-sm-start">
        <div class="container">
            <div class="col-md-12 column">
                <div class="jumbotron">
                    <h1>
                        录入单选题
                    </h1>

                    <div class="input-group news-input" style="width: 50%;">
                        <div class="input-group mb-3">
                            <input v-model="msg.scoreMsg" type="text" class="form-control" placeholder="分值"
                                aria-label="Username" aria-describedby="basic-addon1">
                        </div>
                    </div>


                    <textarea v-model="msg.questionMsg" name="reworkmes" cols="100" rows="7" style="OVERFLOW:   visible"
                        class="form-control" placeholder="题目描述" aria-label="Username"
                        aria-describedby="basic-addon1"></textarea>

                    <div class="input-group news-input" style="width: 50%; margin-top: 2%;">
                        <div class="input-group mb-3">
                            <input v-model="aMsg" type="text" class="form-control" placeholder="A选项描述"
                                aria-label="Username" aria-describedby="basic-addon1">
                        </div>
                        <div class="input-group mb-3">
                            <input v-model="bMsg" type="text" class="form-control" placeholder="B选项描述"
                                aria-label="Username" aria-describedby="basic-addon1">
                        </div>
                        <div class="input-group mb-3">
                            <input v-model="cMsg" type="text" class="form-control" placeholder="C选项描述"
                                aria-label="Username" aria-describedby="basic-addon1">
                        </div>
                        <div class="input-group mb-3">
                            <input v-model="dMsg" type="text" class="form-control" placeholder="D选项描述"
                                aria-label="Username" aria-describedby="basic-addon1">
                        </div>
                    </div>

                    <div class="" style="margin-top: 2%;">
                        请选择正确答案：<br>
                        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" @click="checkA('A')" :name="btnradio" :id="btnradio1"
                                autocomplete="off">
                            <label class="btn btn-outline-primary" :for="btnradio1">&ensp;A&ensp;</label>

                            <input type="radio" class="btn-check" @click="checkA('B')" :name="btnradio" :id="btnradio2"
                                autocomplete="off">
                            <label class="btn btn-outline-primary" :for="btnradio2">&ensp;B&ensp;</label>

                            <input type="radio" class="btn-check" @click="checkA('C')" :name="btnradio" :id="btnradio3"
                                autocomplete="off">
                            <label class="btn btn-outline-primary" :for="btnradio3">&ensp;C&ensp;</label>

                            <input type="radio" class="btn-check" @click="checkA('D')" :name="btnradio" :id="btnradio4"
                                autocomplete="off">
                            <label class="btn btn-outline-primary" :for="btnradio4">&ensp;D&ensp;</label>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'addSingChoice',

    data() {
        return {
            aMsg: '',
            bMsg: '',
            cMsg: '',
            dMsg: '',
            btnradio: '',
            btnradio1: '',
            btnradio2: '',
            btnradio3: '',
            btnradio4: '',
            msg: {
                scoreMsg: 0,
                questionMsg: '',
                choices: '',
                type: "选择题",
                answer:''
            }
        }
    },

    methods: {
        backScoreSum() {
            this.$emit('backScoreSum', this.msg.scoreMsg)
        },
        checkA(res) {
            this.msg.choices = res
        },

        //接受到事件，返回问题给父组件
        getQuestion() {
            this.msg.answer = 'A' + this.aMsg + ','
                + 'B' + this.bMsg + ','
                + 'C' + this.cMsg + ','
                + 'D' + this.dMsg + ','
              this.$emit('backAnswer', this.msg)
        },

    },
    created() {
        this.btnradio = parseInt(Math.random() * 10000000) + ""
        this.btnradio1 = this.btnradio + '1'
        this.btnradio2 = this.btnradio + '2'
        this.btnradio3 = this.btnradio + '3'
        this.btnradio4 = this.btnradio + '4'
    }
}

</script>