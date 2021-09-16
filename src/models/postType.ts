import {
	QueueTypeList,
	PositionTypeList,
	AddFriendTimeList,
	VoiceOn,
} from '@/assets/constant'

const makeTypes = (
	typeArray: Array<{ value: string | boolean; label: string }>,
): Array<string | boolean> => {
	return typeArray.map(typeObj => {
		return typeObj.value
	})
}

const queueTypes = makeTypes(QueueTypeList)

const positionTypes = PositionTypeList.map(
	(typeObj: { value: string; label: string }) => {
		return typeObj.value
	},
)

const addFriendTimeTypes = AddFriendTimeList.map(
	(typeObj: { value: string; label: string }) => {
		return typeObj.value
	},
)

const voiceOnTypes = makeTypes(VoiceOn)

/* eslint-disable prettier/prettier */
export interface PostType {
	title: string;
	name: string;
    body: string;
    queueType: typeof queueTypes;
    positionType: typeof positionTypes;
    addFriendTime: typeof addFriendTimeTypes;
    voice: typeof voiceOnTypes;
}

export interface PostType2 {
    a: typeof queueTypes;
    b: typeof positionTypes;
    c: typeof addFriendTimeTypes;
    d: typeof voiceOnTypes;
}

export interface PostFilterType {
    page?: number;
    queueType: typeof queueTypes;
    positionType: typeof positionTypes;
    addFriendTime: typeof addFriendTimeTypes;
    voice: typeof voiceOnTypes;
}