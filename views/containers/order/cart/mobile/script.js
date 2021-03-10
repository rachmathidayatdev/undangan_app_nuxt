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
				leftArrowIcon: ICONS.LEFT_ARROW_ICON,
			},
			carts: [
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
					price: 10000,
				},
			],
		}
	},
	created() {
		const carts = this.carts.map((item) => {
			return {
				qty: 1,
				...item,
			}
		})
		this.carts = carts
	},
	methods: {
		onPageChange() {
			this.$router.back()
		},
		onQtyChange(payload) {
			const data = JSON.parse(payload)
			const carts = this.carts.map((item) => {
				const qtyTmp = item.qty + parseInt(data.qty)
				let newQty = 0
				if (qtyTmp === 0) newQty = item.qty
				else newQty = qtyTmp

				return {
					...item,
					qty: data.id === item.id ? newQty : item.qty,
				}
			})

			this.carts = carts
		},
		onCheckout() {
			this.$router.push(ROUTES.CHECKOUT.url)
		},
	},
}
