<template>
	<v-container class="box">
		<div class="titles">{{ title }}</div>
		<v-row>
			<v-col v-for="i in saleChamp" :key="i" :cols="3" class="col">
				<div>
					<img class="portrait" src="@/assets/logo.png" />
					<div class="payment">
						<span class="org-payment">ddd</span>
						㉾
						<span class="sale-payment">123</span>
					</div>
					<div class="skin-name">전산</div>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			require: true,
		},
	},
	data() {
		return {
			saleChamp: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
		}
	},
}
</script>

<style>
.payment .org-payment {
	color: gray;
}
.payment .sale-payment {
}
.skin-name {
	text-align: center;
}
</style>
