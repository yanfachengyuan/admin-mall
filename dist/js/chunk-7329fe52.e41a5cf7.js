(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7329fe52"],{"1da1":function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(l){return void r(l)}s.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function s(t){n(a,o,i,s,c,"next",t)}function c(t){n(a,o,i,s,c,"throw",t)}s(void 0)}))}}r.d(e,"a",(function(){return o}))},"43fe0":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"roles"},[r("el-breadcrumb",{attrs:{separator:"/"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/welcome"}}},[t._v("首页")]),r("el-breadcrumb-item",[r("a",{attrs:{href:"/"}},[t._v("权限管理")])]),r("el-breadcrumb-item",[r("a",{attrs:{href:"/"}},[t._v("角色列表")])])],1),r("el-card",[r("el-row",[r("el-col",[r("el-button",{on:{click:function(e){t.addRoles=!0}}},[t._v("添加角色")])],1)],1),r("el-table",{attrs:{data:t.rolesLists,border:"",stripe:"","v-loading":!0}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.children,(function(n,o){return r("el-row",{key:n.id,class:["bdbottom",0===o?"bdtop":"","center"]},[r("el-col",{attrs:{span:5}},[r("el-tag",{staticClass:"el-tagM",attrs:{closable:""},on:{close:function(r){return t.removeRoles(e.row,n.id)}}},[t._v(t._s(n.authName))]),r("i",{staticClass:"el-icon-caret-right"})],1),r("el-col",{attrs:{span:19}},t._l(n.children,(function(n,o){return r("el-row",{key:n.id,class:[0===o?"":"bdtop","center"]},[r("el-col",{attrs:{span:6}},[r("el-tag",{staticClass:"el-tagM",attrs:{closable:"",type:"success"},on:{close:function(r){return t.removeRoles(e.row,n.id)}}},[t._v(t._s(n.authName))]),r("i",{staticClass:"el-icon-caret-right"})],1),r("el-col",{attrs:{span:18}},t._l(n.children,(function(n){return r("el-tag",{key:n.id,staticClass:"el-tagM",attrs:{type:"warning",closable:""},on:{close:function(r){return t.removeRoles(e.row,n.id)}}},[t._v(t._s(n.authName))])})),1)],1)})),1)],1)}))}}])}),r("el-table-column",{attrs:{type:"index"}}),r("el-table-column",{attrs:{prop:"roleName",label:"角色名称"}}),r("el-table-column",{attrs:{prop:"roleDesc",label:"角色描述"}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{icon:"el-icon-edit",type:"primary",size:"mini"}},[t._v("编辑")]),r("el-button",{attrs:{icon:"el-icon-delete",type:"danger",size:"mini"},on:{click:function(r){return t.deleteRoles(e.row.id)}}},[t._v("删除")]),r("el-button",{attrs:{icon:"el-icon-setting",type:"warning",size:"mini"},on:{click:function(r){return t.showSetRights(e.row)}}},[t._v("分配权限")])]}}])})],1),r("el-dialog",{attrs:{title:"提示",visible:t.addRoles,width:"50%"},on:{"update:visible":function(e){t.addRoles=e}}},[r("el-form",{ref:"addRolesRef",attrs:{model:t.addRolesForm,rules:t.addRolesRules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"角色名称",prop:"roleName"}},[r("el-input",{model:{value:t.addRolesForm.roleName,callback:function(e){t.$set(t.addRolesForm,"roleName",e)},expression:"addRolesForm.roleName"}})],1),r("el-form-item",{attrs:{label:"角色描述",prop:"roleDesc"}},[r("el-input",{model:{value:t.addRolesForm.roleDesc,callback:function(e){t.$set(t.addRolesForm,"roleDesc",e)},expression:"addRolesForm.roleDesc"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.addRoles=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.addRolesCon}},[t._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"提示",visible:t.setRights,width:"50%"},on:{"update:visible":function(e){t.setRights=e}}},[r("el-tree",{ref:"treeRef",attrs:{data:t.rightsList,props:t.rightsListProp,"show-checkbox":"","node-key":"id","default-expand-all":"","default-checked-keys":t.defKeys}}),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.setRights=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.setRightsCon}},[t._v("确 定")])],1)],1)],1)],1)},o=[];function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t){if(Array.isArray(t))return i(t)}function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function c(t,e){if(t){if("string"===typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return a(t)||s(t)||c(t)||l()}r("96cf");var f=r("1da1"),h=(r("ac6a"),{data:function(){return{rolesLists:[],addRoles:!1,setRights:!1,rightsList:[],defKeys:[],rightsListProp:{label:"authName",children:"children"},addRolesForm:{roleName:"",roleDesc:""},addRolesRules:{roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"},{min:3,max:10,message:"请输入3-10个字符",trigger:"blur"}],roleDesc:[{required:!0,message:"请输入角色描述",trigger:"blur"},{min:3,max:10,message:"请输入3-10个字符",trigger:"blur"}]},roleId:""}},methods:{filterRights:function(t,e){var r=this;if(!t.children)return e.push(t.id);t.children.forEach((function(t){r.filterRights(t,e)}))},showSetRights:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.roleId=e.id,this.defKeys=[],this.setRights=!0,t.next=5,this.$axios.get("rights/tree");case 5:r=t.sent,n=r.data,this.rightsList=n.data,this.filterRights(e,this.defKeys);case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),setRightsCon:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){var e,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=[].concat(u(this.$refs.treeRef.getCheckedKeys()),u(this.$refs.treeRef.getHalfCheckedKeys())),r=e.join(","),t.next=4,this.$axios.post("roles/".concat(this.roleId,"/rights"),{rids:r});case 4:n=t.sent,n.data,this.getRolesLists(),this.setRights=!1;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),removeRoles:function(t,e){var r=this;this.$confirm("此操作将永久删除该权限, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(f["a"])(regeneratorRuntime.mark((function n(){var o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,r.$axios.delete("roles/".concat(t.id,"/rights/").concat(e));case 2:o=n.sent,i=o.data,r.$message({type:"success",message:"删除成功"}),t.children=i.data,console.log(t);case 7:case"end":return n.stop()}}),n)})))).catch((function(){r.$message({type:"info",message:"已取消删除"})}))},getRolesLists:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.get("roles");case 2:e=t.sent,r=e.data,this.rolesLists=r.data;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),addRolesCon:function(){var t=this;this.$refs.addRolesRef.validate(function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(r){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$axios.post("roles",t.addRolesForm);case 4:n=e.sent,o=n.data,t.addRoles=!1,t.$message({message:o.meta.msg,type:"success"}),t.getRolesLists();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},deleteRoles:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.delete("roles/"+e);case 2:r=t.sent,n=r.data,this.$message({message:n.meta.msg,type:"success"}),this.getRolesLists();case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},created:function(){this.getRolesLists()}}),d=h,p=(r("fccb"),r("2877")),m=Object(p["a"])(d,n,o,!1,null,"55869b72",null);e["default"]=m.exports},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(T){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=_(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(T){return{type:"throw",arg:T}}}t.wrap=l;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",m={};function g(){}function y(){}function v(){}var b={};b[i]=function(){return this};var w=Object.getPrototypeOf,R=w&&w(w(N([])));R&&R!==r&&n.call(R,i)&&(b=R);var L=v.prototype=g.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,s){var c=u(t[o],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function _(t,e,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return C()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var s=S(a,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=u(t,e,r);if("normal"===c.type){if(n=r.done?p:h,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function N(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:C}}function C(){return{value:e,done:!0}}return y.prototype=L.constructor=v,v.constructor=y,y.displayName=c(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},x(k.prototype),k.prototype[a]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new k(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(L),c(L,s,"Generator"),L[i]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},ac6a:function(t,e,r){for(var n=r("cadf"),o=r("0d58"),i=r("2aba"),a=r("7726"),s=r("32e9"),c=r("84f2"),l=r("2b4c"),u=l("iterator"),f=l("toStringTag"),h=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=o(d),m=0;m<p.length;m++){var g,y=p[m],v=d[y],b=a[y],w=b&&b.prototype;if(w&&(w[u]||s(w,u,h),w[f]||s(w,f,y),c[y]=h,v))for(g in n)w[g]||i(w,g,n[g],!0)}},ba1d:function(t,e,r){},fccb:function(t,e,r){"use strict";var n=r("ba1d"),o=r.n(n);o.a}}]);
//# sourceMappingURL=chunk-7329fe52.e41a5cf7.js.map