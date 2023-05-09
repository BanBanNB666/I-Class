<template>
    <section class="p-5  text-dark text-center text-sm-start">
        <div class="container">
            <div class="col-md-9 column">
                <div class="jumbotron">
                    <!-- placeholder="这里是题目描述和分值" -->
                    <textarea name="reworkmes" cols="100" rows="4" style="OVERFLOW:   visible" class="form-control"
                        v-model="content" disabled=true aria-label="Username"
                        aria-describedby="basic-addon1"></textarea>

                    <div class="input-group news-input" style="width: 50%; margin-top: 2%;">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" disabled=true v-model="questionQptions[0]"
                                aria-label="Username" aria-describedby="basic-addon1">
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" disabled=true v-model="questionQptions[1]"
                                aria-label="Username" aria-describedby="basic-addon1">
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" disabled=true v-model="questionQptions[2]"
                                aria-label="Username" aria-describedby="basic-addon1">
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" disabled=true v-model="questionQptions[3]"
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
import $ from 'jquery'

$("input[name='radio']").on("change", function () {
    var a = $("input[name='radio']:checked").val(); console.log("选中的radio的值是：" + a);
});
export default {
    name: 'answerSingleChoice',
    props: [
        'msgF'
    ],
    data() {
        return {
            btnradio: '',
            options: "",
            content: '',
            questionQptions: [],
            score: 0,
            answer: '',
            check: '',
            btnradio1: '',
            btnradio2: '',
            btnradio3: '',
            btnradio4: '',

        }
    },
    methods: {
        parentMsg(msg) {
            console.log(msg)


        },
        getAnswer() {
            this.$emit('backAnswer', this.check)
        },
        checkA(res) {
            this.check = res
        },


    },
    created() {
        this.content = this.msgF.content + "  ( " + this.msgF.score + "分)"
        this.options = this.msgF.questionOptions
        this.questionQptions = this.options.split(",")
        this.score = this.msgF.score
        this.btnradio = parseInt(Math.random() * 10000000) + ""
        this.btnradio1 = this.btnradio + '1'
        this.btnradio2 = this.btnradio + '2'
        this.btnradio3 = this.btnradio + '3'
        this.btnradio4 = this.btnradio + '4'
    }
}
</script>

