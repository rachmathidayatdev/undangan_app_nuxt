import IMAGES from '~/constants/images'
import ROUTES from '~/constants/routes'

export default {
	components: {
		Row: () => import('~/views/ui/Row'),
		Column: () => import('~/views/ui/Column'),
		TextView: () => import('~/views/ui/TextView'),
		CustomTransition: () => import('~/views/ui/CustomTransition'),
	},
	data() {
		return {
			images: {
				divider: IMAGES.DIVIDER,
				dividerGold: IMAGES.DIVIDER_GOLD,
			},
			isComponentShow: false,
		}
	},
	computed: {
		guestName() {
			return this.$route.query.guestName || ''
		},
		guestLocation() {
			return this.$route.query.guestLocation || ''
		},
		sesi() {
			return this.$route.query.sesi || 1
		},
	},
	mounted() {
		setTimeout(() => {
			this.isComponentShow = true
		}, 500)
	},
	methods: {
		goToMain() {
			this.$router.push(
				`${ROUTES.MEMPELAI.url}?guestName=${this.guestName}&guestLocation=${this.guestLocation}&sesi=${this.sesi}`,
			)
		},
	},
}
