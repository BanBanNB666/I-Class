
<template>

    <section class="p-5  text-dark text-center text-sm-start">
        <div class="container">
            <div class="col-md-9 column">
                <div class="jumbotron">
                    <div>
                        <textarea :placeholder="content" disabled=true name="reworkmes" cols="100" rows="7"
                            style="OVERFLOW:   visible;resize: vertical;" class="form-control" aria-label="Username"
                            aria-describedby="basic-addon1">
                        </textarea>
                    </div>
                    <div style="margin-top: 2%;" class="row">

                        <div class="col-2 pt-2"
                            style="border: 2px solid whitesmoke; background-color:white; height:500px">
                            <div class="" id="accordionExample" v-for="(d, index) in doc" :key="index">
                                <div class="accordion-item p-2" style="border: 1px solid whitesmoke;">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" :data-bs-target="'#s' + index">
                                            {{ d.docName }}
                                        </button>
                                    </h2>
                                    <div :id="'s' + index" class="accordion-collapse collapse">
                                        <div class="accordion-body">
                                            <div v-for="(f, n) in d.file" :key="n"
                                                style="font-size:15px; border: 1px solid whitesmoke;"
                                                :class="{ 'selectd': selectNum == index + 's' + n }">
                                                <button @click="select(index, n)"
                                                    style="border: none; background-color: transparent;"> &nbsp;
                                                    &nbsp;>{{ f.fileName }}</button>
                                            </div>
                                            <div style="text-align: center;">
                                                <input style="width: 100%;" :id="'fileName' + index" type="text"
                                                    v-if="add && currentAdd == index" placeholder="请输入文件名"
                                                    @change="saveFile(d.file, index)" @blur="add = false">
                                                <button @click="addFile(index)"
                                                    style="border: none ; background-color: transparent;">+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style="border: 1px solid grey;">

                                </div>
                            </div>
                            <div style="text-align: center;">
                                <input style="width: 100%;" id="docName" type="text" v-if="add1" placeholder="请输入文件夹名"
                                    @change="saveDoc(doc)" @blur="add1 = false">
                                <button @click="addDoc()"
                                    style="font-size: 20px; border: none ; background-color: transparent;">
                                    +
                                </button>
                            </div>
                        </div>
                        <div class="col" v-if="currentfile != null">
                            <div>
                                <input type="text" style="border:none" id="cfileName"
                                    :value="doc[currentDoc].file[currentfile].fileName" @change="changeFileName()">
                                <button class="" style="float: right;"
                                    @click="currentfile = null; selectNum = null">X</button>
                                <button class="" style="float: right;">保存</button>
                                <button class="" style="float: right;">运行</button>
                                <button class="" style="float: right;" @click="deleteFile()">删除</button>
                            </div>
                            <codemirror v-model="code" placeholder="Code gose here..."
                                :style="{ height: '500px', width: '100%', border: '1px' }" :autofocus="true"
                                :indent-with-tab="true" :tabSize="2" :extensions="extensions"
                                @ready="log('ready', $event)" @change="log('change', $event)"
                                @focus="log('focus', $event)" @blur="log('blur', $event)" :on-change="saveCode()" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>




</template>
  
<script>
import { Codemirror } from "vue-codemirror";
// import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
// import { oneDark } from "@codemirror/theme-one-dark";

import { ref } from "vue";

export default {
    components: {
        Codemirror,
    },
    props: [
        'msgF',
        'studentNo'
    ],

    // setup() {
    //     const code = ref(`在这里编程`);
    //     //   const extensions = [javascript(), oneDark];
    //     const extensions = [html()];

    //     return {
    //         code,
    //         extensions,
    //         log: console.log,
    //     };
    // },

    data() {
        return {
            selectNum: 'asx',
            currentAdd: null,
            currentDoc: null,
            currentfile: null,
            add: false,
            add1: false,
            change: true,
            content: '',
            code: ref(`在这里编程`),
            extensions: [html()],
            log: console.log,
            doc: [
                {
                    docName: 'html', file: [
                        { fileName: 'main1.html', fileContent: 'a' },
                        { fileName: 'main2.html', fileContent: 'b' }
                    ]
                },
                {
                    docName: 'css', file: [
                        { fileName: 'main1.css', fileContent: 'c' },
                        { fileName: 'main2.css', fileContent: 'd' },
                    ]
                },
            ]
        }
    },
    methods: {
        parentMsg(msg) {
            console.log(msg)
        },
        getAnswer() {
            let i,j
            for (i = 0; i < this.doc.length; i++) {
                for (j = 0; j < this.doc[i].file.length; j++) {
                    this.$http({
                        url: "/file/set",
                        params: {
                             'file':this.doc[i].file[j].fileContent,
                             'fileName':this.doc[i].file[j].fileName.split('.')[0],
                             'end':this.doc[i].file[j].fileName.split('.')[1],
                             'studentNo':this.studentNo,
                             'questionId':this.msgF.id,
                             'dir':this.doc[i].docName
                        },
                        method: 'post',

                    }).then(res => {
                        console.log(res)
                    }).catch(err => {
                        console.log(err)
                    })
                }
            }

        },
        addFile(index) {
            this.add = true
            this.currentAdd = index
        },
        saveFile(file, index) {
            var obj = { fileName: document.getElementById('fileName' + index).value }
            file.push(obj)
            this.add = false
            console.log("nmsl" + document.getElementById('fileName' + index).value)
            console.log(file)
        },
        addDoc() {
            this.add1 = true

        },
        saveDoc(doc) {
            var obj = { docName: document.getElementById('docName').value, file: [] }
            doc.push(obj)
            this.add1 = false
        },
        select(index, n) {//选择文件展示
            this.selectNum = index + 's' + n
            this.currentDoc = index;
            this.currentfile = n;
            console.log(index + n)
            this.code = this.doc[this.currentDoc].file[this.currentfile].fileContent
        },
        changeFileName() {//文件给重命名
            this.doc[this.currentDoc].file[this.currentfile].fileName = document.getElementById("cfileName").value
        },
        deleteFile() {//删除文件
            this.doc[this.currentDoc].file.splice(this.currentfile, 1)
            console.log(this.doc)
            this.currentfile = null
        },
        saveCode() {
            this.doc[this.currentDoc].file[this.currentfile].fileContent = this.code
        }
    },
    created() {
        console.log(this.msgF)
        this.content = this.msgF.content
    }
};
</script>

<style scoped>
.selectd {
    background-color: whitesmoke;
}
</style>
  






