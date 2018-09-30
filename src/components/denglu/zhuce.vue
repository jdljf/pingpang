<template>
	<div>
		<form class="form-horizontal">
			<div class="form-group ">
				<label for="zhanghao" class="col-sm-2 control-label">用户账号:</label>
				<div class="col-sm-4">
					<input v-model="form.userNo" type="text" class="form-control" id="zhanghao" placeholder="请输入用户账号">				
				</div>
			</div>
			<div class="form-group ">
				<label for="yonghuming" class="col-sm-2 control-label">用户名:</label>
				<div class="col-sm-4">
					<input v-model="form.userName" type="text" class="form-control" id="yonghuming" placeholder="请输入用户名">				
				</div>
			</div>
			<div class="form-group">
				<label for="youxiang" class="col-sm-2 control-label">邮箱:</label>
				<div class="col-sm-4">
					<input v-model="form.email" type="email" class="form-control" id="youxiang" placeholder="请输入邮箱地址">
				</div>
			</div>
			<div class="form-group">
				<label for="mima" class="col-sm-2 control-label">密码:</label>
				<div class="col-sm-4">
					<input v-model="password" type="password" class="form-control" id="mima" placeholder="请输入密码">
				</div>
			</div>
			<div class="form-group">
				<label for="querenmima" class="col-sm-2 control-label">确认密码:</label>
				<div class="col-sm-4">
					<input v-model="form.password" type="password" class="form-control" id="querenmima" placeholder="请输入确认密码">
				</div>
			</div>
		</form>
		
		<!-- <div class="btn-group" role="group" aria-label="..."> -->
			<button @click="zhuce" id="zhuce" type="button" class="btn btn-primary btn-block"
					data-loading-text="loading..." >注册</button>
		<!-- </div> -->
	</div>
</template>

<script>

	
export default {
  name: 'zhuce',
  mounted() {
  },
  data () {
    return {
			password: '',
    	form: {
	    	userNo: '',
				userName: '',
				email: '',
	      password: '',
    	}
    }
  },
  methods: {
	yijingzhuce () {
		var that = this;

		this.axios.get('/user/qurery', {
			params: this.form.userNo
		})
		.then(function (res) {
			if (res.code == 200) {

			}
		})
		.catch(function (res) {

		})
	},
	zhuce () {
		$('#denglu').button('loading');
		var that = this;

		if (this.form.userNo.trim().length < 1) {
			$('#denglu').button('reset');
			alert('请输入账号');
			return;
		}
		if (this.form.userName.trim().length < 1) {
			$('#denglu').button('reset');
			alert('请输入用户名');
			return;
		}
		if (this.form.email.trim().length < 1) {
			$('#denglu').button('reset');
			alert('请输入邮箱');
			return;
		}
		else {
			var reg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
			if (!reg.test(this.form.email)) {
				$('#denglu').button('reset');
				alert('请输入正确邮箱');
				return;
			}
		}
		if (this.password.trim().length < 1) {
			$('#denglu').button('reset');
			alert('请输入密码');
			return;
		}
		else {
			var reg = /^[a-zA-Z]\w{5,17}$/;
			if (!reg.test(this.password)) {
				$('#denglu').button('reset');
				alert('密码长度要在6~18位之间，且必须以字母开头');
				return;
			}
		}
		if (this.form.password.trim().length < 1) {
			$('#denglu').button('reset');
			alert('请输入确认密码');
			return;
		}
		else {
			var reg = /^[a-zA-Z]\w{5,17}$/;
			if (!reg.test(this.password)) {
				$('#denglu').button('reset');
				alert('确认密码长度要在6~18位之间，且必须以字母开头');
				return;
			}
		}
		if (this.form.password !== this.password) {
			$('#denglu').button('reset');
			alert('两次密码输入不一致');
			return;
		}
		
		this.axios.get('/register', {
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
