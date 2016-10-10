<template>
	<div class="login_wrap">
		<div class="header">
			<top-bar v-bind:title="title"></top-bar>
		</div>


		<group title="" title-color="red" v-ref:tip_username>
			<x-input type="text" title="帐号" name="userName" placeholder="帐号,6~30位数字和字母" :min="6" :max="30" v-ref:input_username></x-input>
		</group>

		<group title="" title-color="red" v-ref:tip_password>
			<x-input type="password" title="密码" name="password" placeholder="密码,6~30位字符" :min="6" :max="30" v-ref:input_password></x-input>
		</group>
		<br/>

		<div class="btn_group">
			<x-button type="primary" @click="loginRequest">登录</x-button>
		</div>

		<toast v-ref:toast_tips type="text"></toast>
	</div>
</template>

<script>
	import XHeader from "vux/src/components/x-header"
	import XInput from "vux/src/components/x-input"
	import XButton from "vux/src/components/x-button"
	import Group from "vux/src/components/group"
	import Toast from "vux/src/components/toast"

	import TopBar from '../components/public/TopBar.vue'
	import {setUser, setAk} from "../vuex/actions"
	import config from "../config.js"
	export default{
		name: "Login",
		components:{
			XHeader,
			XInput,
			XButton,
			Group,
			Toast,
			TopBar
		},
		data(){
			return {
				title: "用户登录"
			}
		},
		methods:{
			loginRequest(){
				var _this = this;
				var userNameRex = new RegExp("^[a-zA-Z0-9_]+$");

				if(!_this.$refs.input_username.valid){
					_this.$refs.tip_username.title = "帐号格式错误，请重新填写";
					return false;
				}
				else{
					if(!userNameRex.test(_this.$refs.input_username.value)){
						_this.$refs.tip_username.title = "帐号格式错误，请重新填写";
						return false;
					}
					_this.$refs.tip_username.title = "";
				}

				if(!_this.$refs.input_password.valid){
					_this.$refs.tip_password.title = "密码格式错误，请重新填写";
					return false;
				}
				else{
					_this.$refs.tip_password.title = "";
				}

				var param_login = {
					userName: _this.$refs.input_username.value,
					password: _this.$refs.input_password.value
				};
				_this.$http.post(config.domain + "/login", param_login, {emulateJSON: true}).then(function(response){
					if(response.data.code == "0"){
						_this.setUser(response.data.info.name);
						_this.setAk(response.data.info.ak);

						_this.$refs.toast_tips.text = "登录成功";
						_this.$refs.toast_tips.show = true;

						setTimeout(function(){
							_this.$router.go({name:'index'});
						}, 2000);
					}
					else{
						_this.$refs.toast_tips.text = response.data.msg||"登录失败，请稍候重试";
						_this.$refs.toast_tips.show = true;

						setTimeout(function(){
							_this.$refs.toast_tips.show = false;
						}, 2000);
					}

				}, function(response){
					console.log(response);
				});
			}
		},
		vuex:{
			actions:{
				setUser,
				setAk
			}
		}
	}
</script>

<style>
.login_wrap{
}
.login_wrap .header{
	width: 100%;
	top: 0;
	left: 0;
}
.btn_group{
	margin-top: 15px;
	padding: 0 15px;
}
</style>