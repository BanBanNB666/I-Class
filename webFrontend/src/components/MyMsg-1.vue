<template>

    <div class = 'container'>
        <blockquote>
            <h2>王思聪</h2>
            <footer>学生</footer>
        </blockquote>
        <div class="row">
            <img class="img-fluid headphoto center-block" :src="user.scr" alt="Chania">
        </div>
        <div class="row text-center">
            <h3>个人介绍</h3>
        </div>uv
        <div>
            <span>我很帅还很有钱</span>
        </div>
        <div>
            <table class="table table-bordered table-striped table-hover table-condensed">
                <tr>
                    <td>姓名</td>
                    <td>YYY</td>
                    <td>年龄</td>
                    <td>18</td>
                </tr>
                <tr>
                    <td>学校</td>
                    <td>XX大学</td>
                    <td>学历</td>
                    <td>本科</td>
                </tr>
                <tr>
                    <td>专业</td>
                    <td>软件工程</td>
                    <td>学制</td>
                    <td>全日制</td>
                </tr>
            </table>
        </div>
    </div>
</template> 
  
<script>

export default {
    //name: 'HelloWorld',
    data() {
        return {
            user: {
                scr: require("../assets/默认头像.png"),
                name: "default"
            }
        }
    },
    methods: {
        toWhere(target) {//按钮跳转事件
            this.$router.push(target)
        }
    }
}
</script>
    
<style scoped>
a {
    text-decoration: none;
    color: black;
}

.selectblock {
    padding: 10px;
    height: 650px;
    border: 1px solid;

}

.headphoto {
    width: auto;
    height: 200px;
    border-radius: 10px;
}

.photodiv {
    text-align: center;
}

.username {

    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 20px;
}

li {
    height: 50px;
    list-style: none;
    text-align: center;

}

ul {
    padding-top: 20px;
    padding-left: 0px;

}

button {
    border: 0px solid;
    width: 100%;
    height: 50px;
    list-style: none;
    text-align: center;
    background-color: transparent;
    display: block;
}

button:hover {
    background-color: orange;
}
</style>
    