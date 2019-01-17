<template>
  <div id="uesrs-container">
    <myBreadcrumb
      :level2="level2"
      :level3="level3"
    ></myBreadcrumb>
    <el-row class="my-el-row">
      <el-col :span="6">
        <div class="grid-content bg-purple-dark">
          <div>
            <el-input
              placeholder="请输入内容"
              v-model="pageData.query"
            >
              <template slot="append"><i class="el-icon-search"></i></template>
            </el-input>
          </div>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-dark">
          <el-button
            type="success"
            plain
          >成功按钮</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-table
          :data="userList"
          style="width: 100%"
          border
        >
          <el-table-column
            label="#"
            width="30"
            type="index"
          ></el-table-column>
          <el-table-column
            prop="username"
            label="姓名"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="email"
            label="邮箱"
            width="300"
          ></el-table-column>
          <el-table-column
            prop="mobile"
            label="电话"
            width="300"
          ></el-table-column>
          <el-table-column
            prop="mg_state"
            label="用户状态"
            width="80"
          >
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.mg_state"
                active-color="#13ce66"
                inactive-color="#ff4949"
              ></el-switch>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            width="300"
          >
            <template slot-scope="scope">
              <el-button
                type="primary"
                plain
                size="mini"
                icon="el-icon-edit"
              ></el-button>
              <el-button
                type="danger"
                plain
                size="mini"
                icon="el-icon-delete"
              ></el-button>
              <el-button
                type="warning"
                plain
                size="mini"
                icon="el-icon-check"
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pageData.pagenum"
              :page-sizes="[2, 4, 6, 8,10]"
              :page-size="pageData.pagesize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
            >
            </el-pagination>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "users",
  data() {
    return {
      level2: "用户管理",
      level3: "用户列表",
      pageData: {
        query: "",
        pagenum: 1,
        pagesize: 10
      },
      userList: [],
      total: 0
    };
  },
  async created() {
    let res = await this.$axios.get("users", {
      params: this.pageData
    });
    this.userList = res.data.data.users;
    this.total = res.data.data.total;
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style lang="scss">
#uesrs-container {
  .has-gutter > tr > th {
    background-color: #fff !important;
  }
  .el-table {
    background-color: #fff !important;
  }
  .el-pagination {
    background-color: #fff !important;
  }
}
</style>

