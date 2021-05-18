import ICONS from '~/constants/icons'

export default {
	components: {
		Row: () => import('~/views/ui/Row'),
		Column: () => import('~/views/ui/Column'),
		TextView: () => import('~/views/ui/TextView'),
	},
	data() {
		return {
			icons: {
				bismillahBlack: ICONS.BISMILLAH_BLACK_ICON,
			},
			isComponentShow: false,
		}
	},
	computed: {
		undangan() {
			return this.$route.query.undangan || 'teteh'
		},
		status() {
			return this.undangan === 'teteh' ? 'Putri' : 'Putra'
		},
		alamat() {
			return this.undangan === 'teteh'
				? `Pondok Ungu Permai Blok F 22 No. 2, RT. 08, RW. 012, Kelurahan Kaliabang, Kecamatan
			Bekasi Utara`
				: 'Pondok Ungu Permai Blok AM 4 No.6, RT. 012, RW. 011, Kelurahan Bahagia, Kecamatan Babelan'
		},
		jam() {
			return this.undangan === 'teteh'
				? '10.00 WIB - Selesai'
				: '12.30 WIB (Ba`da Dzuhur) - Selesai'
		},
		orangTua() {
			return this.undangan === 'teteh'
				? 'Bapak Yuda Trihatna & Ibu Endang Murtiningsih'
				: 'Bapak Ismail Aminah & Ibu Siti Arni H. Ajrun'
		},
	},
}
