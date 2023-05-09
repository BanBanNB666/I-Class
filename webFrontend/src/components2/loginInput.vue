<template>
    <div class="input-group news-input">
        <div class="input-group mb-3">
            <input type="text" id = 'studentNo' class="form-control " placeholder="Account" aria-label="Username"
                aria-describedby="basic-addon1">
                
        </div>
        <div class="input-group mb-3">
            <input type="password" id = 'studentPassword' class="form-control" placeholder="Password" aria-label="Recipient's username"
                aria-describedby="basic-addon2">
        </div>
        <div class="input-group mb-3">
            <select class="form-select" aria-label="Default select example" id = 'type'>
                <option selected>请选择登陆类型</option>
                <option value="1">学生</option>
                <option value="2">教师</option>
                <option value="3">管理员</option>
            </select>
            <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2" @click="login()">登入</span>
            </div>
        </div>
    </div>

</template>

<script>


export default {
    name: 'loginInput',
    props: {
        msg: String
    },
    methods: {
        login() {
            
            this.$http({
                url: "/index/login",
                params: {
                    'account': document.getElementById('studentNo').value,
                    'password':document.getElementById('studentPassword').value,
                    'type':document.getElementById('type').value,
                },
                method: 'post',

            }).then(res => { 
                
                console.log(res.data.extend)   

                if(document.getElementById('type').value=="1"){//学生
                    this.$router.push({path:'/studentMainView',query:{'msg':JSON.stringify(res.data.extend)}})
                }else if(document.getElementById('type').value=="2"){//老师
                    this.$router.push({path:'/teacherMainView',query:{'msg':JSON.stringify(res.data.extend)}})
                }else if(document.getElementById('type').value=="3"){//管理员
                    this.$router.push({path:'/studentMainView',query:{'msg':JSON.stringify(res.data.extend)}})
                } 

            }).catch(err => {
                console.log(err)
            })
        }
    }

}
</script>