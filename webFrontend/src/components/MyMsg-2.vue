<template>
    <div>

        <!-- 大屏幕 -->

        <div>

            <h2>个人荣誉</h2>

            <hr>

            <p2>获得******************************************</p2>

            <h2>我的空间</h2>

            <hr>

            <div>

                <div>

                    <a href=""><button>个人博客</button></a>

                </div>

                <div>

                    <a href=""><button>个人博客园</button></a>

                </div>

                <div>

                    <a href=""><button>我的github</button></a>

                </div>

            </div>

            <h2>个人技能</h2>

            <hr>

            <p>1.***************</p>

            <p>2.***************</p>

            <p>3.***************</p>

            <p>4.***************</p>

            <p>5.***************</p>

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

    height: 100px;
    border-radius: 10px;
    text-align: center;
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
    