<template>
    <el-row>
        <el-col :span="17">
            <el-row>
                <table class="table table-hover" style="border: 2px;border-color:rgb(235,238,244);">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">文件名</th>
                            <th scope="col">大小</th>
                            <th scope="col">文件类型</th>
                            <th scope="col">操作</th>
                        </tr>
                    </thead>
                    <tbody id="bucket1">
                        <tr @contextmenu.prevent="show($event)" @click="openOneFile(oneFile)"
                            v-for="(oneFile, index) in props.fileNow.Files" :key="oneFile">
                            <th scope="row" v-if="oneFile.fileType == 'folder'">{{ index + 1 }} <img src="../imgs/files.png"
                                    alt="图片描述">
                            </th>
                            <th scope="row" v-if="oneFile.fileType == 'word'"> {{ index + 1 }} <img src="../imgs/word.png"
                                    alt="图片描述">
                            </th>
                            <th scope="row" v-if="oneFile.fileType == 'pdf'"> {{ index + 1 }} <img src="../imgs/pdf.png"
                                    alt="图片描述">
                            </th>
                            <th scope="row" v-if="oneFile.fileType == 'txt'">{{ index + 1 }} <img src="../imgs/txt.png"
                                    alt="图片描述"></th>
                            <th scope="row" v-if="oneFile.fileType == 'mp3'"> {{ index + 1 }} <img src="../imgs/music.png"
                                    alt="图片描述">
                            </th>
                            <th scope="row" v-if="oneFile.fileType == 'jpg' || oneFile.fileType == 'png'">{{ index + 1 }}
                                <img src="../imgs/img.png" alt="图片描述"></th>
                            <th scope="row" v-if="oneFile.fileType == 'mp4'"> {{ index + 1 }} <img src="../imgs/video.png"
                                    alt="图片描述">
                            </th>

                            <td style="padding-top: 15px;">{{ oneFile.fileName }}</td>
                            <td v-if="oneFile.fileSize != '0'" style="padding-top: 15px;">{{ oneFile.fileSize }} kb</td>
                            <td v-if="oneFile.fileSize == '0'" style="padding-top: 15px;"></td>
                            <td style="padding-top: 15px;">{{ oneFile.fileType }}</td>
                            <td>
                                <div class="dropdown">
                                    <button @click.stop="" class="btn btn-secondary dropdown-toggle" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        操作
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><button @click.stop="" class="dropdown-item">下载文件</button></li>
                                        <li><button @click.stop="" class="dropdown-item" href="#">删除文件</button></li>
                                        <li><button @click.stop="" class="dropdown-item" type="button"
                                                data-bs-toggle="modal" data-bs-target="#upLoad1" data-toggle="modal"
                                                data-target="#myModal">分享文件</button></li>
                                    </ul>
                                </div>


                                <div class="modal fade" id="upLoad1">
                                    <div class="modal-dialog">
                                        <div class="modal-content">


                                            <div class="modal-header">
                                                <button @click.stop="" type="button" class="btn-close"
                                                    data-bs-dismiss="modal"></button>
                                            </div>


                                            <div @click.stop="" class="modal-body">
                                                分享账号：
                                                <input type="text" class="form-control">
                                            </div>


                                            <div class="modal-footer">
                                                <button @click.stop="" type="button" class="btn btn-danger"
                                                    data-bs-dismiss="modal">确定</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <div id="menu2">
                            <a href="javascript:history.back();">下载文件</a>
                            <br />
                            <br />
                            <a href="javascript:history.back();">文件</a>
                            <br />
                            <br />
                            <a href="javascript:history.back();">分享文件</a>
                            <br />
                        </div>
                    </tbody>
                </table>
            </el-row>
        </el-col>
        <!-- v-if="props.fileNow.Files.length != 0" -->
        <el-col v-if="props.navFile != ''"  :span="7">
           <LoginOld :fileNow="props.fileNow"></LoginOld>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import LoginOld from '../components/LoginOld.vue'

//从父组件拿数据
const props = defineProps<{
    fileNow: any
    navFile: any

}>()



//给父组件事件：打开文件
const emit = defineEmits(['on-click'])
const openOneFile = (oneFile: any) => {
    if (oneFile) {
        emit('on-click', oneFile, oneFile)
    } else {
        emit('on-click', "")
    }
}
const show = (e: MouseEvent) => {
    e.preventDefault();//取消默认的浏览器自带右键 
    var menu = document.getElementById('menu2');//获取右键菜单
    var container = document.getElementById('bucket1');//获取区域
    /*获取当前鼠标右键按下后的位置，据此定义菜单显示的位置*/
    if (menu != null && container != null) {
        const x = e.clientX;
        const y = e.clientY;
        console.log(x, y);



        menu.style.left = x as unknown as string + "px";
        menu.style.top = y as unknown as string + "px";
        console.log(menu.style.left, menu.style.top)
        menu.style.visibility = "visible";
    }

}
const stopBob = (e: MouseEvent) => {
    console.log("I am in stop")
    e.stopPropagation;
}
const toggleDropdown = () => {
    let temp = document.getElementById("myDropdown");
    if (temp != null) {
        temp.classList.toggle("show");
    }
}



</script>



<style scoped>
#menu2 {
    width: 130px;
    padding: 10px;
    border: 1px solid #ddd;
    visibility: hidden;
    position: absolute;
    background-color: white;
}

img {
    width: 30px;
    /* 图片宽度为父容器宽度 */
    height: 30px;
    /* 图片高度为父容器高度 */
    object-fit: contain;
    /* 等比例缩放图片 */
}

.btn {
    background-color: rgb(88, 151, 196);
}</style>