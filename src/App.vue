<template>
	<!--<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="renderer" content="webkit">-->
	
  <div id="app">
    <router-link to="/login">去注册</router-link>
    <router-link to="">去登陆</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
//  HelloWorld
  }
}
</script>

<style>
	
</style>
