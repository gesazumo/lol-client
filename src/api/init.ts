import { AxiosResponse } from 'axios'
import { instance, ddragonInstance } from './index'

const url = {
	rotation: 'init/rotation',
	allChampions: '/data/ko_KR/champion.json',
	allSpell: '/data/ko_KR/summoner.json',
	allItem: '/data/ko_KR/item.json',
}

export const fetchAllChampions = (): Promise<AxiosResponse> => {
	return ddragonInstance.get(`${url.allChampions}`)
}

export const fetchAllSpells = (): Promise<AxiosResponse> => {
	return ddragonInstance.get(`${url.allSpell}`)
}

export const fetchRotationChampions = (): Promise<AxiosResponse> => {
	return instance.get(`${url.rotation}`)
}

export const fetchAllItems = (): Promise<AxiosResponse> => {
	return ddragonInstance.get(`${url.allItem}`)
}
