<template>
  <div class="bottom-bar">
	  <tabbar>
		  <tabbar-item link="javascript:;" selected>
			  <i slot="icon" class="iconfont icon-friendfill"></i>
			  <span slot="label">列表</span>
		  </tabbar-item>
		  <tabbar-item link="javascript:;">
			  <i slot="icon" class="iconfont icon-profilefill"></i>
			  <span slot="label">我</span>
		  </tabbar-item>
	  </tabbar>
    <!--<ul>
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
    </ul>-->
  </div>
</template>

<script>
import {Tabbar, TabbarItem} from 'vux/src/components/tabbar'
export default{
	name: 'BottomBar',
	components: {
		Tabbar,
		TabbarItem
	}
}
</script>

<style>
  .bottom-bar{
    position: absolute;
    z-index: 100;
    box-sizing: border-box;
    width: 100%;
    left: 0;
    bottom: 0;
    background: #c1c1c1;
    border-bottom: 1px solid #ccc;
  }
  .weui_tabbar_icon{
	  color: #888;
  }
  .weui_bar_item_on .weui_tabbar_icon{
	  color: #09BB07;
  }
  /*.bottom-bar ul li{
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
  }*/
</style>
