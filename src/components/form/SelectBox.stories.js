import SelectBox from './SelectBox.vue'

export default {
	title: 'SelectBox',
	component: SelectBox,
}

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { SelectBox },
	template: '<select-box :items="items" @onSelect="onSelect"/>',
})

export const Normal = Template.bind({})
Normal.args = {
	items: ['1', '2'],
}
