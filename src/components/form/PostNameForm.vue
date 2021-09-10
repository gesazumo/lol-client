<template>
	<div>
		<v-text-field
			placeholder="소환사명"
			:rules="[validation1, validation2]"
			:counter="counter"
			:value="value"
			@input="handleInput"
		></v-text-field>
	</div>
</template>

<script>
export default {
	name: 'PostNameForm',
	data() {
		return {
			counter: 10,
		}
	},
	props: {
		value: {
			type: String,
			default: '',
		},
	},
	computed: {
		validation1() {
			return this.value.length <= this.counter || '너무길어요.'
		},
		validation2() {
			return Boolean(this.value) || '필수입력값입니다.'
		},
	},
	methods: {
		handleInput(value) {
			this.$emit('input', value)
		},
	},
}
</script>

<style></style>
