<template>

	<view class="content">
		<image class="handle_banner" :src="date.recommend_image" mode=""></image>

		<view class="handle_con">
			<h1>
				收件信息：
			</h1>
			<!-- 
				<form @submit="formSubmit" @reset="formReset">
				<view class="uni-form-item uni-column">
					<view class="title">身份证姓名</view>
					<input class="uni-input" name="nickname" placeholder="系统已加密,请放心填写" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">身份证号码</view>
					<input class="uni-input" name="nickname" placeholder="系统已加密,请放心填写" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">收货人</view>
					<input class="uni-input" name="nickname" placeholder="请输入收货人" />
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">收货号码</view>
					<input class="uni-input" name="nickname" placeholder="请输入联系电话人" />
				</view>
				<view class="list">
				<span>地址：</span>
				<pickerAddress @change="cityChange"><span>{{cityTitle}}</span></pickerAddress>
			</view>

				<view class="uni-form-item uni-column">
					<view class="title">详细地址</view>
					<input class="uni-input" name="nickname" placeholder="请输入详细地址" />
				</view>

			</form> -->

			<uni-forms ref="form" :modelValue="formData" :rules="rules" style="margin-top: 30rpx;padding: 20rpx;">
				<uni-forms-item label="身份证姓名" name="id_name">
					<uni-easyinput :inputBorder="false" type="text" v-model="formData.id_name"
						placeholder="系统已加密,请放心填写" />
				</uni-forms-item>
				<uni-forms-item label="身份证号码" name="id_num">
					<uni-easyinput :inputBorder="false" type="text" v-model="formData.id_num"
						placeholder="系统已加密,请放心填写" />
				</uni-forms-item>
				<uni-forms-item label="收货人" name="name">
					<uni-easyinput :inputBorder="false" type="text" v-model="formData.name" placeholder="请输入收货人" />
				</uni-forms-item>
				<uni-forms-item label="收货号码" name="mob">
					<uni-easyinput :inputBorder="false" type="text" v-model="formData.mob" placeholder="请输入联系电话人" />
				</uni-forms-item>
				<uni-forms-item label="地址" name="cityTitle">
					<pickerAddress @change="cityChange" v-model="formData.cityTitle"><span
							style="line-height: 72rpx;font-size: 14px;padding-left: 20rpx;">{{formData.cityTitle}}</span>
					</pickerAddress>
				</uni-forms-item>
				<uni-forms-item label="详细地址" name="add">
					<uni-easyinput :inputBorder="false" type="text" v-model="formData.add" placeholder="请输入详细地址" />
				</uni-forms-item>
			</uni-forms>

		</view>


		<p class="handle_tisi"><span>*</span>订单提交后，请务必截图保存，根据页面提示，可以查询订单审核进度及物流信息（云南，新疆，西藏不发货）</p>


		<view class="handle_dd">
			<view>
				福利价: <span>￥{{date.price}}</span>
			</view>
			<view class="button" @click="submit">提交订单</view>
		</view>

	</view>
</template>

