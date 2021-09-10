<template>
	<section class="box">
		<div class="rows">
			<select-box class="select" />
			<select-box class="select" />
		</div>
		<div class="row">
			<select-box class="select" />
			<select-box class="select" />
		</div>
		<post-name-form />
	</section>
</template>

<script>
import SelectBox from './SelectBox.vue'
import PostNameForm from './PostNameForm.vue'

export default {
	name: 'PostForm',
	components: { SelectBox, PostNameForm },
}
</script>

<style></style>
