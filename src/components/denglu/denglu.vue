<template>
	<div>
		<form class="form-horizontal">
			<div class="form-group ">
				<label for="yonghuming" class="col-sm-2 control-label">用户名:</label>
				<div class="col-sm-4">
					<input v-model="form.userNo" type="text" class="form-control" id="yonghuming" placeholder="请输入用户名">				
				</div>
			</div>
			<div class="form-group">
				<label for="mima" class="col-sm-2 control-label">密码:</label>
				<div class="col-sm-4">
					<input v-model="form.password" type="password" class="form-control" id="mima" placeholder="请输入密码">
				</div>
			</div>
			<div class="col-sm-6">
				<router-link to="/regist" style="float: right;margin: 10px 0;">还没账号，去注册</router-link>
			</div>	
			<!-- <div class="col-sm-6"> -->
				<button @click="denglu" id="denglu"  type="button" class="btn btn-primary btn-block"
						data-loading-text="loading...">登录</button>
			<!-- </div>			 -->
		</form>
		
		
	</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted() {
  },
  data () {
    return {
    	form: {
	    	userNo: '',
	      password: '',
    	}
    }
  },
  methods: {
  	denglu () {
		var that = this;			
		$('#denglu').button('loading')
		if (this.form.userNo.trim().length < 1) {
			$('#denglu').button('reset');
			alert('请输入用户名');
			return;
		}
		if (this.form.password.trim().length < 1) {
			$('#denglu').button('reset');
			alert('请输入密码');
			return;
		}
		else {
			var reg = /^[a-zA-Z]\w{5,17}$/;
			if (!reg.test(this.form.password)) {
				$('#denglu').button('reset');
				alert('密码长度要在6~18位之间，且必须以字母开头');
				return;
			}
		} 

		this.axios.get('/user/login', {
			params: this.form
		})
		.then(function (res) {
			$('#denglu').button('reset');
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
			$('#denglu').button('reset');
		})
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
