import ICONS from '~/constants/icons'
// import ROUTES from '~/constants/routes'

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
			},
			height: 100,
		}
	},
	methods: {
		onPageChange() {
			this.$router.back()
		},
		onPayment() {
			// this.$router.push(ROUTES.PAYMENT.url)
		},
	},
}
