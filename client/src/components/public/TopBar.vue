<template>
 <!-- <div class="top-bar">
    <a href="javascript:window.history.go(-1);" class="btn-back">&lt;</a>
    <h3 class="top-title">{{title}}</h3>
	  <a href="javascript:;"></a>
  </div>-->
<div class="top-bar">
	<x-header :title="title" :left-options="{showBack:true,backText:''}" :right-options="{showMore: true}" @on-click-more="showMenus = true"></x-header>

	<action-sheet :menus="menus" :show.sync="showMenus" @on-click-menu="actionSheetJump" show-cancel></action-sheet>
</div>
</template>

<script>
	import XHeader from 'vux/src/components/x-header'
	import ActionSheet  from 'vux/src/components/actionsheet'
	export default
	{
	    name: 'TopBar',
		components: {
			XHeader,
			ActionSheet
		},
	    props:{
	      title: String
	    },
		data(){
			return{
				menus: {
					search: "查找",
					menu2: "default"
				},
				showMenus: false
			}
		},
		methods: {
			actionSheetJump(key, val){
				if(key == "search"){
					this.$router.go({name: 'search'});
				}
			}
		}
	}
</script>

<style>
  .top-bar{
    position: absolute;
    z-index: 600;
    box-sizing: border-box;
    width: 100%;
    left: 0;
    top: 0;
    background: #fff;
    border-bottom: 1px solid #ccc;
  }
  /* .top-bar a.btn-back{
	 position: absolute;
	 top: 3px;
	 left: 5px;
	 padding: 1px 5px;
	 border:1px solid #ccc;
	 border-radius: 100%;
   }
   .top-bar .top-title{
	 text-align: center;
   }*/
</style>
