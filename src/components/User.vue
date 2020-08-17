
<template>
  <!-- git推送分支到云端
  git push -u origin login-->
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
              <el-button size="mini" type="warning" @click="handleConfig(scope.$index, scope.row)">
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
      <el-dialog title="添加用户" :visible.sync="dialogVisible" width="40%" @close="resetAdd">
        <el-form :model="addForm" :rules="addRules" ref="addForm" label-width="80px">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="addForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="addForm.password"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="addForm.email"></el-input>
          </el-form-item>
          <el-form-item label="手机" prop="mobile">
            <el-input v-model="addForm.mobile"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addUser">确 定</el-button>
        </span>
      </el-dialog>
      <el-dialog title="添加用户" :visible.sync="editForm" width="40%">
        <el-form :model="editUserForm" :rules="addRules" ref="editFormRef" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="editUserForm.username" disabled></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="editUserForm.email"></el-input>
          </el-form-item>
          <el-form-item label="手机" prop="mobile">
            <el-input v-model="editUserForm.mobile"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="editFormReset">取 消</el-button>
          <el-button type="primary" @click="editUser">确 定</el-button>
        </span>
      </el-dialog>
      <el-dialog title="角色配置" :visible.sync="config" width="50%">
        <p>用户名：{{userInfo.username}}</p>
        <p>用户名：{{userInfo.role_name}}</p>
        <!-- <p>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </p>-->
        <span slot="footer" class="dialog-footer">
          <el-button @click="config = false">取 消</el-button>
          <el-button type="primary" @click="config = false">确 定</el-button>
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    let checkEmail = (rule, value, cb) => {
      const regEmali = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;

      if (regEmali.test(value)) {
        return cb();
      }
      cb(new Error("请输入正确的邮箱"));
    };
    let checkMobile = (rule, value, cb) => {
      const regMobile = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;

      if (regMobile.test(value)) {
        return cb();
      }
      cb(new Error("请输入正确的手机号"));
    };
    return {
      queryInfo: {
        query: "",
        pagenum: 1,
        pagesize: 2,
      },
      config: false,
      userInfo: {},
      total: 0,
      tableData: [],
      dialogVisible: false,
      editForm: false,
      addForm: {
        username: "",
        password: "",
        email: "",
        mobile: "",
      },
      editUserForm: {},
      addRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { validator: checkEmail, trigger: "blur" },
        ],
        mobile: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: checkMobile, trigger: "blur" },
        ],
      },
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    editUser() {
      this.$refs.editFormRef.validate(async (val) => {
        if (!val) return;
        let { data } = await this.$axios.put(
          "users/" + this.editUserForm.id,
          this.editUserForm
        );
        this.$message({
          message: data.meta.msg,
          type: "success",
        });
        this.editForm = false;
        this.getUsers();
      });
    },
    editFormReset() {
      this.editForm = false;
      this.$refs.editFormRef.resetFields();
    },
    async handleEdit(index, row) {
      this.editForm = true;
      let { data } = await this.$axios.get("users/" + row.id);
      this.editUserForm = data.data;
    },
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该用户, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          let { data } = await this.$axios.delete("users/" + row.id);
          console.log(data);
          this.getUsers();
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
    handleConfig(index, row) {
      console.log(index, row);
      this.userInfo = row;
      this.config = true;
    },
    handleCurrentChange(val) {
      this.queryInfo.pagenum = val;
      this.getUsers();
    },
    async getUsers() {
      let { data } = await this.$axios.get("users", { params: this.queryInfo });
      this.tableData = data.data.users;
      this.total = data.data.total;
    },
    async switchState(userInfo) {
      console.log(userInfo);
      let { data } = await this.$axios.put(
        `users/${userInfo.id}/state/${userInfo.mg_state}`
      );
      this.$message({
        message: data.meta.msg,
        type: "success",
      });
    },
    resetAdd() {
      this.$refs.addForm.resetFields();
    },
    addUser() {
      console.log(this.$refs);
      this.$refs.addForm.validate(async (val) => {
        if (!val) return;
        let { data } = await this.$axios.post("users", this.addForm);
        this.$message({
          message: data.meta.msg,
          type: "success",
        });
        this.getUsers();
        this.dialogVisible = false;
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>