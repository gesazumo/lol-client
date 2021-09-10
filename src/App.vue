<template>
	<v-app>
		<div class="browser">
			<search-bar />
			<router-view></router-view>
		</div>
		<post-form-modal />
	</v-app>
</template>

<script lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import { mapActions } from 'vuex'
import PostFormModal from './components/modal/PostFormModal.vue'
import Vue from 'vue'

export default Vue.extend({
	name: 'App',
	components: { SearchBar, PostFormModal },
	data() {
		return {}
	},
	methods: {
		...mapActions(['callInitApi']),
	},
	created() {
		this.callInitApi()
	},
})
</script>
