<template>
	<view class="content">
		<view class="banner">
			<image class="banner-img" :src="bannerimg"></image>
		</view>

		<view class="home_menu">
			<view v-for="(a_item,a_index) in lists" :key="a_index" @click="link(a_item.link)">
				<view>
					<image :src="a_item.img" mode=""></image>
				</view>
				<text>{{a_item.name}}</text>
			</view>
		</view>



		<view class="home_con">
			<view class="con_row1">
				商品口碑<span>4.99 高</span>
				<uni-rate v-model="rateValue" @change="onChange(e)" activeColor="red" />
			</view>
			<view class="con_row2" v-for="(a_item,a_index) in list" :key="a_index">
				<image :src="a_item.image" mode=""></image>
				<view>
					<h1>{{a_item.store_name}}</h1>
					<p>月租：{{a_item.Monthlyrent}}元</p>
					<p>流量：{{a_item.flow}}</p>
					<p>语音：{{a_item.voicet}}</p>
					<p>优惠：{{a_item.Discount}}</p>
					<button @click="skip(a_item.id,a_item.price,a_item.recommend_image)">立即办理</button>
				</view>
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				bannerimg: '/static/banner.png',
				rateValue: 0,
				list: [],
				lists: [{
					name: '流量卡',
					img: '../../static/ka.png',
					link: '/pages/home/home'
				}, {
					name: '在线客服',
					img: '../../static/kefu.png',
					link: '/pages/kefu/kefu'
				}, {
					name: '订单查询',
					img: '../../static/dingdan.png',
					link: '/pages/order/order'
				}]
			}
		},
		onLoad() {
			// 模拟动态赋值
			setTimeout(() => {
				this.rateValue = 5
			}, 10)
			this.sendReq();
		},
		methods: {
			link(e) {
				console.log(e)
				uni.switchTab({
					url: "" + e
				});
			},
			skip(id,price,recommend_image) {
				
				let content = {
					id: id,
					price: price,
					recommend_image:recommend_image
				}

				uni.navigateTo({
					url: '/pages/handle/handle?content='+ JSON.stringify(content)

				});
			},
			onChange(e) {
				console.log('rate发生改变:' + JSON.stringify(e))
				// console.log(this.rateValue);
			},
			sendReq() {
				let that = this
				uni.request({
					url: "https://mobilecard.shenzhenbenwo.com/api/v2/indexs",
					success(res) {
						that.list = res.data.data.res;
						console.log(res.data.data.res) //打印一下我们回调函数传过来的值
					}
				})

			}

		}
	}
</script>

<style lang="scss" scoped>
	.content{
		height: 100%;
		min-height: 100vh;
		background-color: #f1f1f1;
	}

	.banner {
		background: #fff;

		.banner-img {
			width: 100%;
			height: 18vh;

		}
	}

	.home_menu {
		width: 100%;
		display: flex;
		justify-content: space-around;
		background-color: #fff;

		view {
			width: 33.333%;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 15rpx;
			margin-bottom: 25rpx;

			view {
				display: flex;
				width: 100rpx;
				height: 100rpx;
				justify-content: center;
				align-items: center;
				border-radius: 20rpx;
				background: #e7eefe;

				image {
					width: 60rpx;
					height: 60rpx;
					position: absolute;

				}

				text {
					margin-top: 10rpx;
				}
			}

		}
	}

	.home_con {
		background: #fff;
		margin: 30rpx 0;
		padding: 0 30rpx;

		.con_row1 {
			display: flex;
			font-size: 14px;
			align-items: center;
			padding-top: 20rpx;

			span {
				color: red;
				margin: 0 10rpx;
			}
		}

		.con_row2 {
			width: 100%;
			display: flex;
			padding: 40rpx 0;
			border-bottom: 1px solid #f2f2f2;

			image {
				width: 300rpx;
				height: auto;
				// height: 300rpx;
				border-radius: 20rpx;
			}

			view {
				width: auto;
				margin-left: 20rpx;

				h1 {
					font-size: 18px;
				}

				p {
					font-size: 14px;
					margin-top: 10rpx;
				}

				button {
					width: 200rpx;
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
			}
		}
	}
</style>
