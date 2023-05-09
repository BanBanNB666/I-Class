<template >
  <div class="" style="background-color: rgb(238, 241, 246); height: 100%">
    <div class="row" style="height: 100%">
      <div class="col-md-12">
        <!-- 顶部在这里！！！！！！！！！！！！！！！！！！！！！！！！ -->
        <div
          class="row"
          style="background-color: rgb(255, 255, 255); height: 7%"
        >
          <TopNavbar></TopNavbar>
        </div>
        <div class="row" style="margin-top: 4px; height: 100%">
          <!-- 左侧边在这里！！！！！！！！！！！！！！！！！！！！！ -->
          <div
            class="col-md-2"
            style="background-color: rgb(255, 255, 255); height: 100%"
          >
            <!-- rgb(249, 249, 249) -->
            <div
              class="row"
              style="height: 10%; padding-left: 4%; padding-top: 2%"
            >
              <SearchBucket
                @on-click="getOneBacketName"
                :data="data"
              ></SearchBucket>
              <AddBucket :data="data"></AddBucket>
            </div>
            <div class="row" style="height: 80%; margin-top: 15%">
              <div id="box" style="height: 90; padding: 0px">
                <BucketsList2
                  @on-click="getBacketName"
                  :data="data"
                ></BucketsList2>
              </div>
            </div>
          </div>
          <!-- 右侧边在这里！！！！！！！！！！！！！！！！！！！！！ -->
          <div
            class="col-md-10"
            style="
              background-color: rgb(255, 255, 255);
              border: 4px solid rgb(238, 241, 246);
              border-top: none;
              border-bottom: none;
              border-right: none;
            "
          >
            <div class="row" style="height: 6%">
              <div class="col-md-12">
                <Navbar @on-click="navBack" :navFile="navFile"></Navbar>
              </div>
            </div>
            <div class="row" style="height: 100%">
              <div
                class="col-md-12"
                style="
                  border: 4px solid rgb(238, 241, 246);
                  border-left: none;
                  border-bottom: none;
                  border-right: none;
                "
              >
                <div
                  class="row line"
                  style="
                    height: 6%;
                    border: 4px solid rgb(238, 241, 246);
                    border-left: none;
                    border-top: none;
                    border-right: none;
                  "
                >
                  <div class="col-md-6" role="group">
                    <UpDownLoad></UpDownLoad>
                  </div>
                  <div class="col-md-4" role="group">
                    <SearchFile
                      @on-click="getOneFile"
                      :bucket="navFile"
                      :data="data"
                    ></SearchFile>
                  </div>
                  <div class="col-md-1" style="margin-left: 5%" role="group">
                    <ShowUpDownLoad></ShowUpDownLoad>
                  </div>
                </div>
                <div class="row" style="height: 40%">
                  <div class="col-md-12">
                    <FilesList
                      @on-click="OpenFile"
                      :navFile="navFile"
                      :fileNow="fileNow"
                    ></FilesList>
                  </div>
                </div>
                <div class="row" style="height: 40%" v-if="showFile">
                  <div class="col-md-12">
                    <img src="../imgs/img.png" alt="图片描述" />
                  </div>
                </div>
                <div class="row" style="height: 40%" v-if="showFile">
                  <div
                    class="col-md-12"
                    style="text-align: center; margin-top: 4%"
                  >
                    你好世界<br />
                    这个是一个对象存储文件系统也可以成为数据库
                  </div>
                </div>

                <div class="row">
                  <Page></Page>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FilesList from "../components/FilesList.vue";
import BucketsList from "../components/BucketsList.vue";
import BucketsList2 from "../components/BucketsList2.vue";
import Navbar from "../components/Navbar.vue";
import SearchBucket from "../components/SearchBucket.vue";
import SearchFile from "../components/SearchFile.vue";
import SettingAboutPerson from "../components/SettingAboutPerson.vue";
import UpDownLoad from "../components/UpDownLoad.vue";
import AddBucket from "../components/AddBucket.vue";
import ShowUpDownLoad from "../components/ShowUpDownLoad.vue";
import Page from "../components/Page.vue";
import { ref, reactive } from "vue";
import { systemPreferences } from "electron";
import TopNavbar from "../components/TopNavbar.vue";
let showFile = false;

