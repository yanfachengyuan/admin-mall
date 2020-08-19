<template>
  <div class="params">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">商品管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">参数列表</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-alert title="注意：只允许为第三级分类设置相关参数" type="warning" show-icon :closable="false"></el-alert>
      <el-row>
        <el-col>
          <span>选择商品分类:</span>
          <el-cascader
            :show-all-levels="false"
            :options="categories"
            :props="selectProps"
            clearable
            v-model="selectId"
            @change="handelChange"
          ></el-cascader>
        </el-col>
      </el-row>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="动态参数" name="only">
          <el-button
            type="primary"
            :disabled="selectId.length==0?true:false"
            @click="addCatePropsForm=true"
          >添加参数</el-button>
          <el-table :data="manyTable" style="width: 100%" border>
            <el-table-column type="expand"></el-table-column>
            <el-table-column type="index"></el-table-column>
            <el-table-column prop="attr_name" label="参数名称"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="primary" size="mini">
                  <i class="el-icon-edit"></i>
                  修改
                </el-button>
                <el-button type="danger" size="mini" @click="removeAttr(scope.row)">
                  <i class="el-icon-delete"></i>
                  删除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="静态属性" name="many">
          <el-button
            type="primary"
            :disabled="selectId.length==0?true:false"
            @click="addCatePropsForm=true"
          >添加参数</el-button>
          <el-table :data="onlyTable" style="width: 100%" border>
            <el-table-column type="expand"></el-table-column>
            <el-table-column type="index"></el-table-column>
            <el-table-column prop="attr_name" label="参数名称"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button type="primary" size="mini">
                  <i class="el-icon-edit"></i>
                  修改
                </el-button>
                <el-button type="danger" size="mini" @click="removeAttr(scope.row)">
                  <i class="el-icon-delete"></i>
                  删除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
      <el-dialog
        title="提示"
        :visible.sync="addCatePropsForm"
        width="50%"
        @close="addCatePropsFormClose"
      >
        <el-form
          :model="addCatePropsFormData"
          :rules="addCatePropsFormRules"
          ref="addCatePropsFormRef"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item :label="tabIndex==0?'动态参数':'静态属性'" prop="attr_name">
            <el-input v-model="addCatePropsFormData.attr_name"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addCatePropsForm = false">取 消</el-button>
          <el-button type="primary" @click="editCatePropsForm">确 定</el-button>
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addCatePropsForm: false,
      addCatePropsFormData: {
        attr_name: "",
      },
      addCatePropsFormRules: {
        attr_name: [
          {
            required: true,
            message: "请填写参数名称",
            trigger: "blur",
          },
        ],
      },
      activeName: "only",
      categories: [],
      selectId: [],
      selectProps: { value: "cat_id", label: "cat_name", children: "children" },
      queryId: 0,
      onlyTable: [],
      manyTable: [],
      tabIndex: 0,
      tabName: "only",
    };
  },
  methods: {
    async editCatePropsForm() {
      let { data } = await this.$axios.post(
        `categories/${this.queryId}/attributes`,
        {
          attr_sel: "only",
          attr_name: this.addCatePropsFormData.attr_name,
        }
      );
      console.log(this.tabName);
      this.addCatePropsForm = false;
      this.getManyTable();
      this.getOnlyTable();
    },
    addCatePropsFormClose() {
      this.$refs.addCatePropsFormRef.resetFields();
    },
    removeAttr(attr) {
      this.$confirm("此操作将永久删除该属性, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          let { data } = await this.$axios.delete(
            `categories/${attr.cat_id}/attributes/${attr.attr_id}`
          );
          console.log(data);
          this.$message({
            type: "success",
            message: data.meta.msg,
          });
          this.getManyTable();
          this.getOnlyTable();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    async getManyTable() {
      let { data } = await this.$axios.get(
        `categories/${this.queryId}/attributes`,
        {
          params: { sel: "many" },
        }
      );

      this.manyTable = data.data;
    },
    async getOnlyTable() {
      let { data: res } = await this.$axios.get(
        `categories/${this.queryId}/attributes`,
        {
          params: { sel: "only" },
        }
      );

      this.onlyTable = res.data;
    },
    handelChange(val) {
      this.queryId = val[val.length - 1];
      console.log(this.tabName);
      this.getManyTable();
      this.getOnlyTable();
    },
    handleClick(tab, event) {
      this.tabIndex = tab.index;
      console.log(tab.name);
      this.tabName = tab.name;
    },
    async getCategories() {
      let { data } = await this.$axios.get("categories");
      this.categories = data.data;
    },
  },
  created() {
    this.getCategories();
  },
};
</script>

<style>
.el-alert {
  margin-bottom: 15px;
}
.el-cascader {
  margin-left: 10px;
}
</style>