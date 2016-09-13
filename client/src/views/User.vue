<template>
	<top-bar v-bind:title="title"></top-bar>
	<user-detail v-bind:user="user"></user-detail>
</template>

<script>
	import TopBar from '../components/public/TopBar.vue'
	import UserDetail from '../components/user/UserDetail.vue'
	import store from '../store'
	export default{
		name: 'User',
		components: {
			TopBar,
			UserDetail
		},
		data (){
			return {
				user: {},
				title: ''
			}
		},
		route: {
			data ({to}){
				const id = to.params.userId;
				return store.getContactBookItem(id).then(function (user) {
					console.log(user);
					if(user.constructor != Object){
						user = user.json().info;
					}
					var title = user.name + '';
					return {
						user,
						title
					}
				});
			}
		}
	}
</script>

<style>

</style>