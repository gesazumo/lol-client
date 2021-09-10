import { staticImageAPI, staticURL } from '@/assets/constant'

export default {
	install(Vue) {
		Vue.mixin({
			data() {
				return {
					getSummonerIcon: staticImageAPI + staticURL.summonerIcon,
					getChampIcon: staticImageAPI + staticURL.champion,
					getSpellIcon: staticImageAPI + staticURL.spell,
					getItemIcon: staticImageAPI + staticURL.item,
				}
			},
		})
	},
}
