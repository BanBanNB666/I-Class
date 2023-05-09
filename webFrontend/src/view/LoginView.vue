<template>
    <!-- <link href="https://cdn.bootcdn.net/ajax/libs/element-plus/2.2.18/index.css" rel="stylesheet"> -->
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" -->
        <!-- integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" /> -->
    <!-- <link rel="stylesheet" href="../htmlToChange/style.css" />
    <link rel="stylesheet" href="../htmlToChange/button.css" /> -->

    
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
                    <li>
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

    <!-- bg-dark text-light -->
    <section class="p-5 bg-light text-dark text-center text-sm-start">
        <!--padding -->
        <div class="container">
            <div class="d-flex">
                <!--display flex-->
                <div>
                    <h1>
                        成为一个<span class="text-warning">前端工程师</span>
                    </h1>
                    <p class="my-4">
                        <!-- margin-top margin-bottom -->
                        合格的HTML5前端工程师，需求通晓HTML、CSS、JavaScript；
                        有适配主流浏览器的实践经验，能娴熟处理PC和移动端兼容问题。
                        还需求通晓jQuery、Bootstrup等主流js库和结构，
                        并对其深化了解；娴熟掌握常用前端结构，
                        可以运用它们完成前端交互作用；
                        充分了解前端开发对视觉规划、
                        用户体会和网站功能的重要性；
                        具有杰出编码与文档标准，能娴熟运用前端调试工具，处理开发中遇到的问题。

                    </p>
                    <button class="btn btn-primary btn-lg">
                        开始编程之旅
                    </button>
                </div>
                <img src="../img/showcase.svg" alt="showcase" class="w-50 d-none d-md-block" />
            </div>
        </div>
    </section>

   

    <section class="p-5 bg-light text-dark">
        <div class="container">
            <div class="row">
                <div class="col-3">
                    
                    <div class="toggle-button-wrapper">
                        <input type="checkbox" id="toggle-button" name="switch">
                        <label for="toggle-button" class="button-label">
                            <span class="circle"></span>
                            <span class="text on">注册</span>
                            <span class="text off">登入</span>
                        </label>
                    </div>
                </div>
                <div class="col-4">
                    <h3 class="mb-3 ">现在开始编程之旅</h3>
                </div>
                <div class="col-5">
                    <LoginInput>
                    </LoginInput>
                </div>
            </div>
        </div>
    </section>



    <section class="p-5">
        <div class="container">
            <div class="row g-4">
                <!--gap-->
                <div class="col-md">
                    <div class="card bg-dark text-light">
                        <div class="card-body text-center">
                            <div class="card-title">老师端</div>
                            <div class="card-text">
                                每个学期均可开设前端技术课程；
                                每名教师负责教授若干个班级；
                                教师负责实验、作业、考试的录入；
                                作业、实验、考试结束后均能人工或自动批改，实验的实验报告在实验完毕后可自动生成；

                            </div>
                            <a href="#" class="btn btn-primary mt-2">前往体验</a>
                        </div>
                    </div>
                </div>
                <div class="col-md">
                    <div class="card bg-secondary text-light">
                        <div class="card-body text-center">
                            <div class="card-title">学生端</div>
                            <div class="card-text">
                                加入课程
                                每次作业由作业题构成、实验由实验步骤构成、考试由考试题构成；
                                试题可分为选择题、填空题、问答题与编程题，能够自动判分；
                                能够按比例计算总评分数并统计平均分、及格人数以及统计图表等；
                            </div>
                            <a href="#" class="btn btn-dark mt-2">前往体验</a>
                        </div>
                    </div>
                </div>
                <div class="col-md">
                    <div class="card bg-dark text-light">
                        <div class="card-body text-center">
                            <div class="card-title">我们的特色</div>
                            <div class="card-text">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Minus voluptatibus
                                consequuntur vitae quo quibusdam
                            </div>
                            <a href="#" class="btn btn-primary mt-2">前往体验</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="p-5">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-md">
                    <img src="../img/1.svg" alt="1" class="img-fluid" />
                </div>
                <div class="col-md p-5">
                    <h2>课程介绍</h2>
                    <p class="lead">
                        主讲老师课设设立，课程背景
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Praesentium ea ratione corporis et provident.
                        Quia!
                    </p>
                    <p>
                        优势点创新点
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Amet nostrum, aperiam assumenda vitae, beatae
                        at sint quaerat consequatur maxime, hic voluptatum
                        ex. Dolor minus perferendis magni autem
                        exercitationem quis quos.
                    </p>
                    <a href="" class="btn btn-light">查看更多</a>
                </div>
            </div>
        </div>
    </section>

    <!-- bg-primary -->
    <section class="p-5 bg-light">
        <div class="container">
            <h2 class="text-center text-light">讲师介绍</h2>
            <p class="lead text-center text-white mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Hic, unde?
            </p>
            <div class="row g-4">
                <div class="col-md-6 col-lg-3">
                    <div class="card bg-light">
                        <div class="card-body text-center">
                            <img src="../img/01-man.jpeg" class="mb-3 rounded-circle" />
                            <h3 class="card-title">张三</h3>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Accusamus, ratione!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="card bg-light">
                        <div class="card-body text-center">
                            <img src="../img/02-man.jpeg" class="mb-3 rounded-circle" />
                            <h3 class="card-title">张三</h3>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Accusamus, ratione!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="card bg-light">
                        <div class="card-body text-center">
                            <img src="../img/03-man.jpeg" class="mb-3 rounded-circle" />
                            <h3 class="card-title">张三</h3>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Accusamus, ratione!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3">
                    <div class="card bg-light">
                        <div class="card-body text-center">
                            <img src="../img/01-man.jpeg" class="mb-3 rounded-circle" />
                            <h3 class="card-title">张三</h3>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Accusamus, ratione!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="p-5">
        <div class="container">
            <h2 class="text-center mb-4">联系我们</h2>

            <ul class="list-group list-group-flush">
                <li class="list-group-item">电话：1XXXXXXXX</li>
                <li class="list-group-item">邮箱： bilibil@bili.com</li>
                <li class="list-group-item">地址：南昌市XXXX区</li>
            </ul>
        </div>
    </section>

    <footer class="p-5 bg-dark text-white text-center">
        <div class="container">
            <p class="lead">Copyright &copy; 2022 项目名</p>
        </div>
    </footer>
