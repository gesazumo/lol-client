import { instance, ddragonInstance } from './index'

const url = {
	rotation: 'init/rotation',
	allChampions: '/data/ko_KR/champion.json',
	allSpell: '/data/ko_KR/summoner.json',
	allItem: '/data/ko_KR/item.json',
}

export const fetchAllChampions = () => {
	return ddragonInstance.get(`${url.allChampions}`)
}

export const fetchAllSpells = () => {
	return ddragonInstance.get(`${url.allSpell}`)
}

export const fetchRotationChampions = () => {
	return instance.get(`${url.rotation}`)
}

export const fetchAllItems = () => {
	return ddragonInstance.get(`${url.allItem}`)
}
