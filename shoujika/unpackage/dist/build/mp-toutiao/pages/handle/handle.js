(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/handle/handle"],{3626:function(e,n,o){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=function(){Promise.all([o.e("common/vendor"),o.e("city/city")]).then(function(){return resolve(o("3766"))}.bind(null,o)).catch(o.oe)},r={data:function(){return{uid:"",date:{recommend_image:"",price:"",id:""},formData:{id_name:"",id_num:"",name:"",mob:"",add:"",cityTitle:"点击选择所在市区"},rules:{id_name:{rules:[{required:!0,errorMessage:"请输入身份证姓名"}]},id_num:{rules:[{required:!0,errorMessage:"请填写身份证"},{validateFunction:function(e,n,o,t){var r=/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;r.test(n)||t("身份证格式不正确，请重新填写")}}]},name:{rules:[{required:!0,errorMessage:"请输入收货人"}]},mob:{rules:[{required:!0,errorMessage:"请填写手机号码"},{validateFunction:function(e,n,o,t){var r=/^(13[0-9]|14[1579]|15[0-3,5-9]|16[6]|17[0123456789]|18[0-9]|19[89])\d{8}$/;r.test(n)||t("手机号码格式不正确，请重新填写")}}]},add:{rules:[{required:!0,errorMessage:"请输入详细地址"}]},cityTitle:{rules:[{required:!0,errorMessage:"点击选择所在市区"}]}}}},onLoad:function(e){console.log(JSON.parse(e.content)),this.date=JSON.parse(e.content),console.log(this.date.price),this.id=this.date.id},methods:{cityChange:function(e){this.formData.cityTitle=e.data.join("-"),console.log(this.formData.cityTitle)},submit:function(){var n=this;e.login({provider:"toutiao",success:function(o){e.request({url:"https://mobilecard.shenzhenbenwo.com/api/douyin/douyin_auth",method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded"},data:{anonymous_code:o.anonymousCode,code:o.code},success:function(o){n.uid=o.data.data.data.id,n.$refs.form.validate().then((function(o){console.log("111",n.uid),e.request({header:{"Content-Type":"application/x-www-form-urlencoded"},url:"https://mobilecard.shenzhenbenwo.com/api/v2/index/createOrder/"+n.id,method:"POST",data:{address:n.$refs.form.formData.cityTitle,real_name:n.$refs.form.formData.name,ConsigneeName:n.$refs.form.formData.name,phone:n.$refs.form.formData.mob,idCard:n.$refs.form.formData.id_num,DetailedAddress:n.$refs.form.formData.add,id:n.uid},dataType:"json",success:function(n){"400"==n.data.status?e.showToast({title:n.data.msg,duration:1e3}):e.requestPayment({provider:"toutiao",orderInfo:{order_id:n.data.data.data.order_id,order_token:n.data.data.data.order_token},_debug:1,payChannel:{default_pay_channel:"alipay"},service:5,getOrderStatus:function(e){e.out_order_no;return new Promise((function(e,n){}))},success:function(e){0==e.code&&(console.log("成功"),console.log(e))},fail:function(e){console.log("失败"),console.log(e)}})}})})).catch((function(e){console.log("表单错误信息：",e)}))},fail:function(){}})},fail:function(e){console.log(e)}})}},components:{pickerAddress:t}};n.default=r}).call(this,o("f266")["default"])},"49cd":function(e,n,o){},"4b62":function(e,n,o){"use strict";(function(e,n){o("d312");r(o("66fd"));var t=r(o("b3af"));function r(e){return e&&e.__esModule?e:{default:e}}e.__webpack_require_UNI_MP_PLUGIN__=o,n(t.default)}).call(this,o("f266")["default"],o("f266")["createPage"])},"4f7f":function(e,n,o){"use strict";o.d(n,"b",(function(){return r})),o.d(n,"c",(function(){return a})),o.d(n,"a",(function(){return t}));var t={uniForms:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uni-forms/components/uni-forms/uni-forms")]).then(o.bind(null,"ae6f"))},uniFormsItem:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uni-forms/components/uni-forms-item/uni-forms-item")]).then(o.bind(null,"7bbc"))},uniEasyinput:function(){return o.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(o.bind(null,"e484"))}},r=function(){var e=this,n=e.$createElement;e._self._c},a=[]},b3af:function(e,n,o){"use strict";o.r(n);var t=o("4f7f"),r=o("bfc7");for(var a in r)"default"!==a&&function(e){o.d(n,e,(function(){return r[e]}))}(a);o("f9b5");var i,u=o("f0c5"),d=Object(u["a"])(r["default"],t["b"],t["c"],!1,null,"171295d1",null,!1,t["a"],i);n["default"]=d.exports},bfc7:function(e,n,o){"use strict";o.r(n);var t=o("3626"),r=o.n(t);for(var a in t)"default"!==a&&function(e){o.d(n,e,(function(){return t[e]}))}(a);n["default"]=r.a},f9b5:function(e,n,o){"use strict";var t=o("49cd"),r=o.n(t);r.a}},[["4b62","common/runtime","common/vendor"]]]);