</template>

<script>
import LoginInput from '@/components2/loginInput.vue';

export default {
    name: "LoginView",
    data() {
      return {
        value: true
      }
    },
  
    components: { LoginInput }
}
</script>

<style scoped>
@media (min-width: 768px) {
    .news-input{
        width: 50%;
    }
}

body::before{
    display: block;
    content: '';
    height: 56px;
}

#toggle-button {
    display: none;
}

.button-label {
    position: relative;
    display: inline-block;
    width: 80px;
    height: 30px;
    background-color: #ccc;
    box-shadow: #ccc 0px 0px 0px 2px;
    border-radius: 30px;
    overflow: hidden;
}

.circle {
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
}

.button-label .text {
    line-height: 30px;
    font-size: 18px;
    text-shadow: 0 0 2px #ddd;
}

.on {
    color: rgb(1, 164, 252);
    display: none;
    text-indent: 10px;
}

.off {
    color: rgb(1, 164, 252);
    display: inline-block;
    text-indent: 34px;
}

.button-label .circle {
    left: 0;
    transition: all 0.3s;
}

#toggle-button:checked+label.button-label .circle {
    left: 50px;
}

#toggle-button:checked+label.button-label .on {
    display: inline-block;

}

#toggle-button:checked+label.button-label .off {
    display: none;

}

#toggle-button:checked+label.button-label {
    background-color: #51ccee;
}
</style>