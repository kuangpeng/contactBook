<template>

<div class="loadingPage">
	<div class="action">
        <a v-link="{name:'login'}">登录</a>
		<a v-link="{name:'register'}">注册</a>
	</div>
</div>

</template>

<script>
export default {
	name: "Home",
  ready(){
    /*var vt = this;
    setTimeout(function(){
      (vt.$route).router.go({name: 'index', params:{page:1}});
    }, 1000)*/
  }
}
</script>
<style>
.loadingPage{
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	background: url("http://7viibj.com2.z0.glb.qiniucdn.com/16770_17_1473609019109_w1540_h1050_s1494592.jpg?imageView2/1/w/300/h/400/q/90") no-repeat center;
	background-size: 100%;
}
.loadingPage .action{
	position: absolute;
	top: 20%;
	left: 0;
	width: 100%;
	text-align: center;
}
.loadingPage .action a{
	display: block;
	width: 100px;
	padding: 10px 0;
	text-align: center;
	color: #fc8c84;
	background: #fff;
	border: 1px solid #b94a48;
	border-radius: 5px;
	margin: 0 auto;
	margin-bottom: 10px;
}
</style>