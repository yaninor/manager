<template>
  <div>
    主页
    <el-button
      type="danger"
      @click="logout"
    >退出</el-button>
  </div>
</template>
<script>
export default {
  name: "index",
  beforeCreate() {
      //页面渲染前判断是否登录有token
    let token = window.sessionStorage.getItem("token");
    if (token) {
      console.log(token);
    } else {
        //没有登录提示并跳转到登录页
      this.$message.error("你还没有登录呢,先去登录吧!!");
      this.$router.push("/login");
    }
  },
  methods: {
      //登出
    logout() {
        //删除token并跳转登录页
      window.sessionStorage.removeItem("token");
      this.$router.push("/login");
    }
  } 
};
</script>
<style>
</style>
