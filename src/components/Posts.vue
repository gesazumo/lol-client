<template>
	<section class="section">
		<div class="title">
			<div>- 듀오구하기</div>
			<button class="addPostButton" @click="showModal">작성하기</button>
		</div>
		<div class="filterBox">
			<select-box
				class="selectBox"
				:items="$queueTypeList()"
				v-model="filter.queueType"
			/>
			<select-box
				class="selectBox"
				:items="$positionTypeList()"
				v-model="filter.positionType"
			/>
			<select-box
				class="selectBox"
				:items="$addFriendTimeList()"
				v-model="filter.addFriendTime"
			/>
			<select-box
				class="selectBox"
				:items="$voiceOn()"
				v-model="filter.voice"
			/>
			<v-btn color="primary" @click="initFilter">전체보기</v-btn>
		</div>
		<template v-if="localLoading">
			<circle-loading
				:style="{
					height: '60vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}"
			/>
		</template>

		<template v-else>
			<div class="container" v-if="!this.noContent">
				<div v-for="postData in postList" :key="postData.id">
					<post :postData="postData" />
				</div>
			</div>
			<div v-else>
				<no-content
					:style="{
						height: '50vh',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}"
				/>
			</div>
		</template>
		<div class="text-center" v-if="!this.noContent">
			<v-pagination
				v-model="filter.page"
				:length="totalCount"
				@input="movePage"
			></v-pagination>
		</div>
	</section>
</template>

<script>
import { fetchGetPostList } from '../api/post'
import SelectBox from './form/SelectBox.vue'
import Post from './Post.vue'
export default {
	components: { Post, SelectBox },
	name: 'Posts',
	data() {
		return {
			postList: [],
			totalCount: 5,
			filter: {
				page: 1,
				queueType: this.$queueTypeList()[0],
				positionType: this.$positionTypeList()[0],
				addFriendTime: this.$addFriendTimeList()[0],
				voice: this.$voiceOn()[0],
			},
		}
	},
	watch: {
		filter: {
			deep: true,
			handler() {
				this.fetchData(() => this.getPostList(this.filter))
			},
		},
	},
	created() {
		this.fetchData(() => this.getPostList(this.filter))
	},
	computed: {
		noContent() {
			return this.postList.length == 0
		},
	},
	methods: {
		initFilter() {
			this.filter = {
				page: 1,
				queueType: this.$queueTypeList()[0],
				positionType: this.$positionTypeList()[0],
				addFriendTime: this.$addFriendTimeList()[0],
				voice: this.$voiceOn()[0],
			}
		},
		async getPostList(filter) {
			const { data, status } = await fetchGetPostList(filter)
			if (status == 204) {
				this.postList = []
				this.totalCount = 0
				return
			}
			this.postList = data.posts
			this.totalCount = data.totalCount / 12 + 1
		},
		movePage(page) {
			this.filter.page = page
		},
		async showModal() {
			const result = await this.$showPostFormModal()
			if (result) {
				this.initFilter()
			}
		},
	},
}
</script>
