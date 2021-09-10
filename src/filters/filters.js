import { multiKillNameList } from '@/assets/constant'

export const killName = value => {
	if (!value || value == 0) return
	return multiKillNameList[value]
}

export const textCut = (value, length) => {
	return value.length > length ? value.slice(0, length) + '...' : value
}

export const comma = value => {
	return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const nullToZero = value => {
	if (!value || value == null || value == undefined) return 0
	else return value
}
