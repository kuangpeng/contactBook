<template>
  <li class="item">
    <a v-link="{name:'user',params:{userId:user.id}}">
      <div class="avatar">
        <img v-bind:src="user.avatar" />
      </div>
      <h4 class="name">{{user.name}}</h4>
      <p class="desc">{{user.text}}</p>
    </a>
  </li>
</template>

<script>
	export default{
    name: 'ContactBookItem',
    props:{
      user: Object
    }
  }
</script>

<style>
  li.item{
    position: relative;
    border-bottom: 1px solid #ccc;

  }
  li.item>a{
    display: block;
    padding: 10px 10px 10px 70px;
  }
  li.item .avatar{
    position: absolute;
    width: 50px;
    height: 50px;
    left: 10px;
    top: 10px;
    overflow: hidden;
  }
  li.item .avatar img{
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }
  li.item .name{
    color: #111111;
    margin-top: 5px;
    font-size: 16px;
  }
  li.item .desc{
    color: #dddddd;
    line-height: 20px;
    font-size: 12px;
  }
</style>
