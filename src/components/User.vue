<template>
  <div class="user">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">用户管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">用户列表</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable>
            <el-button slot="append" icon="el-icon-search" @click="getUsers"></el-button>
          </el-input>
        </el-col>
        <el-col :span="8">
          <el-button type="primary" @click="dialogVisible=true">添加用户</el-button>
        </el-col>
      </el-row>
      <el-table :data="tableData" style="width: 100%" border stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="用户名" width="180" prop="username"></el-table-column>
        <el-table-column label="用户角色" width="180" prop="role_name"></el-table-column>
        <el-table-column label="邮箱" width="180" prop="email"></el-table-column>
        <el-table-column label="状态" width="180">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.mg_state"
              active-color="#13ce66"
              inactive-color="#ff4949"
              @change="switchState(scope.row)"
            ></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="编辑" placement="top">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" type="primary">
                <i class="el-icon-edit"></i>
              </el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="删除" placement="top">
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">
                <i class="el-icon-delete"></i>
              </el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="配置" placement="top">
              <el-button size="mini" type="warning" @click="handleDelete(scope.$index, scope.row)">
                <i class="el-icon-setting"></i>
              </el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        :page-size="2"
        @current-change="handleCurrentChange"
      ></el-pagination>
      <el-dialog title="提示" :visible.sync="dialogVisible" width="40%">
        <el-form :model="addForm" :rules="addRules" ref="addForm" label-width="60px">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="addForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="addForm.password"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="addForm.email"></el-input>
          </el-form-item>
          <el-form-item label="手机" prop="moble">
            <el-input v-model="addForm.moble"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryInfo: {
        query: "",
        pagenum: 1,
        pagesize: 2
      },
      total: 0,
      tableData: [],
      dialogVisible: false,
      addForm: {
        username: "",
        password: "",
        email: "",
        moble: ""
      },
      addRules: {}
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleCurrentChange(val) {
      this.queryInfo.pagenum = val;
      this.getUsers();
    },
    async getUsers() {
      let { data } = await this.$axios.get("users", { params: this.queryInfo });
      this.tableData = data.data.users;
      console.log(data);
      this.total = data.data.total;
      console.log(data.data.total);
    },
    async switchState(userInfo) {
      console.log(userInfo);
      let { data } = await this.$axios.put(
        `users/${userInfo.id}/state/${userInfo.mg_state}`
      );
      this.$message({
        message: data.meta.msg,
        type: "success"
      });
      console.log(data);
    }
  }
};
</script>

<style lang="less" scoped>
</style>