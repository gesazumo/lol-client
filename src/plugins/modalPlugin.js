import SpellToolTip from '@/components/modal/SpellToolTip.vue'
import ItemToolTip from '@/components/modal/ItemToolTip.vue'

export default {
	install(Vue) {
		Vue.component('SpellToolTip', SpellToolTip)
		Vue.component('ItemToolTip', ItemToolTip)
	},
}
