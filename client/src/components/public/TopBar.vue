<template>
<div class="top-bar">
	<x-header :title="title" :left-options="leftOptions" :right-options="rightOptions" :transition="headerTransition" @on-click-more="showMenus = true"></x-header>

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
	        title: String,
		    leftOptions: {
			    type: Object,
			    default () {
				    return {
					    showBack: true,
					    backText: '<',
					    preventGoBack: false
				    }
			    }
		    },
		    rightOptions: {
			    type: Object,
			    default () {
				    return {
					    showMore: false
				    }
			    }
		    }
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
		computed: {
			leftOptions () {
				return {
					showBack: this.$route.path !== '/'
				}
			},
			headerTransition () {
				return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
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
    z-index: 200;
    box-sizing: border-box;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #ccc;
  }
</style>
