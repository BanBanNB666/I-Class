<template>
  <button
    type="button"
    class="btn btn-default"
    data-bs-toggle="modal"
    data-bs-target="#upLoad3"
    data-toggle="modal"
    data-target="#myModal"
  >
    <i class="bi bi-hourglass-split" style="font-size: 10px"></i>
  </button>

  <!-- 上传 -->
  <div class="modal fade" id="upLoad3" @click="smoothLoad">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- 模态框头部 -->
        <div class="modal-header">
          <h5 class="modal-title">有1个文件在队列中</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>

        <!-- 模态框内容 -->
        <div class="modal-body">
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              :style="{ width: widthnow + '%' }"
              :aria-valuenow="widthnow"
            ></div>
          </div>
        </div>

        <!-- 模态框底部 -->
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
            确定
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, reactive } from "vue";
let widthnow = ref(0);

const smoothLoad = () => {
  console.log("hello");
  const smoothTimer = setInterval(() => {
    if (widthnow.value >= 100) {
      clearInterval(smoothTimer);
    } else {
      widthnow.value += 1;
    }
  }, 10);
};
</script>

<style scoped>
.btn-circle:hover {
  background-color: white;
}

.btn {
  background-color: rgb(235, 138, 164);
  margin-top: 5px;
}
.btn:hover {
  background-color: white;
}

.btn-circle {
  width: 35px;
  height: 35px;
  text-align: center;
  padding: 6px 0;
  font-size: 12px;
  line-height: 1.428571429;
  border-radius: 15px;
  margin-top: 1px;
  margin-left: 7%;
}

.btn-circle.btn-lg {
  width: 45px;
  height: 45px;
  padding: 10px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 25px;
}

.btn-circle.btn-xl {
  width: 70px;
  height: 70px;
  padding: 10px 16px;
  font-size: 24px;
  line-height: 1.33;
  border-radius: 35px;
}

#upLoad3 {
  height: 10px;
}
</style>