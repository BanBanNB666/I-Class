<template>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
        创建课程
    </button>
    <!-- 模态框 -->
    <div class="modal fade" id="myModal">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <!-- 模态框头部 -->
                <div class="modal-header">
                    <h4 class="modal-title">创建课程</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- 模态框内容 -->
                <div class="modal-body">
                    <form class="row g-3 needs-validation" novalidate>
                        <div class="col-md-10 mx-auto">
                            <span>课程名称</span>
                            <input type="text" class="form-control" id="courseName" value="" required>

                        </div>
                        <div class="col-md-10 mx-auto">
                            <span>授课人</span>
                            <input type="text" class="form-control" id="teacherNo" value="" required>
                        </div>
                        <div class="col-md-10 mx-auto">
                            <span>授课班级</span>
                            <tamplate v-for="(c, index) in clazzs" :key="index">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" :id="'ckeck' + index">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        {{ c.clazzNo }}
                                    </label>
                                </div>
                            </tamplate>
                        </div>
                        <div class="col-md-10 mx-auto">
                            <span>课程简介</span>
                            <textarea type="text" class="form-control" id="memo" value="" required></textarea>
                        </div>
                        <div class="col-md-10 mx-auto">
                            <span>课程日期</span>
                            <input type="text" class="form-control" id="courseDate" value="" required>
                        </div>
                        <div class="col-md-10 mx-auto">
                            <span>课程图片</span>
                            <input type="file" id="img" class="form-control" aria-label="file example" required>
                        </div>

                        <div class="col-md-10 mx-auto">
                            <button class="btn btn-primary" type="submit" @click="createClass()">提交</button>
                        </div>
                    </form>
                </div>

                <!-- 模态框底部 -->
                <div class="modal-footer">

                </div>
            </div>
        </div>
    </div>
</template>
    
<script>


export default {
    name: 'HelloWorld',
    data() {
        return {
            clazzs: ''
        }
    },
    methods: {
        toClass() {
            // this.$router.push('/class/homework')  
            const routeData = this.$router.resolve({
                path: '/class/introduction',
                query: {

                }
            })
            window.open(routeData.href, '_blank')

        },
        createClass() {
            this.$http({
                url: "/teaCreatOneCourse",
                data: {
                    courseId: '',
                    teacherNo: document.getElementById('teacherNo').value,
                    courseName: document.getElementById('courseName').value,
                    memo: document.getElementById('memo').value,
                    courseDate: document.getElementById('courseDate').value,
                    invitationCode: "qwer"
                },
                method: 'post',

            }).then(res => {
                this.addImg(res.data.extend.course.courseId)
                this.addStudent()
                console.log(res.data.extend.course.courseId)
            }).catch(err => {
                console.log(err)
            })
        },
        addImg(courseId) {
            var e = document.getElementById("img");
            let file = e.files[0];
            let param = new FormData(); //创建form对象
            console.log(file);

            param.append('file', file, file.name);//通过append向form对象添加数据
            param.append('courseId', courseId);//通过append向form对象添加数据
            //param.append('chunk','0');//添加form表单中其他数据
            //console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
            let config = {
                headers: { 'Content-Type': 'multipart/form-data' }
            };  //添加请求头
            this.$http.post('/image/set', param, config)
                .then(response => {
                    console.log(response.data);
		})        
        },
        addStudent(){
            for(var i = 0;i<this.clazzs.length;i++){
                console.log(document.getElementById("check"+i).value)
            }
        }
    },
    created() {
        this.$http({
            url: "/getAllClazz",
            query: {

            },
            method: 'post',

        }).then(res => {
            console.log(res)
            this.clazzs = res.data.extend.clazzs

        }).catch(err => {
            console.log(err)
        })
    }

}
</script>
      
<style scoped>
.addclass {
    height: 40px;
    width: 100px;
    background-color: white;
    border-radius: 10px;
    border: 1px solid;
}

.func {
    margin-left: 30px;
    padding-top: 10px;
    height: 50px;
}

.classname {
    margin-top: 10px;
    font-size: 15px;
    font-weight: 600;
}

.classintro {

    margin-top: 10px;
    font-size: 10px;
    font-weight: 200;

}

.container {
    width: 1220px;
    height: 650px;
    padding: 10px;
    margin: 10px;
    border: 1px solid;
    display: inline-block;

}

.topic {
    height: 50px;
    border: 1px solid;
    background-color: white;
}

.classcontainer {
    height: 520px;
    border: 1px solid;
    margin-top: 10px;
    overflow: auto;
    background-color: white;
}

.class {
    height: 250px;
    width: 250px;
    border: 1px solid;
    margin: 20px;
    display: inline-block;
    background-color: transparent;
    border-radius: 6px;
}

.block {
    text-align: left;
    margin-top: 10px;
    margin-left: 30px;
    font-size: 20px;
}

.classphoto {
    width: 200px;
    width: 230px;
    border: px solid grey;
    border-radius: 10px;
}
</style>
      