import IMAGES from '~/constants/images'
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
			images: {
				appLogo: IMAGES.APP_LOGO,
				banner: IMAGES.BANNER,
				phone1: IMAGES.PHONE_1,
				phone2: IMAGES.PHONE_2,
				phone3: IMAGES.PHONE_3,
				phoneFrame: IMAGES.PHONE_FRAME,
			},
			icons: {
				fbIcon: ICONS.FB_ICON,
				instagramIcon: ICONS.INSTAGRAM_ICON,
				twitterIcon: ICONS.TWITTER_ICON,
			},
		}
	},
}
