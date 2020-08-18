<template>
  <div class="roles">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">权限管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">角色列表</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row>
        <el-col>
          <el-button @click="addRoles=true">添加角色</el-button>
        </el-col>
      </el-row>
      <el-table :data="rolesLists" border stripe :v-loading="true">
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-row
              :class="['bdbottom',i===0?'bdtop':'','center']"
              v-for="(item,i) in scope.row.children"
              :key="item.id"
            >
              <el-col :span="5">
                <el-tag
                  class="el-tagM"
                  closable
                  @close="removeRoles(scope.row,item.id)"
                >{{item.authName}}</el-tag>
                <i class="el-icon-caret-right"></i>
              </el-col>
              <el-col :span="19">
                <el-row
                  :class="[m===0?'':'bdtop','center']"
                  v-for="(subItem,m) in item.children"
                  :key="subItem.id"
                >
                  <el-col :span="6">
                    <el-tag
                      closable
                      @close="removeRoles(scope.row,subItem.id)"
                      class="el-tagM"
                      type="success"
                    >{{subItem.authName}}</el-tag>
                    <i class="el-icon-caret-right"></i>
                  </el-col>
                  <el-col :span="18">
                    <el-tag
                      type="warning"
                      class="el-tagM"
                      v-for="subSubItem in subItem.children"
                      :key="subSubItem.id"
                      closable
                      @close="removeRoles(scope.row,subSubItem.id)"
                    >{{subSubItem.authName}}</el-tag>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="roleName" label="角色名称"></el-table-column>
        <el-table-column prop="roleDesc" label="角色描述"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button icon="el-icon-edit" type="primary" size="mini">编辑</el-button>
            <el-button
              icon="el-icon-delete"
              type="danger"
              size="mini"
              @click="deleteRoles(scope.row.id)"
            >删除</el-button>
            <el-button
              icon="el-icon-setting"
              type="warning"
              size="mini"
              @click="showSetRights(scope.row)"
            >分配权限</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="提示" :visible.sync="addRoles" width="50%">
        <el-form :model="addRolesForm" :rules="addRolesRules" ref="addRolesRef" label-width="100px">
          <el-form-item label="角色名称" prop="roleName">
            <el-input v-model="addRolesForm.roleName"></el-input>
          </el-form-item>
          <el-form-item label="角色描述" prop="roleDesc">
            <el-input v-model="addRolesForm.roleDesc"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addRoles = false">取 消</el-button>
          <el-button type="primary" @click="addRolesCon">确 定</el-button>
        </span>
      </el-dialog>
      <el-dialog title="提示" :visible.sync="setRights" width="50%">
        <el-tree
          ref="treeRef"
          :data="rightsList"
          :props="rightsListProp"
          show-checkbox
          node-key="id"
          default-expand-all
          :default-checked-keys="defKeys"
        ></el-tree>
        <span slot="footer" class="dialog-footer">
          <el-button @click="setRights = false">取 消</el-button>
          <el-button type="primary" @click="setRightsCon">确 定</el-button>
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rolesLists: [],
      addRoles: false,
      setRights: false,
      rightsList: [],
      defKeys: [],
      rightsListProp: {
        label: "authName",
        children: "children"
      },
      addRolesForm: {
        roleName: "",
        roleDesc: ""
      },
      addRolesRules: {
        roleName: [
          {
            required: true,
            message: "请输入角色名称",
            trigger: "blur"
          },
          {
            min: 3,
            max: 10,
            message: "请输入3-10个字符",
            trigger: "blur"
          }
        ],
        roleDesc: [
          {
            required: true,
            message: "请输入角色描述",
            trigger: "blur"
          },
          {
            min: 3,
            max: 10,
            message: "请输入3-10个字符",
            trigger: "blur"
          }
        ]
      },
      roleId: ""
    };
  },
  methods: {
    filterRights(node, arr) {
      if (!node.children) {
        return arr.push(node.id);
      }
      node.children.forEach(item => {
        this.filterRights(item, arr);
      });
    },
    async showSetRights(role) {
      this.roleId = role.id;
      this.defKeys = [];
      this.setRights = true;
      let { data } = await this.$axios.get("rights/tree");
      this.rightsList = data.data;
      this.filterRights(role, this.defKeys);
    },
    async setRightsCon() {
      const treeKeys = [
        ...this.$refs.treeRef.getCheckedKeys(),
        ...this.$refs.treeRef.getHalfCheckedKeys()
      ];
      const treeStr = treeKeys.join(",");
      let { data } = await this.$axios.post(`roles/${this.roleId}/rights`, {
        rids: treeStr
      });
      this.$message({
        message: data.meta.msg,
        type: "success"
      });
      this.getRolesLists();
      this.setRights = false;
    },
    removeRoles(roleid, rightid) {
      this.$confirm("此操作将永久删除该权限, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          let { data } = await this.$axios.delete(
            `roles/${roleid.id}/rights/${rightid}`
          );
          this.$message({
            type: "success",
            message: "删除成功"
          });
          roleid.children = data.data;
          console.log(roleid);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    async getRolesLists() {
      let { data } = await this.$axios.get("roles");
      this.rolesLists = data.data;
    },
    addRolesCon() {
      this.$refs.addRolesRef.validate(async val => {
        if (!val) return;
        let { data } = await this.$axios.post("roles", this.addRolesForm);
        this.addRoles = false;
        this.$message({
          message: data.meta.msg,
          type: "success"
        });
        this.getRolesLists();
      });
    },
    async deleteRoles(id) {
      let { data } = await this.$axios.delete("roles/" + id);
      this.$message({
        message: data.meta.msg,
        type: "success"
      });
      this.getRolesLists();
    }
  },
  created() {
    this.getRolesLists();
  }
};
</script>

<style lang="less" scoped>
.el-tagM {
  margin: 7px;
}
.bdtop {
  border-top: 1px solid #eee;
}
.bdbottom {
  border-bottom: 1px solid #eee;
}
.center {
  display: flex;
  align-items: center;
}
</style>