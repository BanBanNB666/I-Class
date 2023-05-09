
<template>
    <link rel="stylesheet" href="../htmlToChange/style.css" />
    <link rel="stylesheet" href="../htmlToChange/button.css" />

    <nav class="navbar navbar-expand-lg  bg-light  navbar-light fixed-top">
        <div class="container">
            <a href="#" class="navbar-brand">项目名</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navmenu">
                <ul class="navbar-nav ms-auto">
                    <!--margin start = margin left-->
                    <li class="nav-item">
                        <div class="nav-link">小组成员</div>
                    </li>
                    <li class="nav-item">
                        <div class="nav-link">闻德星</div>
                    </li>
                    <li class="nav-item">
                        <div class="nav-link">冯珞钊</div>
                    </li>
                    <li class="nav-item">
                        <div class="nav-link">谢懋望</div>
                    </li>
                    <li class="nav-item">
                        <div class="nav-link">喻涛</div>
                    </li>
                    <li class="nav-item">
                        <div class="nav-link">杨济中</div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


    <EnterManager></EnterManager>

    <EnterAcademy></EnterAcademy>

    <EnterTeacher></EnterTeacher>

    <EnterClass></EnterClass>

    <EnterStu></EnterStu>

    <EnterSQL></EnterSQL>
</template>


<script>
import EnterManager from "../components2/enterManager.vue";
import EnterAcademy from "@/components2/enterAcademy.vue";
import EnterTeacher from "@/components2/enterTeacher.vue";
import EnterClass from "@/components2/enterClass.vue";
import EnterStu from "@/components2/enterStu.vue";
import EnterSQL from "@/components2/enterSQL.vue";
export default {
    name: "MessageEnterView",
    components: {
    EnterManager,
    EnterAcademy,
    EnterTeacher,
    EnterClass,
    EnterStu,
    EnterSQL
}
}
</script>