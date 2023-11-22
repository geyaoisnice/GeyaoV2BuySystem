<template>
  <div class="layout">
    <div class="menu">
        <Menu></Menu>
    </div>
     <div class="content">
       <Content></Content>
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
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
    .layout{
        .menu{
            width: 200px;
            background: #888;
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
        }
        .content{
            padding-left: 200px;
        }
    }
</style>