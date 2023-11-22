<template>
  <div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#112f50"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      :collapse="isCollapse"
    >
      <el-menu-item>
        <span slot="title">歌谣采购管理系统</span>
      </el-menu-item>
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="/product">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">产品管理</span>
        </template>
        <el-menu-group>
          <el-menu-item index="/product/list">
            <i class="el-icon-setting"></i>
            <span slot="title">产品列表</span>
          </el-menu-item>
          <el-menu-item index="/product/category">
            <i class="el-icon-setting"></i>
            <span slot="title">产品分类</span>
          </el-menu-item>
        </el-menu-group>
      </el-submenu>
      <el-submenu index="/order">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">订单管理</span>
        </template>
        <el-menu-group>
          <el-menu-item index="/order/orderlist">
            <i class="el-icon-setting"></i>
            <span slot="title">订单列表</span>
          </el-menu-item>
          <el-menu-item index="/order/collect">
            <i class="el-icon-setting"></i>
            <span slot="title">订单汇总</span>
          </el-menu-item>
        </el-menu-group>
      </el-submenu>
      <el-submenu index="/advent">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">广告管理</span>
        </template>
        <el-menu-group>
          <el-menu-item index="/advent/adventlist">
            <i class="el-icon-setting"></i>
            <span slot="title">广告列表</span>
          </el-menu-item>
        </el-menu-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "Menu",
  props: ["isCollapse"],
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.el-menu {
  border-right: 0;
  /deep/ .is-active {
    background-color: pink !important;
    color: #fff !important;
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>