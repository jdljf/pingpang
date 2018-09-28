<template>
	<div>
		<div class="form-group">
			<span>账号</span>
			<input v-model="form.userNo" type="text" name="" id="" />
		</div>
		<div class="form-group">
			<span>昵称</span>
			<input v-model="form.userName" type="text" name="" id="" />
		</div>
		<div class="form-group">
			<span>密码</span>
		  <input v-model="form.userPassword" type="" name="" id="" value="" />	
		</div>	
		<div class="btn-group" role="group" aria-label="...">
			<button @click="denglu" type="button" class="btn btn-default">注册</button>
		</div>
	</div>
</template>

<script>
import axios from 'axios'	
	
export default {
  name: 'HelloWorld',
  mounted() {  	
		this.denglu();
  },
  data () {
    return {
    	form: {
	    	userNo: '',
	      userName: '',
	      userPassword: '',
    	}
    }
  },
  methods: {
  	denglu () {
			var that = this;
			axios.get('/user', {
		    params: this.form
		  })
			.then(function (res) {
				if (res.code == 200) {
					alert(res.msg);
				}
				else if (res.code == 201) {
					alert(res.msg);
				}
				else if (res.code == 900) {
					alert(res.msg);
				}
			})
			.catch(function (res) {
				
			})
		}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
