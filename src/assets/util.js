import {
	AddFriendTimeList,
	PositionTypeList,
	QueueTypeList,
	staticImageAPI,
	staticURL,
	teamName,
	VoiceOn,
} from '@/assets/constant'
import {
	CLOSE_POST_FORM_MODAL,
	SHOW_CONFIRM_MODAL,
	SHOW_POST_FORM_MODAL,
} from '../store/mutation-type'

const util = {
	$getSummonerIcon(key) {
		return staticImageAPI + staticURL.summonerIcon + key + '.png'
	},

	$getChampIcon(key) {
		return staticImageAPI + staticURL.champion + key + '.png'
	},

	$getSpellIcon(key) {
		return staticImageAPI + staticURL.spell + key + '.png'
	},

	$getItemIcon(key) {
		return staticImageAPI + staticURL.item + key + '.png'
	},

	$getSpellInfo(id) {
		return this.$store.getters.spellInfo(id)
	},

	$getItemInfo(id) {
		return this.$store.getters.itemInfo(id)
	},

	$getUpNearNumber(num) {
		if (typeof num != 'number') return 0
		const val = 10 ** (num.toString().length - 2)
		return Math.ceil(num / val) * val
	},

	$getTeamName(value) {
		return teamName[value]
	},

	$showConfirmModal() {
		return new Promise(resolve => {
			this.$store.commit(SHOW_CONFIRM_MODAL, resolve)
		})
	},

	$showPostFormModal() {
		return new Promise(resolve => {
			this.$store.commit(SHOW_POST_FORM_MODAL, { resolve })
		})
	},

	$closePostFormModal(flag) {
		this.$store.commit(CLOSE_POST_FORM_MODAL, { flag })
	},

	$queueTypeList() {
		return QueueTypeList
	},

	$queueTypeSelectList() {
		return QueueTypeList.slice(1)
	},

	$positionTypeList() {
		return PositionTypeList
	},

	$positionTypeSelectList() {
		return PositionTypeList.slice(1)
	},

	$addFriendTimeList() {
		return AddFriendTimeList
	},

	$addFriendTimeSelectList() {
		return AddFriendTimeList.slice(1)
	},

	$voiceOn() {
		return VoiceOn
	},
}

export default util
