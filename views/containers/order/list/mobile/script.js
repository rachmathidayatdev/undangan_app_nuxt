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
				shoppingCartIcon: ICONS.SHOPPING_CART_ICON,
			},
		}
	},
	methods: {
		onPageChange() {
			this.$router.back()
		},
		onOrder() {},
	},
}
