import { multiKillNameList } from '@/assets/constant'

const filter: { [index: string]: any } = {
	killName: (value: number) => {
		if (!value || value == 0) return
		return multiKillNameList[value]
	},

	textCut: (value: string, length: number) => {
		return value.length > length ? value.slice(0, length) + '...' : value
	},

	comma: (value: number) => {
		return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	},

	nullToZero: (value: any) => {
		if (!value || value == null || value == undefined) return 0
		else return value
	},
}

export default filter
