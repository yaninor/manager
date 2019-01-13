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
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password"></el-input>
        </el-form-item>
        <el-button
          class="login-btn"
          type="primary"
          @click="submitForm('formData')"
        >主要按钮</el-button>
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
        username: "",
        password: ""
      },
      rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'change' },
            { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'change' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'change' },
            { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'change' }
          ]
      }
    };
  },
  methods: {
    submitForm(formData) {
        this.$refs[formData].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
  },
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
