<template>
    <div class="container px-4 py-2">
        <div class="row">
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a :class="{ 'active': statu == 1, 'nav-link': true }" aria-current="page">
                        <button v-on:click="chanegStatu(1)" :class="{ 'select': statu == 1, 'btn': true }">全部</button>
                    </a>
                </li>
                <li class="nav-item">
                    <a :class="{ 'active': statu == 2, 'nav-link': true }">
                        <button v-on:click="chanegStatu(2)" :class="{ 'select': statu == 2, 'btn': true }">已提交</button>
                    </a>
                </li>
                <li class="nav-item">
                    <a :class="{ 'active': statu == 2, 'nav-link': true }">
                        <button v-on:click="chanegStatu(2)" :class="{ 'select': statu == 2, 'btn': true }">未提交</button>
                    </a>
                </li>
            </ul>
        </div>
        <div class="row" style="background-color: white;">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">学号</th>
                        <th scope="col">状态</th>
                        <th scope="col">提交</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="(item,index) in stuAnswerSets" :key="index">
                        <tr>
                            <th scope="row">{{ index }}</th>
                            <td>{{ item.studentId }}</td>
                            <td>{{ item.isRead==0?'未批改':'已批改' }}</td>
                            <td><button style="background-color: white; border: none; color: blue;" @click="toWhere(item)">查看</button></td>
                        </tr>
                    </template>
                </tbody>
                <!-- 导航栏 -->
            </table>
        </div>
        <div class="row">
            <div class = col-4></div>
            <ul class="pagination col-6">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">5</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
            </ul>
            <div class = col-2></div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            stuAnswerSets: [
               
            ]
        }
    },
    methods: {
        toWhere(data) {
            // this.$router.push('/class/homework')  
            localStorage.setItem("item",JSON.stringify(data))
            const routeData = this.$router.resolve({
                path: '/correct',
                query: {
                    
                }
            })
            window.open(routeData.href, '_blank')

        }
    },
    created(){
        this.$http({
                url: "/getAllStuAnswerSet",
                params: {
                  setId: 8
                },
                method: 'get',

            }).then(res => { 
                this.stuAnswerSets = res.data.extend.stuAnswerSets
                console.log(this.stuAnswerSets)
            }).catch(err => {
                console.log(err)
            })
    }
}
</script>
      
<style scoped>

</style>
      