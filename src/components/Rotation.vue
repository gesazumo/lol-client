<template>
	<section class="section">
		<div class="title">{{ title }}</div>
		<div class="container">
			<template v-if="localLoading">
				<circle-loading />
			</template>

			<template v-if="freeChampionIds.length > 0 && !localLoading">
				<div v-for="i in freeChampionIds" :key="i">
					<rotation-champ :champ-key="i" />
				</div>
			</template>
		</div>
	</section>
</template>

<script>
import { fetchRotationChampions } from '../api/init'
import RotationChamp from './RotationChamp.vue'
export default {
	components: { RotationChamp },
	props: {
		title: {
			type: String,
			require: true,
		},
	},
	data() {
		return {
			freeChampionIds: [],
			freeChampionIdsForNewPlayers: [],
		}
	},
	async created() {
		this.fetchData(this.fetchFunction)
	},
	methods: {
		async fetchFunction() {
			const { data } = await fetchRotationChampions()
			this.freeChampionIds = data.freeChampionIds
		},
	},
}
</script>
