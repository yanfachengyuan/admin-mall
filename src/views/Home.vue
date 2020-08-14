<template>
  <el-container class="wrapper">
    <el-header>
      <div class="info">
        <img src="../assets/img/advator.png" alt />
        <h3>电商管理系统</h3>
      </div>
      <el-button type="info" @click="exit">退出</el-button>
    </el-header>
    <el-container>
      <el-aside :width="iscollapse?'64px':'200px'">
        <div class="collapse" @click="toggleCollapse">|||</div>
        <el-col>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#333744"
            text-color="#fff"
            active-text-color="#409eff"
            :unique-opened="true"
            :collapse="iscollapse"
            :collapse-transition="false"
          >
            <el-submenu :index="item.id+''" v-for="item in menu" :key="item.id">
              <template slot="title">
                <i :class="iconObj[item.id]"></i>
                <span>{{item.authName}}</span>
              </template>
              <el-menu-item
                :index="subItem.id+''"
                v-for="subItem in item.children"
                :key="subItem.id"
              >
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  {{subItem.authName}}
                </template>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-aside>
      <el-main>
        <div class="bread">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>
              <a href="/">活动管理</a>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      menu: [],
      iconObj:{
        '125':'el-icon-s-custom',
        '103':'el-icon-set-up',
        '101':'el-icon-shopping-bag-1',
        '102':'el-icon-s-order',
        '145':'el-icon-s-marketing'
      },
      iscollapse:true
    };
  },
  methods: {
    exit() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    async getMenus() {
      let { data } = await this.$axios.get("menus");
      console.log(data);
      this.menu = data.data;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toggleCollapse(){
      this.iscollapse=!this.iscollapse
    }
  },
  created() {
    this.getMenus();
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  height: 100%;
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #373d41;
    .info {
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: #ffffff;
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
  .el-aside {
    background-color: #333744;
    .el-menu{
      border-right: none;
    }
    .collapse{
      background-color: #4a5064;
      height: 30px;
      line-height: 30px;
      letter-spacing: 0.2em;
      text-align: center;
      color: white;
      font-size: 12px;
    }
  }
  .el-main {
    background-color: #eaedf1;
  }
}
</style>