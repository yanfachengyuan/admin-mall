<template>
  <div class="categories">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">商品管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">商品分类</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row>
        <el-col>
          <el-button type="primary" @click="addCate=true">添加分类</el-button>
        </el-col>
      </el-row>
      <el-table
        :data="categories"
        style="width: 100%;margin-bottom: 20px;"
        row-key="cat_id"
        border
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      >
        <el-table-column prop="cat_id" label="分类ID" width="180"></el-table-column>
        <el-table-column prop="cat_name" label="分类名" width="180"></el-table-column>
        <el-table-column label="级别">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.cat_level===0">一级</el-tag>
            <el-tag v-if="scope.row.cat_level===1" type="success">二级</el-tag>
            <el-tag v-if="scope.row.cat_level===2" type="warning">三级</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="cat_deleted" label="是否有效">
          <template slot-scope="scope">
            <i :class="scope.row.cat_deleted===false?'el-icon-success':'el-icon-error'"></i>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="mini">
              <i class="el-icon-edit"></i>
              编辑
            </el-button>
            <el-button type="danger" size="mini" @click="reomveCate(scope.row.cat_id)">
              <i class="el-icon-delete"></i>
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
      <el-dialog title="添加分类" :visible.sync="addCate" width="50%">
        <el-form
          :model="addCateForm"
          :rules="addCateRules"
          ref="addCateRef"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="父级分类ID" prop="cat_pid">
            <el-input v-model="addCateForm.cat_pid"></el-input>
          </el-form-item>
          <el-form-item label="分类名称" prop="cat_name">
            <el-input v-model="addCateForm.cat_name"></el-input>
          </el-form-item>
          <el-form-item label="分类层级" prop="cat_level">
            <el-input v-model="addCateForm.cat_level"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="resetAddCateForm">取 消</el-button>
          <el-button type="primary" @click="addCateCon">确 定</el-button>
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addCate: false,
      addCateForm: {},
      queryInfo: {
        type: 3,
        pagenum: 1,
        pagesize: 5,
      },
      categories: [],
      total: 0,
      currentPage: 1,
      addCateRules: {
        cat_pid: [
          { required: true, message: "请输入父级分类ID", trigger: "blur" },
        ],
        cat_name: [
          { required: true, message: "请输入分类名称", trigger: "blur" },
        ],
        cat_level: [
          { required: true, message: "请输入分类层级", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    reomveCate(id) {
      this.$confirm("此操作将永久删除该分类, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          let { data } = await this.$axios.delete(`categories/${id}`);
          this.getCategories();
          this.$message({
            message: data.meta.msg,
            type: "success",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    resetAddCateForm() {
      this.$refs.addCateRef.resetFields();
      this.addCate = false;
    },
    async addCateCon() {
      let { data } = await this.$axios.post("categories", this.addCateForm);
      this.addCate = false;
      this.$message({
        message: data.meta.msg,
        type: "success",
      });
      this.getCategories();
    },
    async getCategories() {
      let { data } = await this.$axios.get("categories", {
        params: this.queryInfo,
      });
      this.categories = data.data.result;
      this.total = data.data.total;
    },
    async handleSizeChange(val) {
      this.queryInfo.pagesize = val;
      let { data } = await this.$axios.get("categories", {
        params: this.queryInfo,
      });
      this.categories = data.data.result;
      console.log(data);
    },
    async handleCurrentChange(val) {
      this.queryInfo.pagenum = val;
      let { data } = await this.$axios.get("categories", {
        params: this.queryInfo,
      });
      this.categories = data.data.result;
    },
  },
  created() {
    this.getCategories();
  },
};
</script>

<style lang="less" scoped>
.el-icon-success {
  color: #67c23a;
}
.el-icon-error {
  color: #ec0000;
}
</style>