import PostForm from './PostForm.vue'

export default {
	title: 'PostForm',
	component: PostForm,
}

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { PostForm },
	template: '<post-form/>',
})

export const Normal = Template.bind({})
Normal.args = {
	items: ['1', '2'],
}
