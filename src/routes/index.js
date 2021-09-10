import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => {
		if (err.name !== 'NavigationDuplicated') throw err
	})
}

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/home',
		},
		{
			path: '/home',
			component: () => import('@/views/Home.vue'),
		},
		{
			path: '/find/:username',
			component: () => import('@/views/Find.vue'),
		},
		{
			path: '/vuex',
			component: () => import('@/views/VuexPage.vue'),
		},
		{
			path: '/api',
			component: () => import('@/views/ApiCallPage.vue'),
		},
		{
			path: '*',
			component: () => import('@/views/NotFoundPage.vue'),
		},
	],
})
