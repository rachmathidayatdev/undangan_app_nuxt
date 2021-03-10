import ICONS from '~/constants/icons'
import IMAGES from '~/constants/images'
import ROUTES from '~/constants/routes'

export default {
	components: {
		// UI
		Row: () => import('~/views/ui/Row'),
		Column: () => import('~/views/ui/Column'),
		TextView: () => import('~/views/ui/TextView'),
		TextInput: () => import('~/views/ui/TextInput'),
		BottomSheet: () => import('~/views/ui/BottomSheet'),
	},
	data() {
		return {
			icons: {
				leftArrowIcon: ICONS.LEFT_ARROW_ICON,
				historyNotFoundIcon: ICONS.HISTORY_NOT_FOUND_ICON,
			},
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
			form: {
				keywoard: {
					productName: '',
				},
			},
			isBottomSheetKeywoardShow: false,
		}
	},
	methods: {
		onPageChange() {
			this.$router.back()
		},
		onChange({ field, value }) {
			if (value.length === 0) this.isBottomSheetKeywoardShow = false

			this.form.keywoard[field] = value
		},
		clearValue({ field, defaultValue }) {
			this.form.keywoard[field] = defaultValue
		},
		onSearch() {
			this.isBottomSheetKeywoardShow = true
		},
		closeBottomSheetKeywoard() {
			this.isBottomSheetKeywoardShow = false
		},
		onProductDetailChange(payload) {
			const data = JSON.parse(payload)
			const slug = this.stringToSlug(data.productName)
			this.$router.push(`${ROUTES.PRODUCT_DETAIL.url}/${slug}`)
		},
		stringToSlug(slug) {
			return slug.toLowerCase().split(' ').join('-')
		},
	},
}
