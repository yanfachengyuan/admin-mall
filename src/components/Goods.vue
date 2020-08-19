<template>
  <div class="goods">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">商品管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/">商品列表</a>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容" v-model="queryInfo.query" clearable>
            <el-button slot="append" icon="el-icon-search" @click="getGoods"></el-button>
          </el-input>
        </el-col>
        <el-col :span="8">
          <el-button type="primary" @click="showAddGoods">添加商品</el-button>
        </el-col>
      </el-row>
      <el-table :data="goodsList" style="width: 100%" border>
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="goods_name" label="商品名称" width="400px"></el-table-column>
        <el-table-column prop="goods_price" label="商品价格"></el-table-column>
        <el-table-column prop="goods_number" label="商品数量"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini"></el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="deleteGood(scope.row.goods_id)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[10,50, 100, 200]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-card>
    <el-dialog title="提示" :visible.sync="addGoods" width="50%">
      <el-form
        :model="addGoodsFormData"
        :rules="addGoodsFormRules"
        ref="addGoodsFormRef"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="商品名称" prop="goods_name">
          <el-input v-model="addGoodsFormData.goods_name"></el-input>
        </el-form-item>
        <el-form-item label="商品分类">
          <el-cascader
            :options="categories"
            :props="cateProps"
            v-model="cateSelect"
            @change="handleChange"
            clearable
          ></el-cascader>
        </el-form-item>
        <el-form-item label="商品价格" prop="goods_price">
          <el-input v-model="addGoodsFormData.goods_price"></el-input>
        </el-form-item>
        <el-form-item label="商品数量" prop="goods_number">
          <el-input v-model="addGoodsFormData.goods_number"></el-input>
        </el-form-item>
        <el-form-item label="商品重量" prop="goods_weight">
          <el-input v-model="addGoodsFormData.goods_weight"></el-input>
        </el-form-item>
        <el-form-item label="商品介绍">
          <el-input v-model="addGoodsFormData.goods_introduce"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addGoods = false">取 消</el-button>
        <el-button type="primary" @click="addGoodsCon">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addGoodsFormData: {
        goods_name: "",
        goods_cat: "",
        goods_price: null,
        goods_number: null,
        goods_weight: null,
        goods_introduce: "",
      },
      addGoodsFormRules: {
        goods_name: [
          {
            required: true,
            message: "请输入商品名称",
            trigger: "blur",
          },
        ],
        goods_price: [
          {
            required: true,
            message: "请输入商品价格",
            trigger: "blur",
          },
        ],
        goods_number: [
          {
            required: true,
            message: "请输入商品数量",
            trigger: "blur",
          },
        ],
        goods_weight: [
          {
            required: true,
            message: "请输入商品重量",
            trigger: "blur",
          },
        ],
      },
      addGoods: false,
      queryInfo: {
        query: "",
        pagenum: 1,
        pagesize: 5,
      },
      total: 0,
      goodsList: [],
      categories: [],
      cateProps: {
        label: "cat_name",
        value: "cat_id",
        children: "children",
        checkStrictly: true,
      },
      cateSelect: [],
    };
  },
  methods: {
    async addGoodsCon() {
      let { data } = await this.$axios.post("goods", this.addGoodsFormData);
      this.$message({
        message: data.meta.msg,
        type: "success",
      });
      this.getGoods();
      this.addGoods = false;
    },
    handleChange(val) {
      this.cateSelect = val;
      this.addGoodsFormData.goods_cat = val.join(",");
    },
    showAddGoods() {
      this.addGoods = true;
      this.getCategories();
    },
    async getCategories() {
      let { data } = await this.$axios.get("categories");
      this.categories = data.data;
    },
    deleteGood(id) {
      this.$confirm("此操作将永久删除该商品, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          let { data } = await this.$axios.delete(`goods/${id}`);
          this.$message({
            type: "success",
            message: data.meta.msg,
          });
          this.getGoods();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    async getGoods() {
      let { data } = await this.$axios.get("goods", { params: this.queryInfo });
      this.goodsList = data.data.goods;
      this.total = data.data.total;
    },
    handleSizeChange(val) {
      this.queryInfo.pagesize = val;
      this.getGoods();
    },
    handleCurrentChange(val) {
      this.queryInfo.pagenum = val;
      this.getGoods();
    },
  },
  created() {
    this.getGoods();
  },
};
</script>

<style>
</style>