//文件类
class File {
  fileName: string = "";
  fileType: string = "";
  fileSize: string = "";
  id: string = "";
  version: string = "";
  filePath: string = "";
  creatTime: string = "";
  isFile: number = 0;
  Files: any[] = [];
  constructor(filename: string) {
    this.fileName = filename;
  }
}

//桶类
class Bucket {
  bucketName: string = "";
  Files: File[] = [];
}

//数据集合类
class data1 {
  Buckets: Bucket[] = [];
}

//all data
var data = [
  {
    bucketName: "公司项目文件",
    Files: [
      {
        fileName: "商务谈判文件",
        fileType: "folder",
        fileSize: "0",
        id: "09450928532904",
        version: "3",
        filePath: "F:\\hello",
        creatTime: "2021313134",
        isFile: 1,
        Files: [
          {
            fileName: "合同",
            fileType: "jpg",
            fileSize: "45",
            id: "09450928532904",
            version: "8",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "工作说明书",
            fileType: "pdf",
            fileSize: "94",
            id: "09450928532904",
            version: "13",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
        ],
      },
      {
        fileName: "需求调研材料",
        fileType: "folder",
        fileSize: "0",
        id: "09450928532904",
        version: "3",
        filePath: "F:\\hello",
        creatTime: "2021313134",
        isFile: 1,
        Files: [
          {
            fileName: "里程碑计划",
            fileType: "word",
            fileSize: "5",
            id: "09450928532904",
            version: "8",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "交付物计划",
            fileType: "word",
            fileSize: "21",
            id: "09450928532904",
            version: "13",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "资源计划",
            fileType: "word",
            fileSize: "6",
            id: "09450928532904",
            version: "3",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "费用评估",
            fileType: "word",
            fileSize: "3",
            id: "09450928532904",
            version: "3",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "风险评估",
            fileType: "word",
            fileSize: "30",
            id: "09450928532904",
            version: "3",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "项目进度计划",
            fileType: "word",
            fileSize: "15",
            id: "09450928532904",
            version: "7451",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
        ],
      },
      {
        fileName: "开发测试阶段文档集合",
        fileType: "folder",
        fileSize: "0",
        id: "09450928532904",
        version: "3",
        filePath: "F:\\hello",
        creatTime: "2021313134",
        isFile: 1,
        Files: [
          {
            fileName: "系统原型",
            fileType: "word",
            fileSize: "5",
            id: "09450928532904",
            version: "8",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "UI设计源文件",
            fileType: "word",
            fileSize: "21",
            id: "09450928532904",
            version: "13",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "设计文档",
            fileType: "word",
            fileSize: "6",
            id: "09450928532904",
            version: "3",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "开发文档",
            fileType: "word",
            fileSize: "3",
            id: "09450928532904",
            version: "3",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "测试计划&报告",
            fileType: "word",
            fileSize: "30",
            id: "09450928532904",
            version: "3",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "问题清单 ",
            fileType: "word",
            fileSize: "15",
            id: "09450928532904",
            version: "7451",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
        ],
      },
      {
        fileName: "实施阶段文档",
        fileType: "folder",
        fileSize: "0",
        id: "09450928532904",
        version: "3",
        filePath: "F:\\hello",
        creatTime: "2021313134",
        isFile: 1,
        Files: [
          {
            fileName: "系统管理手册",
            fileType: "word",
            fileSize: "5",
            id: "09450928532904",
            version: "8",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "安装配置手册",
            fileType: "word",
            fileSize: "21",
            id: "09450928532904",
            version: "13",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "用户操作手册",
            fileType: "word",
            fileSize: "6",
            id: "09450928532904",
            version: "3",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "用户培训手册",
            fileType: "word",
            fileSize: "3",
            id: "09450928532904",
            version: "3",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "系统上线报告",
            fileType: "word",
            fileSize: "30",
            id: "09450928532904",
            version: "3",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "项目验收报告",
            fileType: "word",
            fileSize: "15",
            id: "09450928532904",
            version: "7451",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
        ],
      },
    ],
  },
  {
    bucketName: "班级管理工作",
    Files: [
      {
        fileName: "录音以及工作记录",
        fileType: "folder",
        fileSize: "0",
        id: "09450928532904",
        version: "3",
        filePath: "F:\\hello",
        creatTime: "2021313134",
        isFile: 1,
        Files: [
          {
            fileName: "会议录音3月4日",
            fileType: "mp3",
            fileSize: "4",
            id: "09450928532904",
            version: "8",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "会议录音3月8日",
            fileType: "mp3",
            fileSize: "94",
            id: "09450928532904",
            version: "13",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "5月班会演讲稿",
            fileType: "word",
            fileSize: "6",
            id: "09450928532904",
            version: "3",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "3月26开会视频",
            fileType: "mp4",
            fileSize: "3512",
            id: "09450928532904",
            version: "3",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "关于班风建设开会视频",
            fileType: "mp4",
            fileSize: "8513",
            id: "09450928532904",
            version: "3",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "关于学风建设材料",
            fileType: "pdf",
            fileSize: "15",
            id: "09450928532904",
            version: "7451",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
        ],
      },
      {
        fileName: "工作文档",
        fileType: "folder",
        fileSize: "0",
        id: "09450928532904",
        version: "3",
        filePath: "F:\\hello",
        creatTime: "2021313134",
        isFile: 1,
        Files: [
          {
            fileName: "大学全国大学英语四六级考试报名通知",
            fileType: "pdf",
            fileSize: "4",
            id: "09450928532904",
            version: "8",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "关于2023年第一期普通话测试报名的通知",
            fileType: "word",
            fileSize: "9",
            id: "09450928532904",
            version: "13",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "大学2023年4月新发展团员名单",
            fileType: "word",
            fileSize: "4",
            id: "09450928532904",
            version: "3",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "就结课材料模板(2023)",
            fileType: "word",
            fileSize: "8",
            id: "09450928532904",
            version: "3",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "关于学院2023年上半年团员“推优”名单",
            fileType: "pdf",
            fileSize: "13",
            id: "09450928532904",
            version: "3",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "关于评选2022-2023学年全校“优秀共青团员”说明",
            fileType: "pdf",
            fileSize: "15",
            id: "09450928532904",
            version: "7451",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
        ],
      },
      {
        fileName: "团建照片文件夹",
        fileType: "folder",
        fileSize: "0",
        id: "09450928532904",
        version: "3",
        filePath: "F:\\hello",
        creatTime: "2021313134",
        isFile: 1,
        Files: [
          {
            fileName: "团建照片",
            fileType: "jpg",
            fileSize: "4",
            id: "09450928532904",
            version: "48",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "饭馆照片",
            fileType: "jpg",
            fileSize: "94",
            id: "09450928532904",
            version: "3",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "合照",
            fileType: "jpg",
            fileSize: "43",
            id: "09450928532904",
            version: "3",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "合照2",
            fileType: "jpg",
            fileSize: "40",
            id: "09450928532904",
            version: "3",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "组合",
            fileType: "jpg",
            fileSize: "64",
            id: "09450928532904",
            version: "3",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
          {
            fileName: "唱歌视频",
            fileType: "mp4",
            fileSize: "7451",
            id: "09450928532904",
            version: "7451",
            filePath: "F:\\hello",
            creatTime: "2021313134",
          },
        ],
      },
    ],
  },
  {
    bucketName: "个人日记",
    Files: [
      {
        fileName: "2022/5/10-30日记",
        fileType: "word",
        fileSize: "1",
        id: "09450928532904",
        version: "3",
        filePath: "F:\\hello",
        creatTime: "2021313134",
      },
      {
        fileName: "2022/7/1-12日记",
        fileType: "word",
        fileSize: "1",
        id: "09450928532904",
        version: "3",
        filePath: "F:\\hello",
        creatTime: "2021313134",
      },
      {
        fileName: "2023/1/10-30日记",
        fileType: "word",
        fileSize: "1",
        id: "09450928532904",
        version: "3",
        filePath: "F:\\hello",
        creatTime: "2021313134",
      },
      {
        fileName: "2022/5/10-30日记",
        fileType: "txt",
        fileSize: "1",
        id: "09450928532904",
        version: "3",
        filePath: "F:\\hello",
        creatTime: "2021313134",
      },
      {
        fileName: "庐山照片",
        fileType: "png",
        fileSize: "72",
        id: "09450928532904",
        version: "3",
        filePath: "F:\\hello",
        creatTime: "2021313134",
      },
      {
        fileName: "爬山视频",
        fileType: "mp4",
        fileSize: "851",
        id: "09450928532904",
        version: "3",
        filePath: "F:\\hello",
        creatTime: "2021313134",
      },
    ],
  },

  {
    bucketName: "共享桶",
    Files: [
      {
        fileName: "大学生比赛报名表",
        fileType: "word",
        fileSize: "1",
        id: "09450928532904",
        version: "3",
        filePath: "F:\\hello",
        creatTime: "2021313134",
      },
      {
        fileName: "4c比赛要求",
        fileType: "pdf",
        fileSize: "1",
        id: "09450928532904",
        version: "3",
        filePath: "F:\\hello",
        creatTime: "2021313134",
      },
    ],
  },
];

//当前文件流用以导航
let navFile = ref([] as string[]);

//当前展示文件
let fileNow = ref("");

//查找桶,当前文件位置改变
let temp = ref("");
const getBacketName = (params: any) => {
  if (params != "") {
    // navFile.value.push(params.bucketName as string);
    navFile.value[0] = params.bucketName as string;
    fileNow.value = params;
    console.log("navFile:" + navFile.value);
    console.log("FileNow:" + fileNow.value);
  } else {
    console.log("not found Bucket");
  }
};

//查找桶,当前文件位置改变
const getOneBacketName = (params: any) => {
  if (params != "") {
    navFile.value[0] = params.bucketName as string;
    fileNow.value = params;

    console.log(navFile.value);
    console.log(fileNow.value);
  } else {
    console.log("not found Bucket");
  }
};

//查找某桶文件，这个逻辑没有完成
const getOneFile = (params: any) => {
  if (params != "") {
    console.log(params);

    fileNow.value = params;
  } else {
    console.log("not found File");
  }
};

//导航，修改当前桶，当前文件
const navBack = (params: any) => {
  if (params == "-1") {
    navFile.value = [];
    fileNow.value = "";
  } else {
    //导航，更改导航路径
    findFiles(params);
  }
};

//工具方法，根据当前navFile找到对应文件队列
const findFiles = (params: any) => {
  let temp = [] as string[];
  let i = 0;
  for (; i <= params; i++) {
    temp.push(navFile.value[i]);
  }
  navFile.value = temp;
  console.log(navFile);
  //根据导航路径获得文件信息
  let j = 0;
  for (; j < data.length; j++) {
    if (data[j].bucketName == navFile.value[0]) {
      fileNow.value = data[j] as unknown as string;
      break;
    }
  }
  console.log(j, data[j]);
  let temp1 = new File(data[j].bucketName);
  temp1.Files = data[j].Files as any;
  console.log(temp1);

  for (let k = 1; k < navFile.value.length; k++) {
    //向下查找文件名
    for (let l = 0; l < temp1.Files.length; l++) {
      //遍历files找到文件
      if (temp1.Files[l].fileName == navFile.value[k]) {
        temp1 = temp1.Files[l];
        console.log(temp1);
      }
    }
  }
  fileNow.value = temp1 as unknown as string;
};

//打开文件，修改当前文件
const OpenFile = (params: any, params2: any) => {
  if (params == "") {
    console.log("文件打开失败");
  } else {
    fileNow.value = params;
    navFile.value.push(params.fileName as string);

    console.log(navFile.value);
    console.log(fileNow.value);
  }
};
</script>

<style scoped>
/* overflow-y:auto; 重要的东西，滚动条*/
#box {
  width: 100%;
  height: 500px;
  overflow-x: hidden;
  overflow-y: scroll;
  line-height: 30px;
  text-align: center;
}

#box::-webkit-scrollbar {
  display: none;
}

::-webkit-scrollbar {
  width: 0 !important;
}

::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
img {
  max-width: 45%;
  height: auto;
  margin-left: 10%;
  margin-bottom: 1%;
}

.line {
  padding-bottom: 44px;
}
</style>
