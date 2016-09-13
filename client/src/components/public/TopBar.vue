<template>
  <div class="top-bar">
    <a href="javascript:window.history.go(-1);" class="btn-back">&lt;</a>
    <h3 class="top-title">{{title}}</h3>
  </div>
</template>

<script>
	export default
	{
    name: 'TopBar',
    props:{
      title: String
    }
	}
</script>

<style>
  .top-bar{
    position: absolute;
    z-index: 100;
    box-sizing: border-box;
    width: 100%;
    height: 30px;
    left: 0;
    top: 0;
    background: #fff;
    border-bottom: 1px solid #ccc;
  }
  .top-bar a.btn-back{
    position: absolute;
    top: 3px;
    left: 5px;
    padding: 1px 5px;
    border:1px solid #ccc;
    border-radius: 100%;
  }
  .top-bar .top-title{
    text-align: center;
  }
</style>
