<template>
  <div id="uesrs-container">
    <myBreadcrumb :level2="level2" :level3="level3"></myBreadcrumb>
    <el-row>
      <el-col :span="24">
        <el-table :data="rightsList" style="width: 100%" border>
          <el-table-column label="#" width="60" type="index"></el-table-column>
          <el-table-column prop="authName" label="权限名称" width="180"></el-table-column>
          <el-table-column prop="path" label="路径" width="300"></el-table-column>
          <el-table-column label="层级" prop="level" width="100">
            <template slot-scope="scope">
              <span v-if="scope.row.level==='0'">一级</span>
              <span v-if="scope.row.level==='1'">二级</span>
              <span v-if="scope.row.level==='2'">三级</span>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "roles",
  data() {
    return {
      level2: "权限管理",
      level3: "角色列表",
      rightsList: []
    };
  },
  async created() {
    let res = await this.$axios.get("rights/list");
    this.rightsList = res.data.data;
    // this.total = res.data.data.total;
    console.log(res);
  }
};
</script>
<style lang="scss" scoped>
.el-tag {
  margin: 10px;
}
</style>

