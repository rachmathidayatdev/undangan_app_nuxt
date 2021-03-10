import IMAGES from '~/constants/images'
import ICONS from '~/constants/icons'
import ROUTES from '~/constants/routes'

export default {
	components: {
		// Compnent
		SpinnerRing: () => import('~/views/components/Loader/SpinnerRing'),

		// UI
		Row: () => import('~/views/ui/Row'),
		Column: () => import('~/views/ui/Column'),
		TextView: () => import('~/views/ui/TextView'),
		TextInput: () => import('~/views/ui/TextInput'),
	},
	data() {
		return {
			images: {
				splashScreen: IMAGES.SPLASH_SCREEN,
			},
			icons: {
				burgerMenuIcon: ICONS.BURGER_MENU_ICON,
				shoppingCartIcon: ICONS.SHOPPING_CART_ICON,
			},
			form: {
				keywoard: {
					productName: '',
				},
			},
			menus: [
				{
					id: 1,
					label: 'Foods',
					isActive: true,
				},
				{
					id: 2,
					label: 'Drinks',
					isActive: false,
				},
				{
					id: 3,
					label: 'Snacks',
					isActive: false,
				},
				{
					id: 4,
					label: 'Sauce',
					isActive: false,
				},
			],
			products: [
				{
					id: 1,
					productName: 'Nasi Goreng Seafood',
					imageUrl: IMAGES.FOOD_1,
					price: 10000,
				},
				{
					id: 2,
					productName: 'Nasi Goreng Sapi',
					imageUrl: IMAGES.FOOD_2,
					price: 12000,
				},
				{
					id: 3,
					productName: 'Nasi Goreng Seafood',
					imageUrl: IMAGES.FOOD_1,
					price: 10000,
				},
				{
					id: 4,
					productName: 'Nasi Goreng Sapi',
					imageUrl: IMAGES.FOOD_2,
					price: 12000,
				},
				{
					id: 5,
					productName: 'Nasi Goreng Seafood',
					imageUrl: IMAGES.FOOD_1,
					price: 10000,
				},
				{
					id: 6,
					productName: 'Nasi Goreng Sapi',
					imageUrl: IMAGES.FOOD_2,
					price: 12000,
				},
			],
			isLoading: false,
		}
	},
	created() {
		this.isLoading = true
		setTimeout(() => {
			this.isLoading = false
		}, 2000)
	},
	methods: {
		onChange({ field, value }) {
			this.form.keywoard[field] = value
		},
		clearValue({ field, defaultValue }) {
			this.form.keywoard[field] = defaultValue
		},
		onMenuChange(id) {
			const menus = this.menus.map((item) => {
				return {
					...item,
					isActive: item.id === id,
				}
			})

			this.menus = menus
			this.isLoading = true
			setTimeout(() => {
				this.isLoading = false
			}, 2000)
		},
		onPageChange(payload) {
			const data = JSON.parse(payload)
			const slug = this.stringToSlug(data.productName)
			this.$router.push(`${ROUTES.PRODUCT_DETAIL.url}/${slug}`)
		},
		stringToSlug(slug) {
			return slug.toLowerCase().split(' ').join('-')
		},
		onOrderPageChange() {
			this.$router.push(ROUTES.ORDER_LIST.url)
		},
		onSearchPageChange() {
			this.$router.push(ROUTES.PRODUCT_SEARCH.url)
		},
	},
}
