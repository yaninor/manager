<template>
  <div class="container">
    <div class="form-container">
      <el-form
        label-position="top"
        label-width="80px"
        :model="formData"
        :rules="rules"
        ref="formData"
      >
        <el-form-item
          label="用户名"
          prop="username"
        >
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input
            type="password"
            v-model="formData.password"
          ></el-input>
        </el-form-item>
        <el-button
          class="login-btn"
          type="primary"
          @click="submitForm('formData')"
        >登录</el-button>
      </el-form>
    </div>
  </div>
</template> 
<script>
export default {
  name: "login",
  data() {
    return {
      formData: {
        username: "admin",
        password: "123456"
      },
      // element-ul表单验证
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "change" },
          {
            min: 5,
            max: 15,
            message: "长度在 5 到 15 个字符",
            trigger: "change"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    //非空判断
    submitForm(formData) {
      // $refs可以通过设置的名字获取对应的dom
      this.$refs[formData].validate(valid => {
        if (valid) {
          //登录接口调用
          this.$axios.post("login", this.formData).then(res => {
            // console.log(res);
            if (res.data.meta.status === 400) {
              //登录失败
              this.$message.error(res.data.meta.msg);
            } else if (res.data.meta.status === 200) {
              // 登录成功
              // console.log(res);
              this.$message({
                message: res.data.meta.msg,
                type: "success"
              }); 
              //将返回的token存储到sessionStorage,并跳转到首页
              window.sessionStorage.setItem('token',res.data.data.token);
              this.$router.push('/');            
            }
          });
        } else {
          //未输入内容
          this.$message.error("请输入正确的格式!!!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="scss">
.container {
  height: 100%;
  background-color: #007acc;
  display: flex;
  justify-content: center;
  align-items: center;
  .form-container {
    width: 600px;
    box-sizing: border-box;
    padding: 40px;
    background-color: #fff;
    border-radius: 20px;
    .login-btn {
      width: 100%;
    }
  }
}
</style>
