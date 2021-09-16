import { AxiosResponse } from 'axios'
import { instance, staticInstance } from './index'

const url = {
	find: 'users/find/',
	info: 'users/info/',
	recentGame: 'users/recentGames/',
	summary: 'users/recentGameSummary/',
	queues: 'queues.json',
}

export const fetchFindUser = (summonerName: string): Promise<AxiosResponse> => {
	return instance.get(url.find + summonerName)
}

export const fetchFindUserRankInfo = (id: string): Promise<AxiosResponse> => {
	return instance.get(`${url.info}${id}`)
}

export const fetchFindRecentGame = (
	id: string,
	beginIndex: number,
	endIndex: number,
): Promise<AxiosResponse> => {
	return instance.get(`${url.recentGame}${id}`, {
		params: { beginIndex, endIndex },
	})
}

export const fetchFindRecentGameSummary = (
	id: string,
): Promise<AxiosResponse> => {
	return instance.get(`${url.summary}${id}`)
}

export const fetchQueues = (): Promise<AxiosResponse> => {
	return staticInstance.get(`${url.queues}`)
}
