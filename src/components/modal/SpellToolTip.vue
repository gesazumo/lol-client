<template>
	<v-tooltip top>
		<template v-slot:activator="{ on, attrs }">
			<div v-bind="attrs" v-on="on">
				<slot name="temp"></slot>
			</div>
		</template>
		<div v-if="spellId" :style="{ maxWidth: '450px' }">
			<div class="title">
				{{ this.$getSpellInfo(spellId).name }}
			</div>
			{{ this.$getSpellInfo(spellId).description }}
		</div>
	</v-tooltip>
</template>

<script>
export default {
	name: 'SpellToolTip',
	props: {
		spellId: {
			type: Number,
			require: true,
		},
	},
}
</script>

<style>
.title {
	color: coral;
}
</style>
