<template>
	<div class="login_wrap">
		<validator name="validation_login">
				<p class="tips">{{tip}}</p>
				<label>
					<span>帐号：</span>
					<input type="text" name="userName"
					       initial="off"
					       detect-change="on"
					       detect-blur="off"
					       v-validate:username="{required:true, minlength:6, maxlength: 30,pattern: '/^[a-zA-Z0-9_]+$/'}"/>
				</label>
				<p class="validTip" v-if="$validation_login.username.required">帐号不能为空</p>
				<p class="validTip" v-if="!$validation_login.userpass.required&&$validation_login.username.minlength">帐号长度太短</p>
				<p class="validTip" v-if="$validation_login.username.maxlength">帐号长度太长</p>

				<label>
					<span>密码：</span>
					<input type="password" name="pass"
					       initial="off"
					       detect-change="on"
					       detect-blur="off"
					       v-validate:userpass="{required:true, minlength:6, maxlength: 30}" />
				</label>
				<p class="validTip" v-if="$validation_login.userpass.required">密码不能为空</p>
				<p class="validTip" v-if="!$validation_login.userpass.required&&$validation_login.userpass.minlength">密码长度太短</p>
				<p class="validTip" v-if="$validation_login.userpass.maxlength">密码长度太长</p>
				<input type="submit" value="登录" @click="loginRequest"/>
		</validator>
	</div>

</template>

<script>
	import config from "../config.js"
	export default{
		name: "Login",
		methods:{
			loginRequest(){
				var _this = this;
				this.$validate(true, function(){
					if (_this.$validation_login.valid) {
						var param_login = {
							userName: $("input[name='userName']").val(),
							password: $("input[name='pass']").val()
						};
						_this.$http.post(config.domain + "/login", param_login, {emulateJSON: true}).then(function(response){
							if(response.data.code == "0"){
								alert("登录成功");
							}
							else{
								alert(response.data.msg||"登录失败，请稍候重试");
							}
						}, function(response){
							console.log(response);
						});
					}
				})
			}
		}

	}
</script>

<style>
.login_wrap{
	padding: 100px 50px;
}
.login_wrap label{
	display: block;
	width: 80%;
}
.login_wrap label input{
	border: 1px solid #ccc;
	border-radius: 4px;
	height: 30px;
	line-height: 30px;
	font-size: 14px;
	padding: 0 5px;
}
.login_wrap .validTip{
	color: #bf4055;
	padding: 5px;
}
.login_wrap input[type="submit"]{
	background: #dddddd;
	padding: 5px 10px;
	border-radius: 3px;
	margin-top: 10px;
	font-size: 14px;
}
</style>