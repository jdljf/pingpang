// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

var router = new VueRouter({
	routes,
});

/*Vue.prototype.$http = axios;*/
/* eslint-disable no-new */
new Vue({
	el: '#app',
	mounted() {
	},
	methods: {
		
	},
	router,
	components: {
		App,
	},
	template: '<App/>'
})