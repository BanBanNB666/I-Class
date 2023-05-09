<template>
  <div class="headblock">

    <!-- 平台图标 -->
    <img src="../assets/logo.png" alt=" " class="logo headphoto">

    <!-- 用户登录登场个人信息组件 -->
    <div class="userbtn">

      <!-- 个人头像图标 -->
      <img :src="user.scr" alt="" class="headphoto ">
      <!-- 按钮 -->
      <div class="dropdown">
        <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
          aria-expanded="false">
          {{user.name}}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li style="text-align: center;">
            <button v-on:click="toWhere('/mymsg')" class="btn">个人信息</button>
          </li>
          <li style="text-align: center;">
            <button v-on:click="toWhere('/')" class="btn">设置</button>
          </li>
          <li style="text-align: center;">
            <button v-on:click="toWhere('/')" class="btn">退出登录</button>
          </li>
        </ul>
      </div>
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
        name: "asaasd"
      },
      scr: require("../assets/logo.png")
    }
  },
  methods: {
    toWhere(scr){
      // this.$router.push('/class/homework')  
      const routeData = this.$router.resolve({
        path: scr,
        query: {
            
        }
      })
      window.open(routeData.href, '_blank')

    }
  }

}
</script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  padding-left: 30px;

}
button{
  width: 100%;
}
button:hover{
  background-color: RGB(198,199,200);
}
.username {
  display: inline-block;
  text-align: center;
  padding: 5px
}

.headblock {
  height: 50px;
  padding: 5px;
  background-color: whitesmoke;
  box-shadow: 5px 5px 5px #c0bebe;

}

.userbtn {
  height: 40px;
  float: right;
  margin-right: 20px;
  background-color: transparent;
  border: 0px;
  display: flex;
  align-items: center;
}

.headphoto {
  height: 40px;
}
</style>
  