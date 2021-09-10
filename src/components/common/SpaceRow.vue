<template>
	<div :style="{ height: height + 'px' }"></div>
</template>

<script>
export default {
	props: {
		height: {
			type: Number,
			require: false,
			default: 10,
		},
	},
}
</script>

<style></style>
