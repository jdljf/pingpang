import denglu from '../components/denglu/denglu.vue'
import zhuce from '../components/denglu/zhuce.vue'

var routes = [
    {path: '/', redirect: '/login', name: '登录'},
	{path: '/login', component: denglu, name: '登录'},
	{path: '/regist', component: zhuce, name: '注册'},
];

export default routes;
