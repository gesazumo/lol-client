<template>
	<div>
		<div>검색탭 넣기!!!</div>
		<!-- <div>
			<template v-if="showAnalysisFlag">
				<button class="analyButton" @click="showAnalysis">
					<span class="analyHideText">분석결과 감추기</span>
				</button>
			</template>
			<template v-else>
				<button class="analyButton" @click="showAnalysis">
					<span class="analyText">최근 20게임 분석결과 확인하기</span>
				</button>
			</template>
		</div> -->
		<recent-game-analysis />
		<circle-loading
			v-if="localLoading"
			:style="{
				height: '25vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}"
		/>
		<template v-else>
			<div v-for="game in recentGameList" :key="game.gameId">
				<game :gameObject="game" />
			</div>
			<infinite-loading
				@infinite="infiniteHandler"
				v-if="recentGameList.length > 0"
			></infinite-loading>
		</template>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import InfiniteLoading from 'vue-infinite-loading'
import { fetchFindRecentGame } from '../api/find'
import Game from './Game.vue'
import RecentGameAnalysis from './RecentGameAnalysis.vue'

export default {
	components: { Game, InfiniteLoading, RecentGameAnalysis },
	data() {
		return {
			beginIndex: 0,
			endIndex: 10,
			recentGameList: [],
			showAnalysisFlag: false,
		}
	},
	computed: {
		...mapGetters('findStore', ['getSummonerAccountId']),
		// donutGrahpData() {},
	},
	watch: {
		getSummonerAccountId() {
			this.beginIndex = 0
			this.endIndex = 10
			this.recentGameList = []
			this.fetchData(this.getRecentGames)
		},
	},
	methods: {
		async getRecentGames() {
			const summonerId = this.getSummonerAccountId
			const { data } = await fetchFindRecentGame(
				summonerId,
				this.beginIndex,
				this.endIndex,
			)
			this.beginIndex = this.endIndex
			this.endIndex = this.endIndex + 10
			this.recentGameList = data
		},
		infiniteHandler($state) {
			const summonerId = this.getSummonerAccountId
			fetchFindRecentGame(summonerId, this.beginIndex, this.endIndex).then(
				({ data }) => {
					console.log(summonerId)
					console.log(data)
					this.recentGameList.push(...data)
					this.beginIndex = this.endIndex
					this.endIndex = this.endIndex + 10
					$state.loaded()
				},
			)
		},
		showAnalysis() {
			this.showAnalysisFlag = !this.showAnalysisFlag
		},
	},
}
</script>

<style>
.analyButton {
	width: 100%;
	text-align: center;
	padding: 15px;
	background-color: ghostwhite;
	border: 0.1px solid;
	border-color: gray;
	margin: 5px 0 5px 0;
}
.analyButton .analyText {
	font-size: 1rem;
}

.analyButton .analyHideText {
	font-size: 1rem;
}
</style>
