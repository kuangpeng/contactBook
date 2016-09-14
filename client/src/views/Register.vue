<template>
	<div class="reg_wrap">
		<validator name="validation_reg">
			<label>
				<span>注册帐号：</span>
				<input type="text" name="userName"
				       initial="off"
				       detect-change="on"
				       detect-blur="off"
				       v-validate:username="{required:true, minlength:6, maxlength: 30,pattern: '/^[a-zA-Z0-9_]+$/'}"/>
			</label>
			<p class="validTip" v-if="$validation_reg.username.required">帐号不能为空</p>
			<p class="validTip" v-if="!$validation_reg.userpass.required&&$validation_reg.username.minlength">帐号长度太短</p>
			<p class="validTip" v-if="$validation_reg.username.maxlength">帐号长度太长</p>

			<label>
				<span>注册密码：</span>
				<input type="password" name="pass"
				       initial="off"
				       detect-change="on"
				       detect-blur="off"
				       v-validate:userpass="{required:true, minlength:6, maxlength: 30}" />
			</label>
			<label>
				<span>确认密码：</span>
				<input type="password" name="repass"
				       initial="off"
				       detect-change="on"
				       detect-blur="off"
				       v-validate:userpass="{required:true, minlength:6, maxlength: 30}"
						@change="checkPass"/>
			</label>
			<p class="validTip" v-if="$validation_reg.userpass.required">密码不能为空</p>
			<p class="validTip" v-if="!$validation_reg.userpass.required&&$validation_reg.userpass.minlength">密码长度太短</p>
			<p class="validTip" v-if="$validation_reg.userpass.maxlength">密码长度太长</p>
			<input type="submit" value="注册" @click="regRequest"/>
		</validator>
	</div>

</template>

<script>
	import config from "../config.js"
	export default{
		name: "Register",
		data(){
			return{

			}
		},
		created(){
		},
		methods:{
			checkPass(){
				let pass = $("input[name='pass']").val();
				let repass = $("input[name='repass']").val();

				if(pass !== repass){
					alert("请输入相同的密码");
					return false;
				}
			},
			regRequest(){
				var _this = this;
				this.$validate(true, function(){
					if (_this.$validation_reg.valid) {
						var param_reg = {
							userName: $("input[name='userName']").val(),
							password: $("input[name='pass']").val()
						};
						_this.$http.post(config.domain + "/register", param_reg, {emulateJSON: true}).then(function(response){
							if(response.data.code == "0"){
								alert("注册成功");
							}
							else{
								alert(response.data.msg||"注册失败，请稍候重试");
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
.reg_wrap{
	padding: 100px 50px;
}
.reg_wrap label{
	display: block;
	width: 80%;
}
.reg_wrap label input{
	border: 1px solid #ccc;
	border-radius: 4px;
	height: 30px;
	line-height: 30px;
	font-size: 14px;
	padding: 0 5px;
}
.reg_wrap .validTip{
	color: #bf4055;
	padding: 5px;
}
.reg_wrap input[type="submit"]{
	background: #dddddd;
	padding: 5px 10px;
	border-radius: 3px;
	margin-top: 10px;
	font-size: 14px;
}
</style>