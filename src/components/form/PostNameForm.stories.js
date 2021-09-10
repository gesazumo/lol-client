import PostNameForm from './PostNameForm.vue'

export default {
	title: 'PostNameForm',
	component: PostNameForm,
}

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { PostNameForm },
	template: '<post-name-form :value="value" @input="input"/>',
	data: { value: '부모가준거' },
})

export const Normal = Template.bind({})
Normal.args = {}
