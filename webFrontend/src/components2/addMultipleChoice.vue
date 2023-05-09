<template>
     <section class="p-5  text-dark text-center text-sm-start">
    <div class="container">
      <div class="col-md-12 column">
        <div class="jumbotron">
          <h1>
            录入多选题
          </h1>

          <div class="input-group news-input" style="width: 50%;">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="分值" aria-label="Username"
                aria-describedby="basic-addon1">
            </div>
          </div>


          <textarea name="reworkmes" cols="100" rows="7" style="OVERFLOW:   visible" class="form-control"
            placeholder="题目描述" aria-label="Username" aria-describedby="basic-addon1"></textarea>

          <div class="input-group news-input" style="width: 50%; margin-top: 2%;">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="A选项描述" aria-label="Username"
                aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="B选项描述" aria-label="Username"
                aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="C选项描述" aria-label="Username"
                aria-describedby="basic-addon1">
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="D选项描述" aria-label="Username"
                aria-describedby="basic-addon1">
            </div>
          </div>

          <div class="" style="margin-top: 2%;">
            请选择正确答案：<br>
            <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
              <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
              <label class="btn btn-outline-primary" for="btncheck1">&ensp;A &ensp; </label>

              <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
              <label class="btn btn-outline-primary" for="btncheck2">&ensp;B &ensp;</label>

              <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
              <label class="btn btn-outline-primary" for="btncheck3">&ensp;C &ensp;</label>

              <input type="checkbox" class="btn-check" id="btncheck4" autocomplete="off">
              <label class="btn btn-outline-primary" for="btncheck4">&ensp;D &ensp;</label>
            </div>
          </div>

          <p>
            <button class="btn btn-primary btn-lg my-4" data-toggle="modal" data-target="#myModal">
                录入
            </button>

            <button style="margin-left: 10%;" class="btn btn-danger btn-lg my-4" data-toggle="modal"
              data-target="#myModal">
              删除
            </button>
          </p>





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
    name:'addMultipleChoice',
 }
</script>