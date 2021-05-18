<template>
	<div class="acara">
		<Column custom-class="container py-20 px-40" justify-content="center">
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-38 item-title mb-10"
					text-alignment="center"
					font-weight="400"
					>Rangkaian Acara</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-24 line-center"
					text-alignment="center"
					><span class="line-text-center">Akad Nikah</span></TextView
				>
			</CustomTransition>
			<CustomTransition name="bounce-custom">
				<Row v-if="isComponentShow" custom-class="mt-5">
					<Column col="5">
						<TextView
							custom-class="font-16 mr-15"
							text-alignment="right"
							font-weight="bold"
							font-family="PoppinsRegular"
							>Sabtu</TextView
						>
						<TextView
							custom-class="font-14 mr-15"
							text-alignment="right"
							font-family="PoppinsRegular"
							>{{ jamAkad }} WIB</TextView
						>
					</Column>
					<Column col="2" align-items="center" justify-content="center">
						<div class="rounded-box py-7 px-15" style="width: 60px">
							<TextView
								custom-class="font-28"
								text-alignment="center"
								font-weight="bold"
								>29</TextView
							>
						</div>
					</Column>
					<Column col="5">
						<TextView
							custom-class="font-16 ml-15"
							font-weight="bold"
							font-family="PoppinsRegular"
							>Mei</TextView
						>
						<TextView custom-class="font-14 ml-15" font-family="PoppinsRegular"
							>2021</TextView
						>
					</Column>
				</Row>
			</CustomTransition>
			<CustomTransition name="bounce-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-14 my-10"
					text-alignment="center"
					font-family="PoppinsRegular"
					>Aula Muzdalifah, Islamic Center Bekasi</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-24 line-center"
					text-alignment="center"
					><span class="line-text-center">Resepsi</span></TextView
				>
			</CustomTransition>
			<CustomTransition name="bounce-custom">
				<Row v-if="isComponentShow" custom-class="mt-5">
					<Column col="5">
						<TextView
							custom-class="font-16 mr-15"
							text-alignment="right"
							font-weight="bold"
							font-family="PoppinsRegular"
							>Sabtu</TextView
						>
						<TextView
							custom-class="font-14 mr-15"
							text-alignment="right"
							font-family="PoppinsRegular"
							font-weight="bold"
							>{{ jamResepsi }} WIB</TextView
						>
					</Column>
					<Column col="2" align-items="center" justify-content="center">
						<div class="rounded-box py-7 px-15" style="width: 60px">
							<TextView
								custom-class="font-28"
								text-alignment="center"
								font-weight="bold"
								>29</TextView
							>
						</div>
					</Column>
					<Column col="5">
						<TextView
							custom-class="font-16 ml-15"
							font-weight="bold"
							font-family="PoppinsRegular"
							>Mei</TextView
						>
						<TextView custom-class="font-14 ml-15" font-family="PoppinsRegular"
							>2021</TextView
						>
					</Column>
				</Row>
			</CustomTransition>
			<CustomTransition name="bounce-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-14 my-10"
					text-alignment="center"
					font-family="PoppinsRegular"
					>Aula Muzdalifah, Islamic Center Bekasi</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-bottom-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-14 mb-10"
					text-alignment="center"
					font-family="PoppinsRegular"
					>Hitungan Mundur Acara Resepsi</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-bottom-custom">
				<Row v-if="isComponentShow">
					<Column
						col="3"
						align-items="center"
						justify-content="center"
						custom-class="px-5"
					>
						<div class="rounded-box py-7 px-15" style="width: 65px">
							<TextView
								custom-class="font-18"
								text-alignment="center"
								font-weight="bold"
								>{{ daysDisplay }}</TextView
							>
							<TextView
								custom-class="font-14"
								text-alignment="center"
								font-weight="bold"
								>Hari</TextView
							>
						</div>
					</Column>
					<Column
						col="3"
						align-items="center"
						justify-content="center"
						custom-class="px-5"
					>
						<div class="rounded-box py-7 px-15" style="width: 65px">
							<TextView
								custom-class="font-18"
								text-alignment="center"
								font-weight="bold"
								>{{ hoursDisplay }}</TextView
							>
							<TextView
								custom-class="font-14"
								text-alignment="center"
								font-weight="bold"
								>Jam</TextView
							>
						</div>
					</Column>
					<Column
						col="3"
						align-items="center"
						justify-content="center"
						custom-class="px-5"
					>
						<div class="rounded-box py-7 px-15" style="width: 65px">
							<TextView
								custom-class="font-18"
								text-alignment="center"
								font-weight="bold"
								>{{ minutesDisplay }}</TextView
							>
							<TextView
								custom-class="font-14"
								text-alignment="center"
								font-weight="bold"
								>Menit</TextView
							>
						</div>
					</Column>
					<Column
						col="3"
						align-items="center"
						justify-content="center"
						custom-class="px-5"
					>
						<div class="rounded-box py-7 px-15" style="width: 65px">
							<TextView
								custom-class="font-18"
								text-alignment="center"
								font-weight="bold"
								>{{ secondsDisplay }}</TextView
							>
							<TextView
								custom-class="font-14"
								text-alignment="center"
								font-weight="bold"
								>Detik</TextView
							>
						</div>
					</Column>
				</Row>
			</CustomTransition>
		</Column>
	</div>
</template>

<!-- Scripts -->
<script src="./script.js" />

<!-- Styles -->
<style lang="scss" scoped>
@import './style';
</style>
