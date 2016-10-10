<template>
	<div class="reg_wrap">
		<div class="header">
			<top-bar v-bind:title="title"></top-bar>
		</div>

		<group title="" title-color="red" v-ref:tip_username>
			<x-input type="text" title="注册帐号" name="userName" placeholder="注册帐号,6~30位数字和字母" :min="6" :max="30" v-ref:input_username></x-input>
		</group>

		<group title="" title-color="red" v-ref:tip_password>
			<x-input type="password" title="注册密码" name="password" placeholder="注册密码,6~30位字符" :min="6" :max="30" v-ref:input_password></x-input>
		</group>

		<group title="" title-color="red" v-ref:tip_repassword>
			<x-input type="password" title="确认密码" name="repass" placeholder="确认密码,6~30位字符" :min="6" :max="30" v-ref:input_repass @change="checkPass"></x-input>
		</group>

		<div class="btn_group">
			<x-button type="primary" @click="regRequest">注册</x-button>
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
	import config from "../config.js"
	export default{
		name: "Register",
		components:{
			XHeader,
			XInput,
			XButton,
			Group,
			Toast,
			TopBar
		},
		data(){
			return{
				title: "用户注册"
			}
		},
		created(){
		},
		methods:{
			checkPass(){
				let pass = $("input[name='pass']").val();
				let repass = $("input[name='repass']").val();

				if(pass !== repass){
					_this.$refs.tip_repassword.title = "请输入相同的密码";
					return false;
				}
			},
			regRequest(){
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

				if(!_this.$refs.input_repass.valid){
					_this.$refs.tip_repassword.title = "确认密码格式错误，请重新填写";
					return false;
				}
				else{
					if(_this.$refs.input_repass.value != _this.$refs.input_password.value){
						_this.$refs.tip_repassword.title = "2次密码输入不一致，请重新填写";
					}
					else{
						_this.$refs.tip_repassword.title = "";
					}
				}

				var param_reg = {
					userName: _this.$refs.input_username.value,
					password: _this.$refs.input_password.value,
					repassword: _this.$refs.input_repassword.value
				};

				_this.$http.post(config.domain + "/register", param_reg, {emulateJSON: true}).then(function(response){
					if(response.data.code == "0"){

						_this.$refs.toast_tips.text = "注册成功";
						_this.$refs.toast_tips.show = true;

						setTimeout(function(){
							_this.$router.go({name:'index'});
						}, 2000);
					}
					else{
						_this.$refs.toast_tips.text = response.data.msg||"注册失败，请稍候重试";
						_this.$refs.toast_tips.show = true;

						setTimeout(function(){
							_this.$refs.toast_tips.show = false;
						}, 2000);
					}

				}, function(response){
					console.log(response);
				});

			}
		}
	}
</script>

<style>

</style>