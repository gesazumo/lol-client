import axios from 'axios'

// eslint-disable-next-line no-undef
const RIOT_API_URL = process.env.VUE_APP_API_URI

const DDRAGON_API_URL =
	process.env.VUE_APP_DDRAGON_API_URI + process.env.VUE_APP_DDRAGON_VERSION
const STATIC_API_URL = 'https://static.developer.riotgames.com/docs/lol/'

function createDdragonInstance() {
	return axios.create({
		baseURL: DDRAGON_API_URL,
	})
}

function createStaticInstance() {
	return axios.create({
		baseURL: STATIC_API_URL,
	})
}

function createInstance() {
	return axios.create({
		baseURL: RIOT_API_URL,
		headers: {
			'Content-Type': 'application/json; charset=UTF-8',
		},
	})
}

export const ddragonInstance = createDdragonInstance()
export const staticInstance = createStaticInstance()
export const instance = createInstance()
