(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bdf276c"],{"1da1":function(t,e,r){"use strict";function o(t,e,r,o,n,a,i){try{var s=t[a](i),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(o,n)}function n(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function s(t){o(i,n,a,s,c,"next",t)}function c(t){o(i,n,a,s,c,"throw",t)}s(void 0)}))}}r.d(e,"a",(function(){return n}))},"96cf":function(t,e,r){var o=function(t){"use strict";var e,r=Object.prototype,o=r.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(S){c=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var n=e&&e.prototype instanceof m?e:m,a=Object.create(n.prototype),i=new j(o||[]);return a._invoke=k(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=u;var d="suspendedStart",h="suspendedYield",f="executing",p="completed",g={};function m(){}function y(){}function v(){}var b={};b[a]=function(){return this};var w=Object.getPrototypeOf,_=w&&w(w(q([])));_&&_!==r&&o.call(_,a)&&(b=_);var x=v.prototype=m.prototype=Object.create(b);function G(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(n,a,i,s){var c=l(t[n],t,a);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"===typeof d&&o.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,s)}))}s(c.arg)}var n;function a(t,o){function a(){return new e((function(e,n){r(t,o,e,n)}))}return n=n?n.then(a,a):a()}this._invoke=a}function k(t,e,r){var o=d;return function(n,a){if(o===f)throw new Error("Generator is already running");if(o===p){if("throw"===n)throw a;return O()}r.method=n,r.arg=a;while(1){var i=r.delegate;if(i){var s=F(i,r);if(s){if(s===g)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=f;var c=l(t,e,r);if("normal"===c.type){if(o=r.done?p:h,c.arg===g)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=p,r.method="throw",r.arg=c.arg)}}}function F(t,r){var o=t.iterator[r.method];if(o===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,F(t,r),"throw"===r.method))return g;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var n=l(o,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,g;var a=n.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function q(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){while(++n<t.length)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:O}}function O(){return{value:e,done:!0}}return y.prototype=x.constructor=v,v.constructor=y,y.displayName=c(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},G(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,o,n,a){void 0===a&&(a=Promise);var i=new L(u(e,r,o,n),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},G(x),c(x,s,"Generator"),x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var o=e.pop();if(o in t)return r.value=o,r.done=!1,r}return r.done=!0,r}},t.values=q,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(D),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(o,n){return s.type="throw",s.arg=t,r.next=o,n&&(r.method="next",r.arg=e),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),D(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var n=o.arg;D(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,o){return this.delegate={iterator:q(t),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=o}catch(n){Function("r","regeneratorRuntime = r")(o)}},ff5b:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"goods"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[t._v("首页")]),r("el-breadcrumb-item",[r("a",{attrs:{href:"/"}},[t._v("商品管理")])]),r("el-breadcrumb-item",[r("a",{attrs:{href:"/"}},[t._v("商品列表")])])],1),r("el-card",[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:8}},[r("el-input",{attrs:{placeholder:"请输入内容",clearable:""},model:{value:t.queryInfo.query,callback:function(e){t.$set(t.queryInfo,"query",e)},expression:"queryInfo.query"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.getGoods},slot:"append"})],1)],1),r("el-col",{attrs:{span:8}},[r("el-button",{attrs:{type:"primary"},on:{click:t.showAddGoods}},[t._v("添加商品")])],1)],1),r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.goodsList,border:""}},[r("el-table-column",{attrs:{type:"index"}}),r("el-table-column",{attrs:{prop:"goods_name",label:"商品名称",width:"400px"}}),r("el-table-column",{attrs:{prop:"goods_price",label:"商品价格"}}),r("el-table-column",{attrs:{prop:"goods_number",label:"商品数量"}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"}}),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(r){return t.deleteGood(e.row.goods_id)}}})]}}])})],1),r("el-pagination",{attrs:{"current-page":t.queryInfo.pagenum,"page-sizes":[10,50,100,200],"page-size":t.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),r("el-dialog",{attrs:{title:"提示",visible:t.addGoods,width:"50%"},on:{"update:visible":function(e){t.addGoods=e}}},[r("el-form",{ref:"addGoodsFormRef",staticClass:"demo-ruleForm",attrs:{model:t.addGoodsFormData,rules:t.addGoodsFormRules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"商品名称",prop:"goods_name"}},[r("el-input",{model:{value:t.addGoodsFormData.goods_name,callback:function(e){t.$set(t.addGoodsFormData,"goods_name",e)},expression:"addGoodsFormData.goods_name"}})],1),r("el-form-item",{attrs:{label:"商品分类"}},[r("el-cascader",{attrs:{options:t.categories,props:t.cateProps,clearable:""},on:{change:t.handleChange},model:{value:t.cateSelect,callback:function(e){t.cateSelect=e},expression:"cateSelect"}})],1),r("el-form-item",{attrs:{label:"商品价格",prop:"goods_price"}},[r("el-input",{model:{value:t.addGoodsFormData.goods_price,callback:function(e){t.$set(t.addGoodsFormData,"goods_price",e)},expression:"addGoodsFormData.goods_price"}})],1),r("el-form-item",{attrs:{label:"商品数量",prop:"goods_number"}},[r("el-input",{model:{value:t.addGoodsFormData.goods_number,callback:function(e){t.$set(t.addGoodsFormData,"goods_number",e)},expression:"addGoodsFormData.goods_number"}})],1),r("el-form-item",{attrs:{label:"商品重量",prop:"goods_weight"}},[r("el-input",{model:{value:t.addGoodsFormData.goods_weight,callback:function(e){t.$set(t.addGoodsFormData,"goods_weight",e)},expression:"addGoodsFormData.goods_weight"}})],1),r("el-form-item",{attrs:{label:"商品介绍"}},[r("el-input",{model:{value:t.addGoodsFormData.goods_introduce,callback:function(e){t.$set(t.addGoodsFormData,"goods_introduce",e)},expression:"addGoodsFormData.goods_introduce"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.addGoods=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.addGoodsCon}},[t._v("确 定")])],1)],1)],1)},n=[],a=(r("96cf"),r("1da1")),i={data:function(){return{addGoodsFormData:{goods_name:"",goods_cat:"",goods_price:null,goods_number:null,goods_weight:null,goods_introduce:""},addGoodsFormRules:{goods_name:[{required:!0,message:"请输入商品名称",trigger:"blur"}],goods_price:[{required:!0,message:"请输入商品价格",trigger:"blur"}],goods_number:[{required:!0,message:"请输入商品数量",trigger:"blur"}],goods_weight:[{required:!0,message:"请输入商品重量",trigger:"blur"}]},addGoods:!1,queryInfo:{query:"",pagenum:1,pagesize:5},total:0,goodsList:[],categories:[],cateProps:{label:"cat_name",value:"cat_id",children:"children",checkStrictly:!0},cateSelect:[]}},methods:{addGoodsCon:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.post("goods",this.addGoodsFormData);case 2:e=t.sent,r=e.data,this.$message({message:r.meta.msg,type:"success"}),this.getGoods(),this.addGoods=!1;case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleChange:function(t){this.cateSelect=t,this.addGoodsFormData.goods_cat=t.join(",")},showAddGoods:function(){this.addGoods=!0,this.getCategories()},getCategories:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("categories");case 2:e=t.sent,r=e.data,this.categories=r.data;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),deleteGood:function(t){var e=this;this.$confirm("此操作将永久删除该商品, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(a["a"])(regeneratorRuntime.mark((function r(){var o,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$axios.delete("goods/".concat(t));case 2:o=r.sent,n=o.data,e.$message({type:"success",message:n.meta.msg}),e.getGoods();case 6:case"end":return r.stop()}}),r)})))).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},getGoods:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("goods",{params:this.queryInfo});case 2:e=t.sent,r=e.data,this.goodsList=r.data.goods,this.total=r.data.total;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleSizeChange:function(t){this.queryInfo.pagesize=t,this.getGoods()},handleCurrentChange:function(t){this.queryInfo.pagenum=t,this.getGoods()}},created:function(){this.getGoods()}},s=i,c=r("2877"),u=Object(c["a"])(s,o,n,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-6bdf276c.974b4f6b.js.map