<script>
	import pickerAddress from '../../city/city.vue'
	export default {
		data() {
			return {
				uid: '',
				date: {
					recommend_image: '',
					price: '',
					id: '',
				},
				formData: {
					id_name: '',
					id_num: '',
					name: '',
					mob: '',
					add: '',
					cityTitle: '点击选择所在市区',
				},
				rules: {
					// 对name字段进行必填验证
					id_name: {
						rules: [{
								required: true,
								errorMessage: '请输入身份证姓名',
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
									let iphoneReg = (/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/);
									if (!iphoneReg.test(value)) {
										callback('身份证格式不正确，请重新填写')
									}
								}
							}
						]
					},
					name: {
						rules: [{
								required: true,
								errorMessage: '请输入收货人',
							}
						]
					},
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
							// {
								
								
							// 	validateFunction: function(rule, value, data, callback) {
							// 		let iphoneReg = (/^(13[0-9]|14[1579]|15[0-3,5-9]|16[6]|17[0123456789]|18[0-9]|19[89])\d{8}$/);
							// 		if (!iphoneReg.test(value)) {
							// 		errorMessage('手机号码格式不正确，请重新填写')
							// 		}
							// 	}
							// }
						]
					},
					add: {
						rules: [{
								required: true,
								errorMessage: '请输入详细地址',
							}
						]
					},
					cityTitle: {
						rules: [{
								required: true,
								errorMessage: '点击选择所在市区',
							}
						]

					}

				}

			}
		},
		onLoad(val) {
			console.log(JSON.parse(val.content))
			this.date = JSON.parse(val.content);
			console.log(this.date.price)
			this.id = this.date.id;
		},
		methods: {
			cityChange(data) {
				//城市选择
				this.formData.cityTitle = data.data.join('-')
				console.log(this.formData.cityTitle)
				//把获取到的值赋值给  this.cityForm.city

			},
			submit() {
				var that = this
				uni.login({
					provider: 'toutiao', //这里服务商名是字节跳动小程序 所以填toutiao
					success: function(loginRes) {
						uni.request({
							url: 'https://mobilecard.shenzhenbenwo.com/api/douyin/douyin_auth',
							method: 'POST',
							header: {
								'Content-Type': 'application/x-www-form-urlencoded',
							},
							data: {
								'anonymous_code': loginRes.anonymousCode,
								'code': loginRes.code,
							},
							success: (res) => {
								that.uid = res.data.data.data.id
								that.$refs.form.validate().then(res => {
									console.log('111', that.uid)
									uni.request({
										header: {
											'Content-Type': 'application/x-www-form-urlencoded'
										},
										url: 'https://mobilecard.shenzhenbenwo.com/api/v2/index/createOrder/' + that.id,
										method: 'POST',
										data: {
											'address': that.$refs.form.formData.cityTitle, //地址
											'real_name': that.$refs.form.formData.name, //真实姓名
											'ConsigneeName': that.$refs.form.formData.name, //收货人姓名
											'phone': that.$refs.form.formData.mob, //电话
											'idCard': that.$refs.form.formData.id_num, //身份证号码
											'DetailedAddress': that.$refs.form.formData.add, //详细地址
											'id': that.uid,
										},
										dataType: 'json',
										success: (res) => {
											if (res.data.status == '400') {
												uni.showToast({
													title: res.data.msg,
													duration: 1000,
												});
											} else {
												uni.requestPayment({
													provider: 'toutiao',
													orderInfo: {
														"order_id": res.data.data.data.order_id,
														"order_token": res.data.data.data.order_token,
													},
													_debug: 1,
													payChannel: {
														default_pay_channel: 'alipay'
													},
													service: 5,
													getOrderStatus(res) {
														let {out_order_no} = res;
														return new Promise(
															function(resolve,reject) {

															})
													},
													success(res) {
														if (res.code == 0) {
															console.log('成功')

															console.log(res);
														}
													},
													fail(res) {
														console.log('失败')

														console.log(res);
														// 调起收银台失败处理逻辑
													},
												});

											}


										}
									});

								}).catch(err => {
									console.log('表单错误信息：', err);
								})

							},
							fail: () => {}
						});

					},
					fail: function(res) {
						console.log(res);
					}
				});


			}
		},
		components: {
			pickerAddress
		},

	}
</script>

<style lang="scss" scoped>
	.content {
		height: 100%;
		min-height: 100vh;
		background-color: #f1f1f1;
	}

	.handle_banner {
		width: 100%;
		height: 68vh;
	}

	.handle_con {
		// width: 100%;
		margin-top: 30rpx;
		background: #fff;
		padding: 20rpx 30rpx;

		h1 {
			font-size: 18px;
		}

	}

	.handle_tisi {
		padding: 20rpx 30rpx;
		font-size: 14px;
		font-weight: 600;
		padding-bottom: 130rpx;

		span {
			color: red;
		}
	}


	.handle_dd {
		width: 100%;
		background: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		bottom: 0;

		view {
			margin-left: 20rpx;
			font-size: 14px;
			color: #000;

			span {
				color: red;
				font-size: 20px;
			}
		}

		.button {
			background: red;
			border-radius: 0px;
			color: #fff;
			font-size: 14px;
			padding: 30rpx 35rpx;
		}

	}
</style>
