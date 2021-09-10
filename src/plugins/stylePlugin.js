import {
	loseSummonerColor,
	loseTeamColor,
	winSummonerColor,
	winTeamColor,
} from '../assets/constant'

export default {
	install(Vue) {
		Vue.mixin({
			data() {
				return {
					winTeamStyle: {
						backgroundColor: winTeamColor,
					},
					loseTeamStyle: {
						backgroundColor: loseTeamColor,
					},
					winSummonerStyle: {
						backgroundColor: winSummonerColor,
					},
					loseSummonerStyle: {
						backgroundColor: loseSummonerColor,
					},
				}
			},
		})
	},
}
