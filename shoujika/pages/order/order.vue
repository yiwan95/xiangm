<template>
	<view class="content">
		<view class="order_con" v-if="isshow == 0">
			<uni-forms ref="form" :modelValue="formData" :rules="rules">
				<uni-forms-item label="手机号" name="mob">
					<uni-easyinput :inputBorder="false" v-model="formData.mob" placeholder="请输入手机号" />
				</uni-forms-item>
				<uni-forms-item label="身份证号" name="id_num">
					<uni-easyinput :inputBorder="false" v-model="formData.id_num" placeholder="请输入购卡者身份证号" />
				</uni-forms-item>
			</uni-forms>
			<button @click="submit">查询订单</button>
		</view>


		<view class="Search_con" v-if="isshow == 2">
			<view class="con_top">
				<image :src="list.img" mode=""></image>
				<view>
					<!-- 	<view> -->
					<h1>{{list.store_name}}</h1>
					<!-- </view> -->
					<p>价格：{{list.price}}￥</p>
					<p>物流公司：{{list.name}}</p>
					<p>快递单号：{{list.number}}</p>
					<button @click="fanhui">查询其他订单</button>
				</view>
			</view>

			<view class="con_wuliu" v-for="(a_item,a_index) in lists" :key="a_index">
				<view class="time">{{a_item.time}}</view>
				<view class="row">{{a_item.status}}</view>
			</view>
		</view>

		<view class="Search_null_con" v-if="isshow == 1">
			<view>本机下面没有订单</view>
			<button @click="fanhui">更换手机号</button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				isshow: 0,
				list: {
					img: '../../static/con1.png',
					store_name: '电信花花卡',
					price: '9.5',
					name: '圆通快递',
					number: '514641618516165'
				},
				lists: [{
					time: '06-26 13:28',
					status: '正在派件中哈呵呵呵呵呵呵呵哈哈哈哈哈哈哈哈哈哈哈哈哈'
				}],
				formData: {
					mob: '',
					id_num: '',
				},
				rules: {
					mob: {
						rules: [{
								required: true,
								errorMessage: '请填写手机号码',
							},
							{
								validateFunction: function(rule, value, data, callback) {
									let iphoneReg = (
										/^(13[0-9]|14[1579]|15[0-3,5-9]|16[6]|17[0123456789]|18[0-9]|19[89])\d{8}$/
									); //手机号码
									if (!iphoneReg.test(value)) {
										callback('手机号码格式不正确，请重新填写')
									}
								}
							}
						]
					},
					id_num: {
						rules: [{
								required: true,
								errorMessage: '请填写身份证',
							},
							{
								validateFunction: function(rule, value, data, callback) {
									let iphoneReg = (
										/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
									); //
									if (!iphoneReg.test(value)) {
										callback('身份证格式不正确，请重新填写')
									}
								}
							}
						]
					},
				}

			}
		},

		onLoad() {

		},
		methods: {
			fanhui() {
				this.isshow = 0
			},
			submit() {
				this.$refs.form.validate().then(res => {
					console.log('表单数据信息：', res);
					uni.request({
					
						header: {
							'Content-Type': 'application/x-www-form-urlencoded'
						},
						url: 'https://mobilecard.shenzhenbenwo.com/api/v2/index/orderdetail',
						method: 'POST',
						data: {
							'phone': this.$refs.form.formData.mob, //电话
							'idCard': this.$refs.form.formData.id_num, //身份证号码
						},
					
						success: (res) => {
							// console.log(res.data.data.order_id)
							if (res.data.data.order_id !== undefined) {
								this.isshow = 2
								console.log(res.data.data.product_info.cart_info.store_name)
								this.list.name = res.data.data.delivery_name
								this.list.number = res.data.data.delivery_id
								this.list.store_name = res.data.data.product_info.cart_info.store_name
								this.list.price = res.data.data.product_info.cart_info.truePrice
								if(this.list.name == null){
									this.list.name = '商品未发货',
									this.list.number = '暂无'
								}
								uni.request({
					
									header: {
										'Content-Type':'application/x-www-form-urlencoded',
									},
									url: 'https://mobilecard.shenzhenbenwo.com/api/v2/index/express' ,
									//dataType:'jsonp',
									method: 'POST',
									data: {
									     'order_id'	: res.data.data.order_id,	
									},
									
									success: (res) => {
										console.log(res.data.data.result.list)
										this.lists =  res.data.data.result.list
									}
								});
					
					
							} else {
								this.isshow = 1
							}
					
						}
					});
					
				}).catch(err => {
					console.log('表单错误信息：', err);
				})
				
			
			}
		},
	}
</script>

<style lang="scss" scoped>
	// .content {
	// 	height: 100%;
	// 	min-height: 100vh;
	// 	background-color: #f1f1f1;
	// }

	.order_con {
		padding: 0 20rpx;
		padding-top: 50rpx;


		.uni-easyinput__placeholder-class {
			color: #999;
			font-size: 14px;
			font-weight: 500;
		}

		button {
			width: 100%;
			background: #feb302;
			color: #fff;
			margin-top: 20rpx;
			font-weight: 600;
		}

	}

	.Search_con {
		margin-top: 30rpx;
		padding: 0 30rpx;

		.con_top {
			width: 100%;
			display: flex;
			padding-bottom: 30rpx;
			border-bottom: 1px solid #f2f2f2;

			image {
				width: 350rpx;
				height: 300rpx;
				border-radius: 20rpx;
			}

			view {
				width: auto;
				margin-left: 20rpx;

				// view{
				// display: flex;
				// justify-content: space-between;
				button {
					width: 250rpx;
					font-size: 14px;
					line-height: 65rpx;
					background-color: #fe3404;
					border-radius: 65rpx;
					color: #feeae3;
					font-weight: bold;
					margin: 0;
					margin-top: 20rpx;
				}
				button:after{
					border: none;
				}

				h1 {
					font-size: 18px;
				}

				// }



				p {
					font-size: 14px;
					margin-top: 10rpx;
				}


			}


		}


		.con_wuliu {

			display: flex;
			font-size: 14px;
			color: #333;

			.time {
				padding-top: 30rpx;
				width: 30%;
				margin-right: 1%;
				border-right: 1px solid #f2f2f2;
				
			}

			.row {
				margin-left: 1%;
				padding-top: 30rpx;
				width: 68%;
			}
		}
	}

	.Search_null_con {
		display: flex;
		justify-content: center;
		flex-direction: column;

		view {
			text-align: center;
			margin-top: 450rpx;
			margin-bottom: 50rpx;
		}

		button {
			width: 80%;
			background: #feb302;
			color: #fff;
			margin-top: 20rpx;
			font-weight: 600;
			border-radius: 0px;
		}
	}
</style>
