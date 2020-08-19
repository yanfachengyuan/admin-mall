(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26ffffb5"],{"1d9f":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"categories"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[t._v("首页")]),r("el-breadcrumb-item",[r("a",{attrs:{href:"/"}},[t._v("商品管理")])]),r("el-breadcrumb-item",[r("a",{attrs:{href:"/"}},[t._v("商品分类")])])],1),r("el-card",[r("el-row",[r("el-col",[r("el-button",{attrs:{type:"primary"},on:{click:t.showAddCateForm}},[t._v("添加分类")])],1)],1),r("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:t.categories,"row-key":"cat_id",border:"","tree-props":{children:"children",hasChildren:"hasChildren"}}},[r("el-table-column",{attrs:{prop:"cat_id",label:"分类ID",width:"180"}}),r("el-table-column",{attrs:{prop:"cat_name",label:"分类名",width:"180"}}),r("el-table-column",{attrs:{label:"级别"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.cat_level?r("el-tag",[t._v("一级")]):t._e(),1===e.row.cat_level?r("el-tag",{attrs:{type:"success"}},[t._v("二级")]):t._e(),2===e.row.cat_level?r("el-tag",{attrs:{type:"warning"}},[t._v("三级")]):t._e()]}}])}),r("el-table-column",{attrs:{prop:"cat_deleted",label:"是否有效"},scopedSlots:t._u([{key:"default",fn:function(t){return[r("i",{class:!1===t.row.cat_deleted?"el-icon-success":"el-icon-error"})]}}])}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"primary",size:"mini"}},[r("i",{staticClass:"el-icon-edit"}),t._v("\n            编辑\n          ")]),r("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(r){return t.reomveCate(e.row.cat_id)}}},[r("i",{staticClass:"el-icon-delete"}),t._v("\n            删除\n          ")])]}}])})],1),r("el-pagination",{attrs:{"current-page":t.queryInfo.pagenum,"page-sizes":[5,10,15,20],"page-size":t.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),r("el-dialog",{attrs:{title:"添加分类",visible:t.addCate,width:"50%"},on:{"update:visible":function(e){t.addCate=e}}},[r("el-form",{ref:"addCateRef",staticClass:"demo-ruleForm",attrs:{model:t.addCateForm,rules:t.addCateRules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"分类名称",prop:"cat_name"}},[r("el-input",{model:{value:t.addCateForm.cat_name,callback:function(e){t.$set(t.addCateForm,"cat_name",e)},expression:"addCateForm.cat_name"}})],1),r("el-form-item",{attrs:{label:"父级分类"}},[r("div",{staticClass:"block"},[r("el-cascader",{attrs:{clearable:"","change-on-select":"",options:t.selectList,expandTrigger:"hover",props:t.selectProps},on:{change:t.handleChange},model:{value:t.selectListItem,callback:function(e){t.selectListItem=e},expression:"selectListItem"}})],1)])],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:t.resetAddCateForm}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.addCateCon}},[t._v("确 定")])],1)],1)],1)],1)},a=[],o=(r("96cf"),r("1da1")),i={data:function(){return{addCate:!1,addCateForm:{cat_name:"",cat_pid:0,cat_level:0},queryInfo:{type:3,pagenum:1,pagesize:5},categories:[],total:0,addCateRules:{cat_pid:[{required:!0,message:"请输入父级分类ID",trigger:"blur"}],cat_name:[{required:!0,message:"请输入分类名称",trigger:"blur"}],cat_level:[{required:!0,message:"请输入分类层级",trigger:"blur"}]},selectList:[],selectProps:{value:"cat_id",label:"cat_name",children:"children"},selectListItem:[],selectListId:[]}},methods:{reomveCate:function(t){var e=this;this.$confirm("此操作将永久删除该分类, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$axios.delete("categories/".concat(t));case 2:n=r.sent,a=n.data,e.getCategories(),e.$message({message:a.meta.msg,type:"success"});case 6:case"end":return r.stop()}}),r)})))).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},resetAddCateForm:function(){this.$refs.addCateRef.resetFields(),this.addCate=!1},handleChange:function(t){if(t.length>0)return this.addCateForm.cat_pid=t[t.length-1],void(this.addCateForm.cat_level=t.length);this.addCateForm.cat_pid=0,this.addCateForm.cat_level=0},showAddCateForm:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.addCate=!0,t.next=3,this.$axios.get("categories",{params:{type:2}});case 3:e=t.sent,r=e.data,console.log(r.data),this.selectList=r.data;case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),addCateCon:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.post("categories",this.addCateForm);case 2:e=t.sent,r=e.data,this.addCate=!1,this.$message({message:r.meta.msg,type:"success"}),this.getCategories();case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getCategories:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("categories",{params:this.queryInfo});case 2:e=t.sent,r=e.data,this.categories=r.data.result,this.total=r.data.total;case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleSizeChange:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.queryInfo.pagesize=e,this.getCategories();case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleCurrentChange:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.queryInfo.pagenum=e,this.getCategories();case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},created:function(){this.getCategories()}},c=i,s=(r("9fa8"),r("2877")),u=Object(s["a"])(c,n,a,!1,null,"765e032c",null);e["default"]=u.exports},"1da1":function(t,e,r){"use strict";function n(t,e,r,n,a,o,i){try{var c=t[o](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function c(t){n(i,a,o,c,s,"next",t)}function s(t){n(i,a,o,c,s,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return a}))},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(S){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof g?e:g,o=Object.create(a.prototype),i=new O(n||[]);return o._invoke=k(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",m={};function g(){}function v(){}function y(){}var w={};w[o]=function(){return this};var b=Object.getPrototypeOf,_=b&&b(b(R([])));_&&_!==r&&n.call(_,o)&&(w=_);var C=y.prototype=g.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(a,o,i,c){var s=l(t[a],t,o);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var a;function o(t,n){function o(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(o,o):o()}this._invoke=o}function k(t,e,r){var n=h;return function(a,o){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw o;return I()}r.method=a,r.arg=o;while(1){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?p:f,s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=l(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function F(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(F,this),this.reset(!0)}function R(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){while(++a<t.length)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:I}}function I(){return{value:e,done:!0}}return v.prototype=C.constructor=y,y.constructor=v,v.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(C),t},t.awrap=function(t){return{__await:t}},x(L.prototype),L.prototype[i]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new L(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(C),s(C,c,"Generator"),C[o]=function(){return this},C.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=R,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:R(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},"9fa8":function(t,e,r){"use strict";var n=r("a994"),a=r.n(n);a.a},a994:function(t,e,r){}}]);
//# sourceMappingURL=chunk-26ffffb5.46c4099a.js.map