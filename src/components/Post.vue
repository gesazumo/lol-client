<template>
	<div class="post">
		<div class="time">방금</div>
		<div class="title">{{ postData.title }}</div>
		<div class="body">
			{{ postData.body }}
		</div>
		<div class="textRow">
			<div class="summoner">{{ postData.name }}</div>
			<div class="expire">14분후 만료</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'post',
	props: {
		postData: {
			type: Object,
		},
	},
}
</script>

<style></style>
