<template>
	<view class="content">
		<view class="kefu_con">
			<h1>咨询客服</h1>
			<image src="/static/kefu1.jpg" mode=""></image>
			<view class="button">
				<button @click="wx()">点击咨询客服</button>
				<button @click="telFun()">电话客服</button>
			</view>
			<p>电话客服工作时间: 8:30-17:00</p>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				location: 'true',
				url: 'https://work.weixin.qq.com/kfid/kfcec2c82467e0717b3'
			}
		},
		onLoad() {

		},
		methods: {
			wx() {
				window.location.href = this.url;
				console.log(this.url)
			},
			//拨打电话：
			telFun() {
				uni.makePhoneCall({
					phoneNumber: '12345', //电话号码
					success: function(e) {
						console.log(e);
					},
					fail: function(e) {
						console.log(e);
					}
				})
			}
		}

	}
</script>

<style lang="scss" scoped>
	.content {
		height: 100%;
		min-height: 100vh;
		background-color: #000;
	}

	.kefu_con {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		h1 {
			color: #fff;
			font-size: 20px;
			font-weight: bold;
			margin-top: 100rpx;
		}

		image {
			margin-top: 50rpx;
			width: 500rpx;
			height: 500rpx;

		}

		.button {
			width: 100%;
			margin-top: 50rpx;

			button {
				margin-top: 20rpx;
				width: 80%;
				background-color: red;
				color: #fff;
				font-weight: 600;
			}
		}

		p {
			margin-top: 30rpx;
			color: #fff;
			font-weight: 600;
		}

	}
</style>
