<template>
        <section class="p-5  text-dark text-center text-sm-start">
        <div class="container">
            <div class="col-md-12 column">
                <div class="jumbotron">
                    <h1>
                        学院信息录入
                    </h1>
                    <textarea name="reworkmes" cols="100" rows="7" style="OVERFLOW:   visible" class="form-control"
                        placeholder="输入学院号·学院名对，空格分开 形如  123 456 789 910，这是两组学院" aria-label="Username"
                        aria-describedby="basic-addon1"></textarea>
                    <p>
                        <button class="btn btn-primary btn-lg my-4" data-toggle="modal" data-target="#myModal">
                            批量录入
                        </button>
                    </p>

                    <div class="input-group news-input">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="学院号" aria-label="Username"
                                aria-describedby="basic-addon1">
                        </div>

                        <div class="input-group mb-3">
                            <input type="password" class="form-control" placeholder="学院名"
                                aria-label="Recipient's username" aria-describedby="basic-addon2">
                            <div class="input-group-append">
                                <span class="input-group-text text-light bg-primary" id="basic-addon2">录入</span>
                            </div>
                        </div>

                    </div>



                    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    <h4 class="modal-title" id="myModalLabel">对话框标题</h4>
                                </div>
                                <div class="modal-body">模态对话框示例</div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default{
        name:"enterAcademy",
    }
</script>