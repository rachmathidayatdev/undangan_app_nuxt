<template>
	<GridView
		custom-class="bottom-navbar"
		cols="4"
		grid-row-gap="10px"
		grid-col-gap="20px"
	>
		<Column
			v-for="(item, index) in menu"
			:key="index"
			align-items="center"
			class="navbar-item"
			:on-click="onTabChange"
			:payload-custom="JSON.stringify(item.url)"
		>
			<img :src="item.icon" height="20" width="20" />
			<TextView
				custom-class="font-10"
				text-alignment="center"
				:font-color="`${item.isActive ? 'vermillion' : 'black'}`"
				>{{ item.label }}</TextView
			>
		</Column>
	</GridView>
</template>

<script>
import ICONS from '~/constants/icons'
import ROUTES from '~/constants/routes'

export default {
	components: {
		GridView: () => import('~/views/ui/GridView'),
		Column: () => import('~/views/ui/Column'),
		TextView: () => import('~/views/ui/TextView'),
	},
	data() {
		return {
			menu: [
				{
					icon:
						this.$route.path === ROUTES.PRODUCT_LIST.url
							? ICONS.HOME_ACTIVE_ICON
							: ICONS.HOME_ICON,
					label: 'Home',
					isActive: this.$route.path === ROUTES.PRODUCT_LIST.url,
					url: ROUTES.PRODUCT_LIST.url,
				},
				{
					icon:
						this.$route.path === ROUTES.FAVORIT.url
							? ICONS.FAVORIT_ACTIVE_ICON
							: ICONS.FAVORIT_ICON,
					label: 'Favorit',
					isActive: this.$route.path === ROUTES.FAVORIT.url,
					url: ROUTES.PRODUCT_LIST.url,
				},
				{
					icon:
						this.$route.path === ROUTES.PROFILE.url
							? ICONS.PROFILE_ACTIVE_ICON
							: ICONS.PROFILE_ICON,
					label: 'Profile',
					isActive: this.$route.path === ROUTES.PROFILE.url,
					url: ROUTES.PROFILE.url,
				},
				{
					icon:
						this.$route.path === ROUTES.HISTORY.url
							? ICONS.HISTORY_ACTIVE_ICON
							: ICONS.HISTORY_ICON,
					label: 'History',
					isActive: this.$route.path === ROUTES.HISTORY.url,
					url: ROUTES.HISTORY.url,
				},
			],
		}
	},
	methods: {
		onTabChange(payload) {
			const data = JSON.parse(payload)

			this.$router.push(data)
		},
	},
}
</script>

<style lang="scss">
@import '~/assets/scss/global';

.bottom-navbar {
	position: fixed;
	bottom: 0;
	width: 100%;
	padding: 0.5rem 0.75rem 0.5rem 0.75rem;
	background-color: map-get($colors, body-bg);
}
</style>
