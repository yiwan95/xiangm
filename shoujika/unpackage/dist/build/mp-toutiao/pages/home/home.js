(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/home"],{"4d4d":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{bannerimg:"/static/banner.png",rateValue:0,list:[],lists:[{name:"流量卡",img:"../../static/ka.png",link:"/pages/home/home"},{name:"在线客服",img:"../../static/kefu.png",link:"/pages/kefu/kefu"},{name:"订单查询",img:"../../static/dingdan.png",link:"/pages/order/order"}]}},onLoad:function(){var n=this;setTimeout((function(){n.rateValue=5}),10),this.sendReq()},methods:{link:function(e){console.log(e),n.switchTab({url:""+e})},skip:function(e,t,a){var i={id:e,price:t,recommend_image:a};n.navigateTo({url:"/pages/handle/handle?content="+JSON.stringify(i)})},onChange:function(n){console.log("rate发生改变:"+JSON.stringify(n))},sendReq:function(){var e=this;n.request({url:"https://mobilecard.shenzhenbenwo.com/api/v2/indexs",success:function(n){e.list=n.data.data.res,console.log(n.data.data.res)}})}}};e.default=t}).call(this,t("f266")["default"])},"5a2a":function(n,e,t){"use strict";t.r(e);var a=t("df83"),i=t("8e50");for(var u in i)"default"!==u&&function(n){t.d(e,n,(function(){return i[n]}))}(u);t("916c");var o,r=t("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"a5d662e4",null,!1,a["a"],o);e["default"]=c.exports},"8e50":function(n,e,t){"use strict";t.r(e);var a=t("4d4d"),i=t.n(a);for(var u in a)"default"!==u&&function(n){t.d(e,n,(function(){return a[n]}))}(u);e["default"]=i.a},"916c":function(n,e,t){"use strict";var a=t("bd34"),i=t.n(a);i.a},b4a6:function(n,e,t){"use strict";(function(n,e){t("d312");i(t("66fd"));var a=i(t("5a2a"));function i(n){return n&&n.__esModule?n:{default:n}}n.__webpack_require_UNI_MP_PLUGIN__=t,e(a.default)}).call(this,t("f266")["default"],t("f266")["createPage"])},bd34:function(n,e,t){},df83:function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return a}));var a={uniRate:function(){return t.e("uni_modules/uni-rate/components/uni-rate/uni-rate").then(t.bind(null,"dc4f"))}},i=function(){var n=this,e=n.$createElement;n._self._c},u=[]}},[["b4a6","common/runtime","common/vendor"]]]);