import { PostFilterType, PostType, PostType2 } from '@/models/postType'
import { AxiosResponse } from 'axios'
import { instance } from './index'

const url = {
	post: 'posts',
}

export const fetchCreatePost = (
	post: PostType,
): Promise<AxiosResponse<PostType>> => {
	return instance.post(url.post, post)
}

export const getFilter = (filter: {
	[key: string]: any
}): { [key: string]: any } => {
	for (const key in filter) {
		filter[key] = filter[key].value
		filter[key] == 'none' && delete filter[key]
	}

	return filter
}

export const fetchGetPostList = (
	filter: PostFilterType,
): Promise<AxiosResponse<PostType2>> => {
	const { page, ...rest } = filter
	return instance.get(url.post, {
		params: { page, ...getFilter(rest) },
	})
}
