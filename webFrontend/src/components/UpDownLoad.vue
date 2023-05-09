<template>
    <button class="btn  btn-light" type="button" data-bs-toggle="modal" data-bs-target="#upLoad" data-toggle="modal"
        data-target="#myModal">
        上传<i class="bi bi-cloud-upload" style="font-size: 15px;"></i>
    </button>




    <!-- 上传 -->
    <div class="modal fade" id="upLoad">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- 模态框头部 -->
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- 模态框内容 -->
                <div class="modal-body">
                    <form action="upload.php" method="post" enctype="multipart/form-data">
                        <input type="file" name="fileToUpload[]" id="fileToUpload" multiple>
                       
                    </form>
                </div>

                <!-- 模态框底部 -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">确定</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>



<style>
.btn {
    height: 80%;
    /* background-color: rgb(101, 149, 194); */
    margin-top: 1%;
}
</style>

<style scoped>
.btn{
    background-color: rgb(101, 149, 194); 
}
</style>