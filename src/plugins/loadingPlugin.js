import CircleLoading from '@/components/common/CircleLoading.vue'
import BlinkLoading from '@/components/common/BlinkLoading.vue'

export default {
	install(Vue) {
		Vue.mixin({
			data() {
				return {
					localLoading: false,
				}
			},
			methods: {
				setLoading(flag) {
					this.localLoading = flag
				},
				async fetchData(fetchFunction) {
					try {
						this.setLoading(true)
						await fetchFunction()
					} catch (error) {
						console.log(error)
					} finally {
						this.setLoading(false)
					}
				},
			},
		})
		Vue.component('CircleLoading', CircleLoading)
		Vue.component('BlinkLoading', BlinkLoading)
	},
}
