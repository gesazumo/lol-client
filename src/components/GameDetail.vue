<template>
	<div class="gameDetailBox">
		<table class="gameDetail">
			<thead>
				<tr>
					<th class="head text-left" :style="{ width: '13%' }">
						{{ team1Info.win == 'Win' ? '승리' : '패배' }}({{
							this.$getTeamName(team1Info.teamId)
						}})
					</th>
					<th class="head" :style="{ width: '8%' }">티어</th>
					<th class="head" :style="{ width: '10%' }">KDA</th>
					<th class="head" :style="{ width: '12%' }">피해량</th>
					<th class="head" :style="{ width: '8%' }">와드</th>
					<th class="head" :style="{ width: '8%' }">CS</th>
					<th class="head text-left" :style="{ width: '10%' }">아이템</th>
				</tr>
			</thead>
			<tbody>
				<tr
					class="bodyRow"
					v-for="team1 in team1List"
					:key="team1.player.accountId"
					:style="team1.stats.win ? winTeamStyle : loseTeamStyle"
				>
					<td class="firstCell">
						<div class="portraitCell">
							<img
								class="portrait"
								:src="getChampIcon + championInfo(team1.championId).id + '.png'"
							/>
							<div class="level">{{ team1.stats.champLevel }}</div>
						</div>
						<div class="spellCell">
							<spell-tool-tip :spellId="team1.spell1Id">
								<template v-slot:temp>
									<div :style="{ width: '20px', height: '20px' }">
										<img
											class="spell"
											:src="
												getSpellIcon + spellInfo(team1.spell1Id).id + '.png'
											"
										/>
									</div>
								</template>
							</spell-tool-tip>
							<spell-tool-tip :spellId="team1.spell2Id">
								<template v-slot:temp>
									<div :style="{ width: '20px', height: '20px' }">
										<img
											class="spell"
											:src="
												getSpellIcon + spellInfo(team1.spell2Id).id + '.png'
											"
										/>
									</div>
								</template>
							</spell-tool-tip>
						</div>
						<div class="luneCell">
							<img
								class="lune"
								src="https://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/Ahri.png"
							/>
							<img
								class="lune"
								src="https://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/Ahri.png"
							/>
						</div>
						<div :style="{ width: '50%' }">{{ team1.player.summonerName }}</div>
					</td>

					<td class="cell">Silver 3</td>
					<td class="cell">
						<div class="kdaText1">
							{{
								(
									(team1.stats.kills + team1.stats.assists) /
									team1.stats.deaths
								).toFixed(2)
							}}:1
						</div>
						<div class="kdaText2">
							<span
								>{{ team1.stats.kills }}/{{ team1.stats.deaths }}/{{
									team1.stats.assists
								}}</span
							>
							({{
								(
									((team1.stats.kills + team1.stats.assists) / team1TotalKill) *
									100
								).toFixed(0)
							}}%)
						</div>
					</td>
					<td class="cell">
						<damage-graph
							:damage="team1.stats.totalDamageDealtToChampions"
							:totalDamage="team1.stats.totalDamageDealt"
							:maxDamageInTeam="maxDamageInTeam1"
						/>
					</td>
					<td class="cell">
						<div>
							<v-tooltip top>
								<template v-slot:activator="{ on, attrs }">
									<div v-bind="attrs" v-on="on">
										<div>
											{{ team1.stats.visionWardsBoughtInGame | nullToZero }}
										</div>
										<div>
											{{ team1.stats.wardsPlaced | nullToZero }} /
											{{ team1.stats.wardsKilled | nullToZero }}
										</div>
									</div>
								</template>
								<div>
									<div>
										제어와드 :
										{{ team1.stats.visionWardsBoughtInGame | nullToZero }}
									</div>
									<div>
										와드설치 : {{ team1.stats.wardsPlaced | nullToZero }}
									</div>
									<div>
										와드제거 : {{ team1.stats.wardsKilled | nullToZero }}
									</div>
								</div>
							</v-tooltip>
						</div>
					</td>
					<td class="cell">
						<div>{{ team1.stats.totalMinionsKilled }}</div>
					</td>
					<td class="cell">
						<div v-for="(n, index) in 7" :key="index" class="items">
							<item-tool-tip
								:itemId="team1.stats['item' + index]"
								v-if="team1.stats['item' + index] != 0"
							>
								<template v-slot:temp>
									<img
										class="item"
										:src="getItemIcon + team1.stats['item' + index] + '.png'"
									/>
								</template>
							</item-tool-tip>
							<div class="item" v-if="team1.stats['item' + index] == 0"></div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
		<team-detail
			:team1Info="team1Info"
			:team2Info="team2Info"
			:totalKills="{ team1TotalKill, team2TotalKill }"
			:totalGold="{ team1TotalGold, team2TotalGold }"
		/>
		<table class="gameDetail">
			<thead>
				<tr>
					<th class="head text-left" :style="{ width: '13%' }">
						{{ team2Info.win == 'Win' ? '승리' : '패배' }}({{
							this.$getTeamName(team2Info.teamId)
						}})
					</th>
					<th class="head" :style="{ width: '8%' }">티어</th>
					<th class="head" :style="{ width: '10%' }">KDA</th>
					<th class="head" :style="{ width: '12%' }">피해량</th>
					<th class="head" :style="{ width: '8%' }">와드</th>
					<th class="head" :style="{ width: '8%' }">CS</th>
					<th class="head text-left" :style="{ width: '10%' }">아이템</th>
				</tr>
			</thead>
			<tbody>
				<tr
					class="bodyRow"
					v-for="team2 in team2List"
					:key="team2.player.accountId"
					:style="team2.stats.win ? winTeamStyle : loseTeamStyle"
				>
					<td class="firstCell">
						<div class="portraitCell">
							<img
								class="portrait"
								:src="getChampIcon + championInfo(team2.championId).id + '.png'"
							/>
							<div class="level">{{ team2.stats.champLevel }}</div>
						</div>
						<div class="spellCell">
							<spell-tool-tip :spellId="team2.spell1Id">
								<template v-slot:temp>
									<div :style="{ width: '20px', height: '20px' }">
										<img
											class="spell"
											:src="
												getSpellIcon + spellInfo(team2.spell1Id).id + '.png'
											"
										/>
									</div>
								</template>
							</spell-tool-tip>
							<spell-tool-tip :spellId="team2.spell2Id">
								<template v-slot:temp>
									<div :style="{ width: '20px', height: '20px' }">
										<img
											class="spell"
											:src="
												getSpellIcon + spellInfo(team2.spell2Id).id + '.png'
											"
										/>
									</div>
								</template>
							</spell-tool-tip>
						</div>
						<div class="luneCell">
							<img
								class="lune"
								src="https://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/Ahri.png"
							/>
							<img
								class="lune"
								src="https://ddragon.leagueoflegends.com/cdn/10.6.1/img/champion/Ahri.png"
							/>
						</div>
						<div>{{ team2.player.summonerName }}</div>
					</td>

					<td class="cell">Silver 3</td>
					<td class="cell">
						<div class="kdaText1">
							{{
								(
									(team2.stats.kills + team2.stats.assists) /
									team2.stats.deaths
								).toFixed(2)
							}}:1
						</div>
						<div class="kdaText2">
							<span
								>{{ team2.stats.kills }}/{{ team2.stats.deaths }}/{{
									team2.stats.assists
								}}</span
							>
							({{
								(
									((team2.stats.kills + team2.stats.assists) / team2TotalKill) *
									100
								).toFixed(0)
							}}%)
						</div>
					</td>
					<td class="cell">
						<damage-graph
							:damage="team2.stats.totalDamageDealtToChampions"
							:totalDamage="team2.stats.totalDamageDealt"
							:maxDamageInTeam="maxDamageInTeam2"
						/>
					</td>
					<td class="cell">
						<div>
							<v-tooltip top>
								<template v-slot:activator="{ on, attrs }">
									<div v-bind="attrs" v-on="on">
										<div>
											{{ team2.stats.visionWardsBoughtInGame | nullToZero }}
										</div>
										<div>
											{{ team2.stats.wardsPlaced | nullToZero }} /
											{{ team2.stats.wardsKilled | nullToZero }}
										</div>
									</div>
								</template>
								<div>
									<div>
										제어와드 :
										{{ team2.stats.visionWardsBoughtInGame | nullToZero }}
									</div>
									<div>
										와드설치 : {{ team2.stats.wardsPlaced | nullToZero }}
									</div>
									<div>
										와드제거 : {{ team2.stats.wardsKilled | nullToZero }}
									</div>
								</div>
							</v-tooltip>
						</div>
					</td>
					<td class="cell">
						<div>{{ team2.stats.totalMinionsKilled }}</div>
					</td>
					<td class="cell">
						<div v-for="(n, index) in 7" :key="index" class="items">
							<item-tool-tip
								:itemId="team2.stats['item' + index]"
								v-if="team2.stats['item' + index] != 0"
							>
								<template v-slot:temp>
									<img
										class="item"
										:src="getItemIcon + team2.stats['item' + index] + '.png'"
									/>
								</template>
							</item-tool-tip>
							<div class="item" v-if="team2.stats['item' + index] == 0"></div>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import DamageGraph from '@/components/DamageGraph.vue'
