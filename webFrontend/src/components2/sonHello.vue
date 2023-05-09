
<template>
  <button @click="increment">Count is: {{ count }}</button>


  <div>
    <ul>
      <li v-for="item in messages" :key="item">父组件输入了：{{ item }}</li>
    </ul>
  </div>
</template>
  
<script>
export default {




  // data() 返回的属性将会成为响应式的状态
  // 并且暴露在 `this` 上
  data() {

    return {
      count: 0,
      messages:[],
    }
  },

  // methods 是一些用来更改状态与触发更新的函数
  // 它们可以在模板中作为事件监听器绑定
  methods: {
    increment() {
      this.$emit('child-event', '我是子组件向父组件传递的内容，但是按钮在子组件')
    },
    parentMsg: function (msg) {
      this.messages.push(msg);
    },
  },

  // 生命周期钩子会在组件生命周期的各个不同阶段被调用
  // 例如这个函数就会在组件挂载完成后被调用
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }


}
</script>
  