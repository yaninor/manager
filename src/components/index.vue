<template>
  <div class="main-container">
    <el-container>
      <el-header class="el-row header">
        <el-row type="flex" class="row-bg">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <img src="../assets/logo.png" alt>
            </div>
          </el-col>
          <el-col :span="18">
            <div class="grid-content bg-purple">
              <div class="title">电商后台管理系统</div>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple">
              <el-button class="btn-logout" @click="logout" type="danger" round>退出</el-button>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="12" class="aside">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                active-text-color="#ffd04b"
                unique-opened
                router
              >
                <el-submenu v-for="(item, index) in menuList" :key="item.id" :index="item.order+''">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>{{item.authName}}</span>
                  </template>
                  <el-menu-item-group v-for="(i, idx) in item.children" :key="i.id">
                    <el-menu-item :index="'/index/'+i.path">
                      <i data-v-7b63ac08 class="el-icon-menu"></i>
                      {{i.authName}}
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <!-- 嵌套出口 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      menuList: []
    };
  },
  methods: {
    //登出
    logout() {
      this.$confirm("你确定要离开我吗, 是否继续?", "提示", {
        confirmButtonText: "狠心离开",
        cancelButtonText: "再看看",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "退出成功!"
          });
          window.sessionStorage.removeItem("token");
          this.$router.push("/login");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已回到当前页面"
          });
        });
    }
  },
  created() {
    this.$axios.get("menus").then(res => {
      // console.log(res);
      this.menuList = res.data.data;
    });
  }
};
</script>
<style lang="scss">
.main-container {
  height: 100%;
  .header {
    text-align: center;
    background-color: #dadcdb;
    .title {
      height: 100%;
      font-size: 24px;
      line-height: 60px;
      color: #495150;
      font-weight: 700;
    }
    .btn-logout {
      margin-top: 10px;
    }
  }
  .el-aside {
    border-right: 1px solid #e6e6e6;
    background-color: #fff !important;
  }
  .aside.el-col-12 {
    width: 100%;
  }
  .el-container {
    height: 100%;
  }
  .el-menu {
    border: none;
    background-color: #fff !important;
  }
  .el-main {
    padding-top: 0;
  }
}
</style>
