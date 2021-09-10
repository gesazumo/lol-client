<template>
	<div class="rotation-champion-box">
		<img
			class="portrait"
			:src="this.$getChampIcon(championInfo(champKey).id)"
		/>
		<div class="champion-name">
			{{ championInfo(champKey).name }}
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	props: {
		champKey: {
			type: Number,
			require: true,
		},
	},
	computed: {
		...mapGetters(['championInfo']),
	},
}
</script>

<style>
.rotation-champion-box {
	padding: 20;
}
.rotation-champion-box .portrait {
	height: 80px;
	width: 80px;
}
.rotation-champion-box .champion-name {
	font-size: x-small;
	text-align: center;
}
</style>
