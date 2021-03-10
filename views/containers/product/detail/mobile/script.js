import ICONS from '~/constants/icons'
import IMAGES from '~/constants/images'
import ROUTES from '~/constants/routes'

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
				favoritIcon: ICONS.FAVORIT_ICON,
				favoritActiveIcon: ICONS.FAVORIT_ACTIVE_ICON,
				leftArrowIcon: ICONS.LEFT_ARROW_ICON,
			},
			product: {
				id: 1,
				productName: 'Nasi Goreng Seafood',
				imageUrl: IMAGES.FOOD_1,
				price: 10000,
			},
			isFavorit: false,
		}
	},
	methods: {
		onPageChange() {
			this.$router.back()
		},
		onFavoritChange() {
			this.isFavorit = !this.isFavorit
		},
		onAddToCart() {
			this.$router.push(ROUTES.CART.url)
		},
	},
}
