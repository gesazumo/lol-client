<template>
	<v-select
		:items="items"
		label="선택하세요"
		item-text="label"
		item-value="value"
		solo
		@input="onSelect"
		:value="value"
		return-object
	></v-select>
</template>

<script>
export default {
	name: 'SelectBox',
	props: {
		value: Object,
		items: [],
	},
	methods: {
		onSelect(value) {
			console.log(value)
			this.$emit('input', value)
		},
	},
}
</script>

<style></style>
