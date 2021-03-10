import ICONS from '~/constants/icons'

export default {
	components: {
		// UI
		Row: () => import('~/views/ui/Row'),
		Column: () => import('~/views/ui/Column'),
		TextView: () => import('~/views/ui/TextView'),
	},
	data() {
		return {
			icons: {
				leftArrowIcon: ICONS.LEFT_ARROW_ICON,
				historyNotFoundIcon: ICONS.HISTORY_NOT_FOUND_ICON,
			},
		}
	},
	mounted() {},
	methods: {
		onPageChange() {
			this.$router.back()
		},
		onOrder() {},
	},
}
