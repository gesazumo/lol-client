<template>
	<div class="teamDetail">
		<div>
			<img class="objectIcon" src="@/assets/icon-baron-r.png" />{{
				team1Info.baronKills
			}}
		</div>
		<div>
			<img class="objectIcon" src="@/assets/icon-dragon-r.png" />{{
				team1Info.dragonKills
			}}
		</div>
		<div>
			<img class="objectIcon" src="@/assets/icon-tower-r.png" />{{
				team1Info.towerKills
			}}
		</div>
		<div class="graphArea">
			<compare-graph
				:title="'TotalKill'"
				:leftValue="totalKills.team1TotalKill"
				:rightValue="totalKills.team2TotalKill"
			/>
			<compare-graph
				:title="'ToTalGold'"
				:leftValue="totalGold.team1TotalGold"
				:rightValue="totalGold.team2TotalGold"
			/>
		</div>
		<div>
			<img class="objectIcon" src="@/assets/icon-baron-b.png" />{{
				team2Info.baronKills
			}}
		</div>
		<div>
			<img class="objectIcon" src="@/assets/icon-dragon-b.png" />{{
				team2Info.baronKills
			}}
		</div>
		<div>
			<img class="objectIcon" src="@/assets/icon-tower-b.png" />{{
				team2Info.baronKills
			}}
		</div>
	</div>
</template>

<script>
import CompareGraph from './CompareGraph.vue'

export default {
	name: 'TeamDetail',
	components: { CompareGraph },
	props: {
		team1Info: {
			type: Object,
			required: true,
		},
		team2Info: {
			type: Object,
			required: true,
		},
		totalKills: {
			type: Object,
			required: true,
		},
		totalGold: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style scoped>
.teamDetail {
	background-color: seashell;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30px 0 30px;
}

.teamDetail .objectIcon {
	height: 25px;
	width: 25px;
}
.teamDetail .graphArea {
	display: flex;
	flex-direction: column;
}
</style>
