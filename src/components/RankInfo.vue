<template>
	<div :style="{ marginLeft: '10px' }">
		<v-card class="mx-auto" width="20vw" outlined :style="{ height: '23vh' }">
			<blink-loading v-if="!rankInfo" />
			<v-list-item three-line v-if="rankInfo" :style="{ height: '100%' }">
				<v-list-item-content>
					<div :style="{ fontSize: '1rem' }">{{ title }}</div>
					<div v-if="Object.keys(rankInfo).length > 0">
						<v-list-item-title>
							{{ rankInfo.tier }} {{ rankInfo.rank }}
						</v-list-item-title>
						<div :style="{ fontSize: '0.8rem' }">
							{{ rankInfo.leaguePoints }} LP / {{ rankInfo.wins }}승
							{{ rankInfo.losses }}패
						</div>
						<div>승률 {{ winRate.toFixed() }}%</div>
						<!-- <div>{{ rankInfo.leagueId }}</div> -->
					</div>
					<div v-else>
						<v-list-item-title> UnRanked </v-list-item-title>
					</div>
				</v-list-item-content>

				<img
					v-if="Object.keys(rankInfo).length > 0"
					class="icon"
					:src="tierImageUrl"
				/>
				<img v-else class="icon" src="@/assets/tier/unranked.png" />
			</v-list-item>
		</v-card>
	</div>
</template>

<script>
export default {
	props: {
		rankInfo: {
			type: Object,
			require: true,
		},
		title: {
			type: String,
			require: true,
			default: '솔로랭크',
		},
	},
	computed: {
		tierImageUrl() {
			return require('@/assets/tier/' +
				this.rankInfo.tier.toLowerCase() +
				'.png')
		},
		winRate() {
			return (
				(this.rankInfo.wins / (this.rankInfo.wins + this.rankInfo.losses)) * 100
			)
		},
	},
}
</script>

<style>
.icon {
	height: 130px;
	width: 130px;
	margin-bottom: 15px;
	padding: 1px;
}
</style>
