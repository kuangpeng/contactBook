<template>
	<div class="index_list">
		<top-bar v-bind:title="title" :right-options="{showMore:true}"></top-bar>

		<div class="main-body">
			<div class="my-scrollbar">
				<contact-book-view></contact-book-view>
			</div>
		</div>

		<bottom-bar></bottom-bar>
	</div>
</template>

<script>
	import TopBar from '../components/public/TopBar.vue'
	import BottomBar from '../components/public/BottomBar.vue'
	import ContactBookView from '../components/contactBook/ContactBookView.vue'
	export default{
		name: 'Index',
		components: {
			TopBar,
			ContactBookView,
			BottomBar
		},
		data (){
			return {
				title: "通讯录"
			}
		},
		created: function(){
		}
	}
</script>

<style>
	.index_list{
		height: 100%;
	}
</style>