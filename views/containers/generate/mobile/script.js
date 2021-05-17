export default {
	components: {
		Row: () => import('~/views/ui/Row'),
		Column: () => import('~/views/ui/Column'),
		TextView: () => import('~/views/ui/TextView'),
		TextInput: () => import('~/views/ui/TextInput'),
		CustomTransition: () => import('~/views/ui/CustomTransition'),
	},
	data() {
		return {
			isComponentShow: false,
			guestName: '',
			guestLocation: 'Di%20Tempat',
			newLineCode: '\n',
			sesi: 2,
			message: '',
		}
	},
	computed: {
		undangan() {
			return this.$route.query.undangan || 'ortu'
		},
		undanganMessage() {
			return this.undangan === 'ortu' ? this.undanganOrtu : this.undanganTemen
		},
		undanganOrtu() {
			return `http://invitation-radita-rachmat.herokuapp.com/?guestName=${this.guestName}&guestLocation=${this.guestLocation}&sesi=${this.sesi}${this.newLineCode}${this.newLineCode}Assalamu'alaikum Warahmatullahi Wabarakatuh${this.newLineCode}${this.newLineCode}Bismillahirrahmanirrahim.${this.newLineCode}${this.newLineCode}Undangan ini merupakan undangan resmi dari kami.${this.newLineCode}${this.newLineCode}Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, teman sekaligus sahabat, untuk menghadiri acara pernikahan putra dan putri kami.${this.newLineCode}${this.newLineCode}Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.${this.newLineCode}${this.newLineCode}Terima Kasih.${this.newLineCode}Wassalamu'alaikum Warahmatullah Wabarakatuh${this.newLineCode}${this.newLineCode}Hormat kami,${this.newLineCode}Yuda Trihatna & Endang Murtiningsih`
		},
		undanganTemen() {
			return `http://invitation-radita-rachmat.herokuapp.com/?guestName=${this.guestName}&guestLocation=${this.guestLocation}&sesi=${this.sesi}${this.newLineCode}${this.newLineCode}Assalamu'alaikum Warahmatullahi Wabarakatuh${this.newLineCode}${this.newLineCode}Bismillahirrahmanirrahim.${this.newLineCode}${this.newLineCode}Undangan ini merupakan undangan resmi dari kami.${this.newLineCode}${this.newLineCode}Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, teman sekaligus sahabat, untuk menghadiri acara kami.${this.newLineCode}${this.newLineCode}Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.${this.newLineCode}${this.newLineCode}Terima Kasih.${this.newLineCode}Wassalamu'alaikum Warahmatullah Wabarakatuh${this.newLineCode}${this.newLineCode}Hormat kami,${this.newLineCode}Radita & Rachmat`
		},
	},
	mounted() {
		setTimeout(() => {
			this.isComponentShow = true
		}, 500)
	},
	methods: {
		onGenerateData() {
			const copyTextarea = document.querySelector('#dataUndangan')
			copyTextarea.focus()
			copyTextarea.select()

			try {
				const successful = document.execCommand('copy')
				const msg = successful ? 'successful' : 'unsuccessful'
				console.log('Copying text command was ' + msg)
			} catch (err) {
				console.log('Oops, unable to copy')
			}
		},
		onChange({ field, value }) {
			this[field] = value
		},
	},
}
