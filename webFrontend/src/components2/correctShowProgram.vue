<!-- <template>
    <div>    
        <button style="margin-left:30% ;" v-on:click="getAnswer">
        正则表达式
    </button><br></div>
    <p id="input" v-html="code"></p>

</template>

<script>
export default {
    name: 'correctShowProgram',
    props: ['msgF'],
    data() {
        return {
            code: '<html><head><title>无标题文档</title></head><body ><input class="red"   value="弹出对话框" onclick="MsgBox()" /><style>.red{background-color: red;color: red;}</style></body></html>',
            style: '',
            script: `<script>function MsgBox() {alert("hello")}</scrip` + `t>`,
            html:`
            <html>

<head>
	<title>无标题文档</title>
</head>

<body>

	<input type="button" value="弹出对话框" onclick="MsgBox()" />




	<style>
		
	</style>

</body>



</html>

`
        }
    },
    methods: {
        getAnswer() {
            const script = document.createElement('script')
            script.innerHTML = document.getElementById('input').value
            this.$refs.testxss.append(this.script)
        }
    },
    created() {
        // this.code = this.code.replace(/\s*/g, "");
        // this.script = this.code.match(/<script>.*(<\/script>)/g)
        // this.style = this.code.match(/<style>.*(<\/style>)/g)
        // this.code = this.code.replace(/<script>.*(<\/script>)/g, "");
        // this.code = this.code.replace(/<style>.*(<\/style>)/g, "");

        // console.log(this.code)
        // console.log(this.style)
        // console.log(this.script)
    },


}
</script> -->

<!-- <template>
    <div id="app">
    <div v-append="html" @appended="appended"></div>
</div>
</template> -->
<!-- <script>
import Vue from 'vue/dist/vue.esm'
import VueAppend from 'vue-append'
import 'jquery'

// use the plugin
Vue.use(VueAppend);

const html = `
<div id="test">1</div>
<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
<script>
var i = 1;
setInterval(function() {
    document.getElementById("test").innerHTML = ++i;
}, 1000);
</script>

`;

new Vue({
  el: '#app',
  data: {
    html: html
  },
  methods: {
    appended() {
      console.log('appended!');
      // could use jQuery 😊
      alert(window.jQuery);
    }
  }
});
</script> -->

