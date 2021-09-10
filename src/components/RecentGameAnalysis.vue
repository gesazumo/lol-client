<template>
	<div class="recnetGameAnaly">
		<circle-loading
			v-if="!recentGameSummary"
			:style="{
				width: '60vw',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: '195px',
			}"
		/>
		<div :style="{ width: '30vw', display: 'flex' }" v-if="recentGameSummary">
			<div>
				<span class="title"
					>{{ recentGameSummary.totalWin + recentGameSummary.totalLose }}전
					{{ recentGameSummary.totalWin }}승
					{{ recentGameSummary.totalLose }}패</span
				>
				<donut-chart
					:chartData="[
						{
							title: '승리',
							count: recentGameSummary.totalWin,
							color: '#EE5A52',
						},
						{
							title: '패배',
							count: recentGameSummary.totalLose,
							color: '#1F8ECD',
						},
					]"
				/>
			</div>
			<div class="section2">
				<div class="row1">
					{{ recentGameSummary.totalKills / recentGameSummary.avrCount }} /
					<span class="higtlight">{{
						recentGameSummary.totalDeaths / recentGameSummary.avrCount
					}}</span>
					/
					{{ recentGameSummary.totalAssists / recentGameSummary.avrCount }}
				</div>
				<div class="row2">
					{{
						(
							(recentGameSummary.totalKills + recentGameSummary.totalAssists) /
							recentGameSummary.totalDeaths
						).toFixed(2)
					}}:1
					<span class="higtlight"
						>({{
							(
								((recentGameSummary.totalKills +
									recentGameSummary.totalAssists) /
									recentGameSummary.teamTotalKills) *
								100
							).toFixed(0)
						}}%)</span
					>
				</div>
			</div>
		</div>
		<div class="section3" v-if="recentGameSummary">
			<div v-for="i in 3" :key="i">
				<div>
					<div class="row">
						<div
							:style="{ width: '65px', height: '65px', marginRight: '10px' }"
						>
							<img
								class="champImage"
								:src="`https://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/Ahri.png`"
							/>
						</div>
						<div
							:style="{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
							}"
						>
							<div :style="{ textAlign: 'left' }">노틸러스</div>
							<div>
								<span :style="{ fontWeight: 'bold' }">0% </span>
								<span> (0승 0패) </span>
								<span> 1.94평점 </span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="section4">여기엔 뭘넣지</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { fetchFindRecentGameSummary } from '../api/find'
import CircleLoading from './common/CircleLoading.vue'
export default {
	components: { CircleLoading },
	name: 'recentGameAnalysis',
	computed: {
		...mapGetters('findStore', ['getSummonerAccountId']),
		recentMostList() {
			const arr = []
			this.recentGameSummary.gameList.forEach(game => {
				arr.push(game.championId)
			})
			return 1
		},
	},
	data() {
		return {
			recentGameSummary: null,
		}
	},
	watch: {
		getSummonerAccountId() {
			this.recentGameSummary = null
			this.getRecentGameSummary()
		},
	},

	methods: {
		async getRecentGameSummary() {
			const summonerId = this.getSummonerAccountId

			const { data } = await fetchFindRecentGameSummary(summonerId)
			this.recentGameSummary = data
		},
	},
}
</script>

<style>
.recnetGameAnaly {
	text-align: center;
	display: flex;
	color: #666;
	margin-bottom: 3px;
	border: 1px solid;
	border-color: gainsboro;
	padding: 10px;
}
.recnetGameAnaly .title {
	color: #666;
}
.recnetGameAnaly .section2 {
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.recnetGameAnaly .section2 .row1 {
	font-size: 1em;
}
.recnetGameAnaly .section2 .row2 {
	font-size: 1.3em;
}
.recnetGameAnaly .section2 .higtlight {
	color: red;
}
.recnetGameAnaly .section3 {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 30vw;
}
.recnetGameAnaly .section4 {
	display: flex;
	text-align: center;
	width: 50vw;
}
.recnetGameAnaly .section3 .row {
	display: flex;
	margin: 0px;
}

.recnetGameAnaly .section3 .row .champImage {
	height: 100%;
	width: 100%;
	border-radius: 100%;
}
</style>
