import { instance } from './index'

const url = {
	post: 'posts',
}

export const fetchCreatePost = postObject => {
	return instance.post(url.post, postObject)
}

export const getFilter = filter => {
	for (const key in filter) {
		if (typeof filter[key] == 'object') {
			filter[key] = filter[key].value
		}

		filter[key] == 'none' && delete filter[key]
	}

	return filter
}

export const fetchGetPostList = filter => {
	const filterObject = getFilter({ ...filter })
	return instance.get(url.post, {
		params: filterObject,
	})
}
