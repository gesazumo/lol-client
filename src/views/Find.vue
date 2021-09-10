<template>
	<div>
		<div v-if="!userNotFound">
			<summoner-info></summoner-info>
			<recent-game></recent-game>
		</div>
		<not-found-page v-if="userNotFound"></not-found-page>
	</div>
</template>

<script>
import SummonerInfo from '@/components/SummonerInfo.vue'
import { mapActions } from 'vuex'
import NotFoundPage from '@/views/NotFoundPage.vue'
import RecentGame from '../components/RecentGame.vue'

export default {
	data() {
		return {
			userNotFound: false,
		}
	},
	components: { SummonerInfo, NotFoundPage, RecentGame },
	methods: {
		...mapActions('findStore', ['setSummoner', 'setQueues']),
		async findUser(summonerName, next = null) {
			try {
				await this.setSummoner(summonerName)
				this.userNotFound = false
			} catch (error) {
				this.userNotFound = true
			}
			if (next) next()
		},
	},
	created() {
		const summonerName = this.$route.params.username
		this.setQueues()
		this.findUser(summonerName)
	},
	beforeRouteUpdate(to, from, next) {
		const summonerName = to.params.username
		this.findUser(summonerName, next)
	},
}
</script>

<style></style>
