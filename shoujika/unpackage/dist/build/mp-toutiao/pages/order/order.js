(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/order"],{"0758":function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return o}));var o={uniForms:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(t.bind(null,"ae6f"))},uniFormsItem:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item")]).then(t.bind(null,"7bbc"))},uniEasyinput:function(){return t.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(t.bind(null,"e484"))}},a=function(){var e=this,n=e.$createElement;e._self._c},i=[]},1964:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{isshow:0,list:{img:"../../static/con1.png",store_name:"电信花花卡",price:"9.5",name:"圆通快递",number:"514641618516165"},lists:[{time:"06-26 13:28",status:"正在派件中哈呵呵呵呵呵呵呵哈哈哈哈哈哈哈哈哈哈哈哈哈"}],formData:{mob:"",id_num:""},rules:{mob:{rules:[{required:!0,errorMessage:"请填写手机号码"},{validateFunction:function(e,n,t,o){var a=/^(13[0-9]|14[1579]|15[0-3,5-9]|16[6]|17[0123456789]|18[0-9]|19[89])\d{8}$/;a.test(n)||o("手机号码格式不正确，请重新填写")}}]},id_num:{rules:[{required:!0,errorMessage:"请填写身份证"},{validateFunction:function(e,n,t,o){var a=/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;a.test(n)||o("身份证格式不正确，请重新填写")}}]}}}},onLoad:function(){},methods:{fanhui:function(){this.isshow=0},submit:function(){var n=this;this.$refs.form.validate().then((function(t){console.log("表单数据信息：",t),e.request({header:{"Content-Type":"application/x-www-form-urlencoded"},url:"https://mobilecard.shenzhenbenwo.com/api/v2/index/orderdetail",method:"POST",data:{phone:n.$refs.form.formData.mob,idCard:n.$refs.form.formData.id_num},success:function(t){void 0!==t.data.data.order_id?(n.isshow=2,console.log(t.data.data.product_info.cart_info.store_name),n.list.name=t.data.data.delivery_name,n.list.number=t.data.data.delivery_id,n.list.store_name=t.data.data.product_info.cart_info.store_name,n.list.price=t.data.data.product_info.cart_info.truePrice,null==n.list.name&&(n.list.name="商品未发货",n.list.number="暂无"),e.request({header:{"Content-Type":"application/x-www-form-urlencoded"},url:"https://mobilecard.shenzhenbenwo.com/api/v2/index/express",method:"POST",data:{order_id:t.data.data.order_id},success:function(e){console.log(e.data.data.result.list),n.lists=e.data.data.result.list}})):n.isshow=1}})})).catch((function(e){console.log("表单错误信息：",e)}))}}};n.default=t}).call(this,t("f266")["default"])},2591:function(e,n,t){"use strict";t.r(n);var o=t("1964"),a=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=a.a},"9cdd":function(e,n,t){"use strict";(function(e,n){t("d312");a(t("66fd"));var o=a(t("dec5"));function a(e){return e&&e.__esModule?e:{default:e}}e.__webpack_require_UNI_MP_PLUGIN__=t,n(o.default)}).call(this,t("f266")["default"],t("f266")["createPage"])},b479:function(e,n,t){},ca88:function(e,n,t){"use strict";var o=t("b479"),a=t.n(o);a.a},dec5:function(e,n,t){"use strict";t.r(n);var o=t("0758"),a=t("2591");for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("ca88");var r,u=t("f0c5"),s=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,"60a3701f",null,!1,o["a"],r);n["default"]=s.exports}},[["9cdd","common/runtime","common/vendor"]]]);