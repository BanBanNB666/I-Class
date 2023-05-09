<template>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
        添加课程
    </button>
    <!-- 模态框 -->
    <div class="modal fade" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- 模态框头部 -->
                <div class="modal-header">
                    <h4 class="modal-title">添加课程</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- 模态框内容 -->
                <div class="modal-body">
                    <input type="text" class="form-control" placeholder="请输入课程号" name="email">
                </div>

                <!-- 模态框底部 -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">确定</button>
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
            user: {

            }
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

        }
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
      