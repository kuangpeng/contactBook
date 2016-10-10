<template>
	<div class="searchPage">
		<div class="header">
			<top-bar v-bind:title="title"></top-bar>
		</div>

		<search @on-change="getResult"
		        :auto-fixed="false"
		        :placeholder="placeholder"
		></search>
		<div class="searchResult">
			<template v-for="list in resultList" :class="{ loading: !resultList.length }">
				<panel :header="list.nodeTitle" :list="list.list" :type="list.type"></panel>
			</template>
		</div>
	</div>

</template>

<script>
	import {Search, Panel} from 'vux/src/components/'
	import TopBar from '../components/public/TopBar.vue'

	import store from '../store'

	export default{
		name: "SearchFriend",
		components: {
			Search,
			Panel,
			TopBar
		},
		data(){
			return {
				title: "搜索",
				placeholder: "搜索",
				resultList: [
					/*{
						nodeTitle: "用户",
						type: "1",
						list: [{
							src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
							title: '标题一',
							desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
							url: '/user/1'
						}, {
							src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
							title: '标题二',
							desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
							url: {
								path: '/component/radio',
								replace: false
							}
						}]
					},
					{
						nodeTitle: "用户33",
						type: "3",
						list: [{
							src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
							title: '标题一33',
							desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
							url: '/user/1'
						}, {
							src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
							title: '标题二33',
							desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
							url: {
								path: '/component/radio',
								replace: false
							}
						}]
					}*/
				]
			}
		},
		methods: {
			getResult (val) {
				if(!val){
					return ;
				}

				let _this = this;
				let result = {
					nodeTitle: "用户",
					type: "1",
					list: []
				};

				store.search(val).then(function(response){
					let data = response.data;
					console.log(data);
					if(data.code == "0"){
						if(data.info.list.length>0){
							for(let i=0; i<data.info.list.length; i++ ){
								result.list.push({
									src: data.info.list[i].thumb,
									title: data.info.list[i].name,
									desc: data.info.list[i].desc,
									url: '/user/' + data.info.list[i]._id
								});
							}

							result.type = "1";
						}
					}
					else{
						result.nodeTitle = data.msg || '暂无';
					}

					_this.resultList.splice(0,_this.resultList.length, result);

				});

			}
		}
	}
</script>

<style>
	.searchPage .header{
		height: 47px;
	}
	.weui_media_box img{
		border-radius: 100%;
	}
</style>