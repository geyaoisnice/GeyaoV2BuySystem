<template>
    <div>
        <Header></Header>
        内容
        <router-view></router-view>
    </div>
</template>
<script>
import Header from "./Header.vue";
export default {
    name: 'Content',
    components:{
        Header
    },
    data() {
        return {    
        };
    },
    mounted() { 
    },
    methods: {
    },
};
</script>
<style lang="scss" scoped>
</style>