<template>
	<v-dialog
		v-model="showPostFormModal"
		@click:outside="clickOut"
		width="50vw"
		@keydown.esc="clickOut"
		>>
		<v-card>
			<div class="modalTitle">
				듀오 신청에서 타인을 사칭하거나 모욕하는 일은 법률에 의해 제재를 받을 수
				있습니다.
			</div>
			<v-form ref="form" lazy-validation>
				<v-card-text :style="{ padding: '10px' }" class="postFormModal">
					<div class="selectSection">
						<select-box
							:items="$queueTypeSelectList()"
							class="selectBox"
							v-model="queueType"
						/>
						<select-box
							:items="$positionTypeList()"
							class="selectBox"
							v-model="positionType"
						/>
					</div>
					<div class="selectSection">
						<select-box
							:items="$addFriendTimeSelectList()"
							class="selectBox"
							v-model="addFriendTime"
						/>
						<select-box :items="$voiceOn()" class="selectBox" v-model="voice" />
					</div>
					<post-name-form v-model="summonerName" />
					<post-title-form v-model="title" />
					<post-body-form v-model="body" />
				</v-card-text>

				<v-divider></v-divider>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="primary" @click="onSubmit"> 등록하기 </v-btn>
				</v-card-actions>
			</v-form>
		</v-card>
	</v-dialog>
</template>

<script>
import { mapState } from 'vuex'
import PostBodyForm from '../form/PostBodyForm.vue'
import PostNameForm from '../form/PostNameForm.vue'
import SelectBox from '../form/SelectBox.vue'
import { fetchCreatePost } from '@/api/post'
import PostTitleForm from '../form/PostTitleForm.vue'

export default {
	components: { SelectBox, PostBodyForm, PostNameForm, PostTitleForm },
	name: 'PostFormModal',
	data() {
		return {
			summonerName: '',
			title: '',
			body: '',
			queueType: this.$queueTypeSelectList()[0],
			positionType: this.$positionTypeList()[0],
			addFriendTime: this.$addFriendTimeSelectList()[0],
			voice: this.$voiceOn()[0],
		}
	},
	computed: {
		...mapState(['showPostFormModal']),
	},
	methods: {
		initForm() {
			this.$refs.form.resetValidation()
			this.summonerName = ''
			this.body = ''
			this.title = ''
			this.queueType = this.$queueTypeSelectList()[0]
			this.positionType = this.$positionTypeList()[0]
			this.addFriendTime = this.$addFriendTimeSelectList()[0]
			this.voice = this.$voiceOn()[0]
		},
		async clickOut() {
			this.$closePostFormModal(false)
			this.initForm()
		},
		async onSubmit() {
			const validate = this.$refs.form.validate()
			if (validate) {
				const postObject = {
					title: this.title,
					name: this.summonerName,
					body: this.body,
					queueType: this.queueType.value,
					positionType: this.positionType.value,
					addFriendTime: this.addFriendTime.value,
					voice: this.voice.value,
				}
				try {
					await fetchCreatePost(postObject)
					this.initForm()
					this.$closePostFormModal(true)
				} catch (err) {
					console.log(err)
				}
			}
		},
	},
}
</script>

<style></style>
