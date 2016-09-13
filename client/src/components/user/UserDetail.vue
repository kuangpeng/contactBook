<template>
  <div class="main-body">
    <div class="userInfo">
      <div class="u-header">
        <div class="ava">
          <img v-bind:src="user.avatar"/>
          <p>{{user.name}}</p>
        </div>
      </div>
      <div class="u-body">
        <div class="info">
          <p>{{user.text}}</p>
          <p>性别：{{user.sex|sexFilter}}</p>
          <p>地址：{{user.location}}</p>
          <p>手机：{{user.phone}}</p>
        </div>
      </div>
      <div class="u-footer">
        <div class="btns">
          <a v-link="{name: 'talk', params:{userId:user._id} }">talk</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'userDetail',
    components: {
    },
    props:{
	   user: Object
    },
    filters: {
      sexFilter(sex){
        if (sex == "1") {
          return "男";
        }
        else if (sex == "0") {
          return "女";
        }
      }
    }
  }
</script>

<style>
  .userInfo .u-header {
    padding-bottom: 30px;
    position: relative;
    border-bottom: 1px solid #ccc;
    background: #fcf8e3;
  }
  .userInfo .u-header .ava {
    width: 90%;
    margin: 0 auto;
    padding-top: 20px;
    text-align: center;
  }
  .userInfo .u-header .ava img {
    width: 60px;
    height: 60px;
    border-radius: 100%;
  }
  .userInfo .u-header .ava p {
    line-height: 20px;
    font-size: 15px;
  }
  .userInfo .u-body {
    padding: 10px;
    height: auto !important;
    height: 300px;
    min-height: 300px;
  }
  .userInfo .u-body .info {
    line-height: 20px;
  }
</style>
