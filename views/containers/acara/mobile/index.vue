<template>
	<div class="acara">
		<Column custom-class="container px-40" justify-content="center">
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-28 item-title mb-10"
					font-color="goldenDream"
					text-alignment="center"
					font-weight="bold"
					>Rangkaian Acara</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-24 line-center"
					font-color="goldenDream"
					text-alignment="center"
					><span class="line-text-center">Akad Nikah</span></TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-top-custom">
				<Row v-if="isComponentShow" custom-class="mt-5">
					<Column col="5">
						<TextView
							custom-class="font-16 mr-5"
							font-color="goldenDream"
							text-alignment="right"
							font-weight="bold"
							>Sabtu</TextView
						>
						<TextView
							custom-class="font-14 mr-5"
							font-color="goldenDream"
							text-alignment="right"
							>{{ jamAkad }} WIB</TextView
						>
					</Column>
					<Column col="2">
						<TextView
							custom-class="font-28 item-tanggal"
							font-color="goldenDream"
							text-alignment="center"
							font-weight="bold"
							>29</TextView
						>
					</Column>
					<Column col="5">
						<TextView
							custom-class="font-16 ml-5"
							font-color="goldenDream"
							font-weight="bold"
							>Mei</TextView
						>
						<TextView custom-class="font-14 ml-5" font-color="goldenDream"
							>2021</TextView
						>
					</Column>
				</Row>
			</CustomTransition>
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-14 my-10"
					font-color="goldenDream"
					text-alignment="center"
					>Aula Muzdalifah, Islamic Center Bekasi</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-24 line-center"
					font-color="goldenDream"
					text-alignment="center"
					><span class="line-text-center">Resepsi</span></TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-top-custom">
				<Row v-if="isComponentShow" custom-class="mt-5">
					<Column col="5">
						<TextView
							custom-class="font-16 mr-5"
							font-color="goldenDream"
							text-alignment="right"
							font-weight="bold"
							>Sabtu</TextView
						>
						<TextView
							custom-class="font-14 mr-5"
							font-color="goldenDream"
							text-alignment="right"
							>{{ jamResepsi }} WIB</TextView
						>
					</Column>
					<Column col="2">
						<TextView
							custom-class="font-28 item-tanggal"
							font-color="goldenDream"
							text-alignment="center"
							font-weight="bold"
							>29</TextView
						>
					</Column>
					<Column col="5">
						<TextView
							custom-class="font-16 ml-5"
							font-color="goldenDream"
							font-weight="bold"
							>Mei</TextView
						>
						<TextView custom-class="font-14 ml-5" font-color="goldenDream"
							>2021</TextView
						>
					</Column>
				</Row>
			</CustomTransition>
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-14 my-10"
					font-color="goldenDream"
					text-alignment="center"
					>Aula Muzdalifah, Islamic Center Bekasi</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-14 mb-10"
					font-color="goldenDream"
					text-alignment="center"
					>Hitungan Mundur Acara Resepsi</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-top-custom">
				<Row v-if="isComponentShow">
					<Column
						col="3"
						align-items="center"
						justify-content="center"
						custom-class="px-5 rounded-box"
						height="75px"
					>
						<TextView
							custom-class="font-18"
							font-color="goldenDream"
							text-alignment="center"
							font-weight="bold"
							>{{ days }}</TextView
						>
						<TextView
							custom-class="font-14"
							font-color="goldenDream"
							text-alignment="center"
							font-weight="bold"
							>Hari</TextView
						>
					</Column>
					<Column
						col="3"
						align-items="center"
						justify-content="center"
						custom-class="px-5 rounded-box"
						height="75px"
					>
						<TextView
							custom-class="font-18"
							font-color="goldenDream"
							text-alignment="center"
							font-weight="bold"
							>{{ hours }}</TextView
						>
						<TextView
							custom-class="font-14"
							font-color="goldenDream"
							text-alignment="center"
							font-weight="bold"
							>Jam</TextView
						>
					</Column>
					<Column
						col="3"
						align-items="center"
						justify-content="center"
						custom-class="px-5 rounded-box"
						height="75px"
					>
						<TextView
							custom-class="font-18"
							font-color="goldenDream"
							text-alignment="center"
							font-weight="bold"
							>{{ minutes }}</TextView
						>
						<TextView
							custom-class="font-14"
							font-color="goldenDream"
							text-alignment="center"
							font-weight="bold"
							>Menit</TextView
						></Column
					>
					<Column
						col="3"
						align-items="center"
						justify-content="center"
						custom-class="px-5 rounded-box"
						height="75px"
					>
						<TextView
							custom-class="font-18"
							font-color="goldenDream"
							text-alignment="center"
							font-weight="bold"
							>{{ seconds }}</TextView
						>
						<TextView
							custom-class="font-14"
							font-color="goldenDream"
							text-alignment="center"
							font-weight="bold"
							>Detik</TextView
						></Column
					>
				</Row>
			</CustomTransition>
		</Column>
	</div>
</template>

<!-- Scripts -->
<script src="./script.js" />

<!-- Styles -->
<style lang="scss">
@import './style';
</style>
