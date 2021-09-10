<template>
	<v-textarea
		placeholder="내용을 입력하세요"
		:value="value"
		:rules="[validation1, validation2]"
		@input="handleInput"
		:counter="counter"
	></v-textarea>
</template>

<script>
export default {
	name: 'PostBodyForm',
	data() {
		return {
			counter: 50,
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
