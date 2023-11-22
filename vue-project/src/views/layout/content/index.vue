<template>
  <div>
    <div class="header">
      <div class="open">
        <span
          v-if="!isCollapse"
          class="iconfont icon-right-indent"
          @click="changeMenu"
        ></span>
        <span
          v-else
          class="iconfont icon-left-indent"
          @click="changeMenu"
        >
        </span>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Content",
  props: ["isCollapse"],
  components: {},
  data() {
    return {
       
    };
  },
  mounted() {},
  methods: {
    changeMenu() {
      console.log(1111);
      this.$emit("changeShow");
    },
  },
};
</script>
<style lang="less" scoped>
.header {
  height: 50px;
  background: pink;
  color: #fff;
  line-height: 50px;
  .open {
    .iconfont {
      font-size: 20px;
    }
  }
}
</style>