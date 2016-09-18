<template>
  <div class="cblist" :class="{ loading: !items.length }">
    <ul>
      <contact-book-item
        v-for="item in items"
        :user="item"
      >
      </contact-book-item>
    </ul>
  </div>
</template>

<script>
	import store from '../../store'
	import Index from '../../views/Index.vue'
	import ContactBookItem from './ContactBookItem.vue'
	export default{
		name: 'ContactBookView',
		components: {
			ContactBookItem
		},
		data (){
			return{
				items: []
			}
		},
		ready(){
			var _this = this;
			store.getContactBookListByPage(this.$route.params.page).then(function(users){
				var items = [];
				if(users.ok){
					users = users.json();
				}
				if(users.code == "0"){
					items = users.info.list;
					if(items.length >0){
						for(let i=0; i<items.length; i++){
							items[i].id = items[i]._id;
						}
					}
				}
				else{
					alert(users.msg);
				}

				for(let i=0; i<items.length; i++){
					_this.items.push(items[i]);
				}

			});
		}
	}
</script>