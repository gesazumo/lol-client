<template>
	<div>
		<rotation :title="' - 금주의 로테이션 챔피언'" />
		<div :style="{ height: '10px' }" />
		<posts />
	</div>
</template>

<script>
import Rotation from '@/components/Rotation.vue'
import Posts from '../components/Posts.vue'

export default {
	components: { Rotation, Posts },
}
</script>

<style></style>
