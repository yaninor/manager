<template>
  <div id="uesrs-container">
    <myBreadcrumb :level2="level2" :level3="level3"></myBreadcrumb>
    <el-row class="my-el-row">
      <el-col :span="6">
        <div class="grid-content bg-purple-dark">
          <div>
            <el-input placeholder="请输入内容" v-model="pageData.query">
              <template slot="append">
                <i class="el-icon-search"></i>
              </template>
            </el-input>
          </div>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content bg-purple-dark">
          <el-button type="success" plain>添加商品</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-table :data="goodsList" style="width: 100%" border>
          <el-table-column label="#" width="40" type="index"></el-table-column>
          <el-table-column prop="goods_name" label="商品名称" width="500"></el-table-column>
          <el-table-column prop="goods_price" label="商品价格(元)" width="100"></el-table-column>
          <el-table-column prop="goods_weight" label="商品重量" width="100"></el-table-column>
          <el-table-column prop="add_time" label="创建时间" width="300">
            <template slot-scope="prop">{{prop.row.add_time | beautifyTime}}</template>
          </el-table-column>
          <el-table-column label="操作" width="200">
            <template slot-scope="scope">
              <el-button type="primary" plain size="mini" icon="el-icon-edit"></el-button>
              <el-button type="danger" plain size="mini" icon="el-icon-delete"></el-button>
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
              :page-sizes="[4, 6, 8,10]"
              :page-size="pageData.pagesize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
              @current-change="currentChange"
              @size-change="sizeChange"
            ></el-pagination>
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
      goodsList: [],
      total: 0
    };
  },
  methods: {
    async getGoods() {
      let res = await this.$axios.get("goods", {
        params: this.pageData
      });
      this.goodsList = res.data.data.goods;
      this.total = res.data.data.total;
    },
    currentChange(pagenum) {
      console.log(pagenum);
      this.pageData.pagenum = pagenum;
      this.getGoods();
    },
    sizeChange(pagesize) {
      this.pageData.pagesize = pagesize;
      this.pageData.pagenum = 1;
      this.getGoods();
    }
  },
  created() {
    this.getGoods();
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

