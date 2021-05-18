<template>
	<div class="mempelai">
		<Column
			custom-class="container py-20 px-40"
			justify-content="center"
			align-items="center"
		>
			<Row align-items="center" justify-content="center" custom-class="mb-10">
				<img :src="icons.bismillahBlack" style="height: 50px" />
			</Row>
			<TextView
				custom-class="font-14"
				text-alignment="center"
				font-family="PoppinsRegular"
				font-weight="bold"
				>Assalamu'alaikum warahmatullahi wabarakatuh</TextView
			>
			<TextView
				custom-class="font-12 mt-10"
				text-alignment="center"
				font-family="PoppinsRegular"
				>Puji syukur kepada Allah SWT yang telah melimpahkan rahmat dan
				hidayah-Nya yang telah diberikan kepada kita semua, sholawat dan salam
				kita sanjungkan kepada Nabi Muhammad SAW.</TextView
			>
			<TextView
				custom-class="font-12"
				text-alignment="center"
				font-family="PoppinsRegular"
				>Dengan memohon rahmat dan ridho Allah SWT kami sekeluarga bermaksud
				menyelenggarakan pengajian menjelang akad nikah
				{{ status }} kami:</TextView
			>
			<TextView custom-class="font-20 mt-10" text-alignment="center">{{
				undangan === 'teteh' ? 'Radita Cahyani S.Kom.' : 'Rachmat Hidayat S.T.'
			}}</TextView>
			<TextView custom-class="font-38" text-alignment="center">&</TextView>
			<TextView custom-class="font-20" text-alignment="center">{{
				undangan === 'teteh' ? 'Rachmat Hidayat S.T.' : 'Radita Cahyani S.Kom.'
			}}</TextView>
			<TextView
				custom-class="font-12 mt-10"
				text-alignment="center"
				font-family="PoppinsRegular"
				font-weight="bold"
				>Yang insya Allah akan dilaksanakan pada:</TextView
			>
			<Row custom-class="mt-10" width="300px">
				<Column col="5">
					<Row justify-content="space-between">
						<TextView custom-class="font-12" font-family="PoppinsRegular"
							>Hari/Tanggal</TextView
						>
						<TextView custom-class="font-12" font-family="PoppinsRegular"
							>:</TextView
						>
					</Row>
				</Column>
				<Column col="7">
					<TextView
						custom-class="font-12 ml-5"
						text-alignment="left"
						font-family="PoppinsRegular"
						>Rabu, 26 Mei 2021</TextView
					>
				</Column>
			</Row>
			<Row width="300px">
				<Column col="5">
					<Row justify-content="space-between">
						<TextView custom-class="font-12" font-family="PoppinsRegular"
							>Pukul</TextView
						>
						<TextView custom-class="font-12" font-family="PoppinsRegular"
							>:</TextView
						>
					</Row>
				</Column>
				<Column col="7">
					<TextView
						custom-class="font-12 ml-5"
						text-alignment="left"
						font-family="PoppinsRegular"
						>{{ jam }}</TextView
					>
				</Column>
			</Row>
			<Row width="300px">
				<Column col="5">
					<Row justify-content="space-between">
						<TextView custom-class="font-12" font-family="PoppinsRegular"
							>Alamat</TextView
						>
						<TextView custom-class="font-12" font-family="PoppinsRegular"
							>:</TextView
						>
					</Row>
				</Column>
				<Column col="7">
					<TextView
						custom-class="font-12 ml-5"
						text-alignment="left"
						font-family="PoppinsRegular"
						>{{ alamat }}</TextView
					>
				</Column>
			</Row>
			<TextView
				custom-class="font-12 mt-10"
				text-alignment="center"
				font-family="PoppinsRegular"
				>Merupakan suatu kehormatan bagi kami sekeluarga apabila Ibu-Ibu
				berkenan hadir untuk bersama-sama dalam acara tersebut untuk mendoakan
				mereka agar menjadi keluarga yang sakinah, mawaddah dan warahmah serta
				kelak dikaruniai keturunan yang soleh dan solehah.
			</TextView>
			<TextView
				custom-class="font-12"
				text-alignment="center"
				font-family="PoppinsRegular"
				>Atas kehadiran dan doanya kami ucapkan terima kasih
			</TextView>
			<TextView
				custom-class="font-14 mt-10"
				text-alignment="center"
				font-family="PoppinsRegular"
				font-weight="bold"
				>Wassalamu'alaikum warahmatullahi wabarakatuh</TextView
			>
			<TextView
				custom-class="font-14 mt-10"
				text-alignment="center"
				font-family="PoppinsRegular"
				font-weight="bold"
				>Hormat kami,</TextView
			>
			<TextView
				custom-class="font-14 mt-10"
				text-alignment="center"
				font-family="PoppinsRegular"
				font-weight="bold"
				>{{ orangTua }}</TextView
			>
		</Column>
	</div>
</template>

<!-- Scripts -->
<script src="./script.js" />

<!-- Styles -->
<style lang="scss">
@import './style';
</style>