import TeamDetail from '@/components/TeamDetail.vue'
import { mapGetters } from 'vuex'
export default {
	components: { DamageGraph, TeamDetail },
	name: 'GameDetail',
	computed: {
		...mapGetters(['championInfo', 'spellInfo']),
		...mapGetters('findStore', ['getSummonerId']),
		team1TotalKill() {
			return this.team1List
				.map(team1 => {
					return team1.stats.kills
				})
				.reduce((acc, currentKill) => {
					return acc + currentKill
				})
		},
		team1TotalGold() {
			return this.team1List
				.map(team1 => {
					return team1.stats.goldEarned
				})
				.reduce((acc, currentGold) => {
					return acc + currentGold
				})
		},
		team2TotalKill() {
			return this.team2List
				.map(team2 => {
					return team2.stats.kills
				})
				.reduce((acc, currentKill) => {
					return acc + currentKill
				})
		},
		team2TotalGold() {
			return this.team2List
				.map(team2 => {
					return team2.stats.goldEarned
				})
				.reduce((acc, currentGold) => {
					return acc + currentGold
				})
		},
		maxDamageInTeam1() {
			return this.team1List
				.map(team1 => {
					return team1.stats.totalDamageDealtToChampions
				})
				.reduce((acc, currentDamage) => {
					return acc > currentDamage ? acc : currentDamage
				})
		},
		maxDamageInTeam2() {
			return this.team2List
				.map(team2 => {
					return team2.stats.totalDamageDealtToChampions
				})
				.reduce((acc, currentDamage) => {
					return acc > currentDamage ? acc : currentDamage
				})
		},
	},
	props: {
		team1List: {
			type: Array,
			required: true,
		},
		team2List: {
			type: Array,
			required: true,
		},
		team1Info: {
			type: Object,
			required: true,
		},
		team2Info: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style>
.gameDetailBox {
	margin-bottom: 5px;
	margin-top: 1px;
	border: 1px solid;
	border-color: rgb(206, 167, 167);
	background-color: whitesmoke;
}
.gameDetail {
	color: '#555e5e';
	width: 100%;
	border-collapse: collapse;
}
.gameDetail .bodyRow {
	background: thistle;
}
.gameDetail .bodyRow .firstCell {
	display: flex;
	align-items: center;
	margin-left: 10px;
	padding: 5px;
}
.gameDetail .head {
	padding: 10px 0px 10px 0px;
}

.gameDetail .portraitCell {
	position: relative;
}
.gameDetail .portraitCell .portrait {
	height: 40px;
	width: 40px;
	border-radius: 100%;
}
.gameDetail .portraitCell .level {
	border-radius: 100%;
	background-color: black;
	opacity: 0.7;
	color: blanchedalmond;
	height: 15px;
	width: 15px;
	text-align: center;
	font-size: 10px;
	position: absolute;
	top: 28px;
}
.gameDetail .spellCell {
	display: flex;
	flex-direction: column;
}
.gameDetail .spellCell .spell {
	height: 100%;
	width: 100%;
	padding: 1px;
}
.gameDetail .luneCell {
	display: flex;
	flex-direction: column;
}

.gameDetail .luneCell .lune {
	height: 20px;
	width: 20px;
	padding: 1px;
}
.gameDetail .cell {
	text-align: center;
}

.gameDetail .cell .kdaText1 {
	font-weight: bold;
}

.gameDetail .cell .items {
	display: flex;
	float: left;
}

.gameDetail .cell .items .item {
	border-radius: 15%;
	background-color: dimgray;
	height: 25px;
	width: 25px;
	margin: 1px;
}
</style>
