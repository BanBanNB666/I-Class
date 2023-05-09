<template>
    <div class = 'contain'>
        <div class = "innercontain">
            <SubmitIntroduction></SubmitIntroduction>
            <SubmitList></SubmitList>
        </div>
    </div>
</template>

<script>
import SubmitIntroduction from './SubmitIntroduction.vue';
import SubmitList from './SubmitList.vue';
export default {
    name: "HelloWorld",
    data() {
        return {};
    },
    methods: {
        toClass() {
            // this.$router.push('/class/homework')  
            const routeData = this.$router.resolve({
                path: "/class/introduction",
                query: {}
            });
            window.open(routeData.href, "_blank");
        }
    },
    components: {
        SubmitIntroduction,
        SubmitList
    }
}
</script>
      
<style scoped>
    .contain{

        height: 660px;
        overflow: auto;
    }
    .innercontain{
        border: 1px solid #c0bebe;
        padding-top: 20px;
        padding-bottom: 20px;
        margin: 10px;
        background-color: white;
        box-shadow: 5px 5px 5px #c0bebe;
        border-radius: 10px;
    }

</style>
      