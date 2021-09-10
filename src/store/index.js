import Vue from 'vue'
import Vuex from 'vuex'
import { fetchAllChampions, fetchAllItems, fetchAllSpells } from '../api/init'
import {
	SET_CHAMPION_LIST,
	SET_LOADING,
	SET_SPELL_LIST,
	SET_ITEM_LIST,
	SHOW_CONFIRM_MODAL,
	SHOW_POST_FORM_MODAL,
	CLOSE_POST_FORM_MODAL,
} from './mutation-type'

Vue.use(Vuex)

import findStore from '@/store/modules/findStore.js'

export default new Vuex.Store({
	modules: {
		findStore: findStore,
	},
	state: {
		summonerName: null,
		championList: {},
		spellList: {},
		itemList: {},
		globalLoading: false,
		showConfirmModal: false,
		showPostFormModal: false,
		showPostFormModalResolve: null,
	},
	getters: {
		championInfo: state => key => {
			for (const [value] of Object.entries(state.championList)) {
				if (key == state.championList[value].key) {
					return state.championList[value]
				}
			}
		},
		spellInfo: state => key => {
			for (const [value] of Object.entries(state.spellList)) {
				if (key == state.spellList[value].key) {
					return state.spellList[value]
				}
			}
		},
		itemInfo: state => key => {
			return state.itemList[key]
		},
	},
	mutations: {
		[SET_CHAMPION_LIST](state, { championList }) {
			state.championList = championList
		},
		[SET_SPELL_LIST](state, { spellList }) {
			state.spellList = spellList
		},
		[SET_LOADING](state, { flag }) {
			state.globalLoading = flag
		},
		[SET_ITEM_LIST](state, { itemList }) {
			state.itemList = itemList
		},
		[SHOW_CONFIRM_MODAL](state) {
			state.showConfirmModal = true
		},
		[SHOW_POST_FORM_MODAL](state, { resolve }) {
			state.showPostFormModal = true
			state.showPostFormModalResolve = resolve
		},
		[CLOSE_POST_FORM_MODAL](state, { flag }) {
			state.showPostFormModal = false
			state.showPostFormModalResolve && state.showPostFormModalResolve(flag)
			state.showPostFormModalResolve = null
		},
	},

	actions: {
		async getChampionList({ commit }) {
			const { data } = await fetchAllChampions()
			commit(SET_CHAMPION_LIST, { championList: data.data })
		},
		async getSpellList({ commit }) {
			const { data } = await fetchAllSpells()
			commit(SET_SPELL_LIST, { spellList: data.data })
		},
		async getItemList({ commit }) {
			const { data } = await fetchAllItems()
			commit(SET_ITEM_LIST, { itemList: data.data })
		},
		async callInitApi({ dispatch, commit }) {
			commit(SET_LOADING, { flag: true })
			console.log('init!')
			try {
				dispatch('getChampionList')
				dispatch('getSpellList')
				dispatch('getItemList')
			} catch (error) {
				console.log(error)
			} finally {
				commit(SET_LOADING, { flag: false })
			}
		},
	},
})
