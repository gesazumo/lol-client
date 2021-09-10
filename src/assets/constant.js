export const winStyleObject = {
	backgroundColor: '#a3cfec',
	borderColor: '#99b9cf',
}

export const loseStyleObject = {
	backgroundColor: '#e2b6b3',
	borderColor: '#cea7a7',
}

export const loseTeamColor = '#e9e0e0'
export const loseSummonerColor = '#e2b6b3'

export const winTeamColor = '#d8e4ec'
export const winSummonerColor = '#a3cfec'

export const teamName = {
	100: '블루팀',
	200: '레드팀',
}

export const multiKillNameList = {
	2: '더블킬',
	3: '트리플킬',
	4: '쿼드라킬',
	5: '펜타킬',
}

export const staticImageAPI =
	process.env.VUE_APP_DDRAGON_API_URI +
	process.env.VUE_APP_DDRAGON_VERSION +
	'/img/'

export const staticURL = {
	summonerIcon: 'profileicon/',
	champion: 'champion/',
	spell: 'spell/',
	item: 'item/',
}

export const QueueTypeList = [
	{ value: 'none', label: '모든게임' },
	{ value: 'normal', label: '일반게임' },
	{ value: 'soloRank', label: '솔로랭크' },
	{ value: 'freeRank', label: '자유랭크' },
	{ value: 'aram', label: '칼바람나락' },
]

export const PositionTypeList = [
	{ value: 'none', label: '포지션 상관 없이 구함' },
	{ value: 'top', label: '탑 구함' },
	{ value: 'jungle', label: '정글 구함' },
	{ value: 'mid', label: '미드 구함' },
	{ value: 'ad', label: '원딜 구함' },
	{ value: 'support', label: '서폿 구함' },
]

export const AddFriendTimeList = [
	{ value: 'none', label: '전체보기' },
	{ value: '15m', label: '15분 내 친구신청 가능' },
	{ value: '30m', label: '30분 내 친구신청 가능' },
	{ value: '1h', label: '1시간 내 친구신청 가능' },
	{ value: '2h', label: '2시간 내 친구신청 가능' },
	{ value: '3h', label: '3시간 내 친구신청 가능' },
	{ value: '6h', label: '6시간 내 친구신청 가능' },
]

export const VoiceOn = [
	{ value: true, label: '마이크 가능' },
	{ value: false, label: '마이크 불가능' },
]
