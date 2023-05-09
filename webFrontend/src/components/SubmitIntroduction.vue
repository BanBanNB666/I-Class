<template>
    <div class="row m-0">
        <div class="col-4 text-end">
            <img class="img-fluid photo" :src="classMsg.scr" alt="Chania">
        </div>
        <div class="col-8">
            <br>
            <br>
            <br>
            <h1>运筹学</h1>
            <p>班级: {{classMsg.classgroup}}</p>
            <p>运筹学第一次作业</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            classname: '运筹学',
            classMsg: {
                teacher: '王建林',
                classgroup: '202013',
                scr: require("../assets/运筹学.jpg"),
                name: "运筹学"
            }
        }
    },
    methods: {
        toClass() {
            // this.$router.push('/class/homework')  
            const routeData = this.$router.resolve({
                path: '/class/introduction',
                query: {

                }
            })
            window.open(routeData.href, '_blank')

        }
    }
}
</script>
      
<style scoped>
 h1{
    margin-bottom: 20px;

 }
 .photo{
        height: 200px;
        width: auto;
        border-radius: 10px;
    }
</style>
      