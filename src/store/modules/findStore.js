import { fetchFindUser, fetchQueues } from '@/api/find'
import { SET_SUMMONER, SET_QUEUES } from '../mutation-type'

const initState = {
	summoner: {
		id: '',
		accountId: '',
		puuid: '',
		name: '',
		profileIconId: 0,
		revisionDate: 0,
		summonerLevel: '',
	},
}
const findStore = {
	namespaced: true,
	state: () => ({
		...initState,
	}),
	mutations: {
		[SET_SUMMONER](state, { summoner }) {
			state.summoner = summoner
		},
		[SET_QUEUES](state, { queues }) {
			state.queues = queues
		},
	},
	actions: {
		async setSummoner({ commit }, summonerName) {
			// commit(SET_SUMMONER, { summoner: initState.summoner })
			try {
				const { data } = await fetchFindUser(summonerName)
				commit(SET_SUMMONER, { summoner: data })
			} catch (error) {
				console.log(error.response)
				throw new Error(error)
			}
		},
		async setQueues({ commit }) {
			try {
				const { data } = await fetchQueues()
				commit(SET_QUEUES, { queues: data })
			} catch (error) {
				console.log(error)
			}
		},
	},
	getters: {
		getSummonerName: state => {
			return state.summoner.name
		},
		getSummonerId: state => {
			return state.summoner.id
		},
		getSummonerAccountId: state => {
			return state.summoner.accountId
		},
		getQueues: state => currendQueueId => {
			return state.queues.find(queue => {
				return queue.queueId == currendQueueId
			})
		},
	},
}

export default findStore
