<template>
  <div class="layout">
    <div class="menu">
        <Menu :isCollapse="isCollapse"></Menu>
    </div>
     <div class="content" :class="{small:isCollapse}">
       <Content @changeShow="changeShow" :isCollapse="isCollapse"></Content>
    </div>
  </div>
</template>
<script>
import Menu from "./menu/index.vue";
import Content from "./content/index.vue";

export default {
  name: "Layout",
  components: {
    Menu,
    Content,
  },
  data() {
    return {
        isCollapse:false
    };
  },
  mounted() {},
  methods: {
    changeShow(){
        console.log(2222)
        this.isCollapse=!this.isCollapse
    }
  },
};
</script>
<style lang="less" scoped>
    .layout{
        .menu{
            // width: 200px;
            background: #888;
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
        }
        .content{
            padding-left: 200px;
        }
        .small{
            padding-left: 64px;
        }
    }
</style>