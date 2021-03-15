import IMAGES from '~/constants/images'
import ICONS from '~/constants/icons'

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
			},
			icons: {
				distance: ICONS.DISTANCE_ICON,
				handWashing: ICONS.HAND_WASHING_ICON,
				heat: ICONS.HEAT_ICON,
				mask: ICONS.MASK_ICON,
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
	},
	mounted() {
		setTimeout(() => {
			this.isComponentShow = true
		}, 500)
	},
	methods: {},
}
