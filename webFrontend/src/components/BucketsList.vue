<template>
    <div >
        <ul class="nav flex-column" id="bucket" @contextmenu.prevent="show($event)">
            <li class="nav-item" v-for="bucket in data" @click="emitBucket(bucket.bucketName)">
                <i class="bi bi-database"> {{ bucket.bucketName }}</i>
                <hr>
            </li>
            <div id="menu">
                <a href="javascript:history.back();">删除桶</a>
                <hr />
                <a href="javascript:history.back();">分享桶</a>
            </div>
            
        </ul>
    </div>
</template>

<script setup lang="ts">

//从父组件拿数据
const props = defineProps<{
    data: any
}>()

//给父组件事件：传出当前文件位置
const emit = defineEmits(['on-click'])
const emitBucket = (bucketName: string) => {
    let temp: any;
    let isFind = false;
    for (temp in props.data) {
        if (props.data[temp].bucketName == bucketName) {
            emit('on-click', props.data[temp])
            isFind = true;
        }
    }
    if (!isFind) {
        emit('on-click', "")
    }
}


const show = (e:MouseEvent) =>  {
    e.preventDefault();//取消默认的浏览器自带右键 
    var menu = document.getElementById('menu');//获取右键菜单
    var container = document.getElementById('bucket');//获取区域
    /*获取当前鼠标右键按下后的位置，据此定义菜单显示的位置*/
    if (menu != null && container != null) {
        const x = e.clientX;
        const y = e.clientY;
        console.log(x,y);
        
        

        menu.style.left = x as unknown as string + "px";
        menu.style.top = y as unknown as string  + "px";
        console.log( menu.style.left,menu.style.top)
        menu.style.visibility = "visible";
    }

}

window.onclick = function (e) {//关闭右键菜单
    var menu = document.getElementById('menu2')
    var menu1 = document.getElementById('menu')
    if (menu != null ) {
        menu.style.visibility = 'hidden';　//用户触发click事件就可以关闭了，因为绑定在window上，按事件冒泡处理，不会影响菜单的功能
       
    }
    if(menu1 != null) {
        menu1.style.visibility = 'hidden';
    }
}

</script>

<style scoped>
.nav-item {
    margin-top: 4%;
    margin-bottom: 4%;
  /* border-top: 1px solid rgb(176, 176, 176); */


}

.nav-item:hover {
    font-size: 20px;
}

#menu {
    width: 100px;
    padding: 10px;
    border: 1px solid #ddd;
    visibility: hidden;
    position: absolute;
    background-color: white;
}
</style>