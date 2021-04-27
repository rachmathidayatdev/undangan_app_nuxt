import moment from 'moment'
import IMAGES from '~/constants/images'

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
			isComponentShow: false,
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
			myInterval: 0,
			jamAkad: '07.00 - 08.00',
		}
	},
	computed: {
		guestName() {
			return this.$route.query.guestName || ''
		},
		guestLocation() {
			return this.$route.query.guestLocation || ''
		},
		jamResepsi() {
			const sesi = this.$route.query.sesi || 1
			if (sesi === '1') {
				return '10.00 - 11.00'
			} else if (sesi === '2') {
				return '11.00 - 12.00'
			} else {
				return '12.00 - 13.00'
			}
		},
		startTime() {
			const sesi = this.$route.query.sesi || 1
			if (sesi === '1') {
				return '10:00:00'
			} else if (sesi === '2') {
				return '11:00:00'
			} else {
				return '12:00:00'
			}
		},
		daysDisplay() {
			return this.days < 10 ? `0${this.days}` : this.days
		},
		hoursDisplay() {
			return this.hours < 10 ? `0${this.hours}` : this.hours
		},
		minutesDisplay() {
			return this.minutes < 10 ? `0${this.minutes}` : this.minutes
		},
		secondsDisplay() {
			return this.seconds < 10 ? `0${this.seconds}` : this.seconds
		},
	},
	mounted() {
		setTimeout(() => {
			this.isComponentShow = true
		}, 500)

		this.myInterval = setInterval(() => {
			this.timer()
		}, 1000)
	},
	methods: {
		timer() {
			const startDate = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
			const endDate = moment(`2021-05-29 ${this.startTime}`)
			const days = endDate.diff(startDate, 'days')
			this.days = days
			const hours = endDate.diff(startDate, 'hours')
			this.hours = hours % 24
			const minutes = endDate.diff(startDate, 'minutes')
			this.minutes = minutes % 60
			const seconds = endDate.diff(startDate, 'seconds')
			this.seconds = seconds % 60
		},
	},
	beforeDestroy() {
		clearInterval(this.myInterval)
	},
}
