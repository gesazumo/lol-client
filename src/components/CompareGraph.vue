<template>
	<div class="compareGraph">
		<span class="graphTitle">{{ title }}</span>
		<span class="graphValue" :style="{ textAlign: 'right' }">{{
			leftValue | comma
		}}</span>
		<div :style="{ width: '250px', display: 'flex' }">
			<div class="leftBox" :style="{ width: `${leftBoxWidth}%` }" />
			<div class="rightBox" :style="{ width: `${rightBoxWidth}%` }" />
		</div>
		<span class="graphValue">{{ rightValue | comma }}</span>
	</div>
</template>

<script>
export default {
	name: 'CompareGraph',
	props: {
		title: {
			type: String,
		},
		leftValue: {
			type: Number,
		},
		rightValue: {
			type: Number,
		},
	},
	data() {
		return {
			leftBoxWidth: (this.leftValue / (this.leftValue + this.rightValue)) * 100,
			rightBoxWidth:
				(this.rightValue / (this.leftValue + this.rightValue)) * 100,
		}
	},
}
</script>

<style scoped>
.compareGraph {
	display: flex;
	width: 400px;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 3px;
	margin-top: 3px;
}

.compareGraph .graphTitle {
	width: 70px;
	font-size: 12px;
}

.compareGraph .graphValue {
	font-size: 12px;
	width: 50px;
	margin: 0 5px 0 5px;
}

.compareGraph .leftBox {
	height: 13px;
	background-color: #c6443e;
	/* margin-right: 5px; */
}

.compareGraph .rightBox {
	height: 13px;
	background-color: steelblue;
	/* margin-left: 5px; */
}
</style>
