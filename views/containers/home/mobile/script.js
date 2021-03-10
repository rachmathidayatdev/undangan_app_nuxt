import IMAGES from '~/constants/images'

export default {
	components: {
		Row: () => import('~/views/ui/Row'),
		Column: () => import('~/views/ui/Column'),
		TextView: () => import('~/views/ui/TextView'),
	},
	data() {
		return {
			images: {
				divider: IMAGES.DIVIDER,
			},
		}
	},
	computed: {
		guestName() {
			return this.$route.query.guestName || '-'
		},
		guestLocation() {
			return this.$route.query.guestLocation || '-'
		},
	},
	mounted() {},
	methods: {},
}
