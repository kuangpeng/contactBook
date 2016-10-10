<template>

<div class="loadingPage">
	<div class="action">
		<x-button type="primary" :text="btn_login_text" @click="toLogin"></x-button>
		<x-button type="warn" :text="btn_reg_text" @click="toReg"></x-button>
	</div>
</div>

</template>

<script>
	import "vux/src/styles/center.less"
	import XButton from 'vux/src/components/x-button'
export default {
	name: "Home",
	components:{
		XButton
	},
	data(){
		return{
			btn_login_text: '登录',
			btn_reg_text: '注册'
		}
	},
	methods:{
		toLogin(){
			this.$router.go({name:'login'});
		},
		toReg(){
			this.$router.go({name:'register'});
		}
	}
}
</script>
<style>
.loadingPage{
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background: url("../assets/images/home_bg.jpg") no-repeat center;

	background-size: cover;
}
.loadingPage .action{
	width: 50%;
	position: fixed;
	left: 25%;
	bottom: 30px;
}

</style>