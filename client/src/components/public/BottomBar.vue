<template>
  <div class="bottom-bar">
    <ul>
      <li class="on">
        <a href="#">
          <span class="icon"></span>
          通讯录
        </a>
      </li>
      <li>
        <a href="#">
          <span class="icon"></span>
          我的
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
	export default{
    name: 'BottomBar'
  }
</script>

<style>
  .bottom-bar{
    position: absolute;
    z-index: 100;
    box-sizing: border-box;
    width: 100%;
    height: 30px;
    left: 0;
    bottom: 0;
    background: #c1c1c1;
    border-bottom: 1px solid #ccc;
  }
  .bottom-bar ul li{
    width: 50%;
    float: left;
  }
  .bottom-bar ul li a{
    display: block;
    height: 30px;
    text-align: center;
  }
  .bottom-bar ul li.on{
    background: #f2dede;
  }
</style>
