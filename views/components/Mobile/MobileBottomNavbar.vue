<template>
	<GridView
		custom-class="bottom-navbar"
		cols="6"
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
				custom-class="font-10 mt-5"
				text-alignment="center"
				:font-color="`${item.isActive ? 'goldenDream' : 'white'}`"
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
						this.$route.path === ROUTES.SAMPUL.url
							? ICONS.SAMPUL_ACTIVE_ICON
							: ICONS.SAMPUL_ICON,
					label: 'Sampul',
					isActive: this.$route.path === ROUTES.SAMPUL.url,
					url: `${ROUTES.SAMPUL.url}?guestName=${
						this.$route.query.guestName || ''
					}&guestLocation=${this.$route.query.guestLocation || ''}&sesi=${
						this.$route.query.sesi || '1'
					}`,
				},
				{
					icon:
						this.$route.path === ROUTES.MEMPELAI.url
							? ICONS.MEMPELAI_ACTIVE_ICON
							: ICONS.MEMPELAI_ICON,
					label: 'Mempelai',
					isActive: this.$route.path === ROUTES.MEMPELAI.url,
					url: `${ROUTES.MEMPELAI.url}?guestName=${
						this.$route.query.guestName || ''
					}&guestLocation=${this.$route.query.guestLocation || ''}&sesi=${
						this.$route.query.sesi || '1'
					}`,
				},
				{
					icon:
						this.$route.path === ROUTES.ACARA.url
							? ICONS.ACARA_ACTIVE_ICON
							: ICONS.ACARA_ICON,
					label: 'Acara',
					isActive: this.$route.path === ROUTES.ACARA.url,
					url: `${ROUTES.ACARA.url}?guestName=${
						this.$route.query.guestName || ''
					}&guestLocation=${this.$route.query.guestLocation || ''}&sesi=${
						this.$route.query.sesi || '1'
					}`,
				},
				{
					icon:
						this.$route.path === ROUTES.PETA.url
							? ICONS.PETA_ACTIVE_ICON
							: ICONS.PETA_ICON,
					label: 'Peta',
					isActive: this.$route.path === ROUTES.PETA.url,
					url: `${ROUTES.PETA.url}?guestName=${
						this.$route.query.guestName || ''
					}&guestLocation=${this.$route.query.guestLocation || ''}&sesi=${
						this.$route.query.sesi || '1'
					}`,
				},
				{
					icon:
						this.$route.path === ROUTES.PROTOKOL.url
							? ICONS.PROTOKOL_ACTIVE_ICON
							: ICONS.PROTOKOL_ICON,
					label: 'Protokol',
					isActive: this.$route.path === ROUTES.PROTOKOL.url,
					url: `${ROUTES.PROTOKOL.url}?guestName=${
						this.$route.query.guestName || ''
					}&guestLocation=${this.$route.query.guestLocation || ''}&sesi=${
						this.$route.query.sesi || '1'
					}`,
				},
				{
					icon:
						this.$route.path === ROUTES.PENUTUP.url
							? ICONS.PENUTUP_ACTIVE_ICON
							: ICONS.PENUTUP_ICON,
					label: 'Penutup',
					isActive: this.$route.path === ROUTES.PENUTUP.url,
					url: `${ROUTES.PENUTUP.url}?guestName=${
						this.$route.query.guestName || ''
					}&guestLocation=${this.$route.query.guestLocation || ''}&sesi=${
						this.$route.query.sesi || '1'
					}`,
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
	background-color: rgba(0, 0, 0, 0.5);
}
</style>
