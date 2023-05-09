
<template>
    <section class="p-5  text-dark text-center text-sm-start" style="margin-top:3% ;">
        <div class="container">
            <div class="col-md-6 column">
                <div class="jumbotron row">
                    <div class="input-group mb-3">
                        <input v-model="msg.setName" type="text" class="form-control" placeholder="题目集名字"
                            aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                    <div class="input-group mb-3 ">
                        <input v-model="msg.startTime" type="text" class="form-control"
                            placeholder="开始时间 YYYY-MM-DD hh:mm" aria-label="Username" aria-describedby="basic-addon1">
                    </div>

                    <div class="input-group mb-3 ">
                        <input v-model="msg.endTime" type="text" class="form-control"
                            placeholder="结束时间 YYYY-MM-DD hh:mm" aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                </div>
            </div>
        </div>
    </section>






</template>

		

<script>

export default {
    name: "addTime",
    data() {
        return {

            msg: {
                startTime: '',
                endTime: '',      
                setName: '',
            }
        }
    },
    methods: {
        getQuestion() {
            this.$emit('backAnswer', this.msg)
        },

    },




}

</script>