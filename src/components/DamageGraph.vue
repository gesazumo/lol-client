<template>
	<v-tooltip top>
		<template v-slot:activator="{ on, attrs }">
			<div v-bind="attrs" v-on="on">
				<div class="damageGraph">
					<div class="text">{{ damage | comma }}</div>
					<div class="outBox">
						<div class="inBox" :style="{ width: damagePerTotal }" />
					</div>
				</div>
			</div>
		</template>
		<div>
			<div>챔피언에게 가한 피해량 : {{ damage | comma }}</div>
			<div>총 피해량 : {{ totalDamage | comma }}</div>
		</div>
	</v-tooltip>
</template>

<script>
export default {
	name: 'DamageGraph',
	props: {
		totalDamage: {
			type: Number,
			required: true,
		},
		damage: {
			type: Number,
			required: true,
		},
		maxDamageInTeam: {
			type: Number,
			required: true,
		},
	},
	computed: {
		damagePerTotal() {
			return `${
				(this.damage * 100) / this.$getUpNearNumber(this.maxDamageInTeam)
			}%`
		},
	},
}
</script>

<style>
.damageGraph .text {
	font-size: 15px;
}
.damageGraph .outBox {
	width: 100%;
	height: 13px;
	border: 1px solid;
	border-color: gainsboro;
	background-color: white;
	position: relative;
}
.damageGraph .inBox {
	height: 13px;
	background-color: #c6443e;
	border: 1px solid;
	position: absolute;
	margin: -1px;
	border-color: red;
}
</style>
