<template>
	<div class="acara">
		<Column custom-class="container px-40" justify-content="center">
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-38 item-title mb-10"
					font-color="goldenDream"
					text-alignment="center"
					font-weight="400"
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
			<CustomTransition name="bounce-custom">
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
						<Column
							custom-class="rounded-box"
							align-items="center"
							justify-content="center"
							height="50px"
							width="50px"
						>
							<TextView
								custom-class="font-28"
								font-color="goldenDream"
								text-alignment="center"
								font-weight="bold"
								>29</TextView
							>
						</Column>
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
			<CustomTransition name="bounce-custom">
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
			<CustomTransition name="bounce-custom">
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
						<Column
							custom-class="rounded-box"
							align-items="center"
							justify-content="center"
							height="50px"
							width="50px"
						>
							<TextView
								custom-class="font-28"
								font-color="goldenDream"
								text-alignment="center"
								font-weight="bold"
								>29</TextView
							>
						</Column>
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
			<CustomTransition name="bounce-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-14 my-10"
					font-color="goldenDream"
					text-alignment="center"
					>Aula Muzdalifah, Islamic Center Bekasi</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-bottom-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-14 mb-10"
					font-color="goldenDream"
					text-alignment="center"
					>Hitungan Mundur Acara Resepsi</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-bottom-custom">
				<Row v-if="isComponentShow">
					<Column
						col="3"
						align-items="center"
						justify-content="center"
						custom-class="px-5 rounded-box"
						height="72px"
						width="72px"
					>
						<TextView
							custom-class="font-18"
							font-color="goldenDream"
							text-alignment="center"
							font-weight="bold"
							>{{ daysDisplay }}</TextView
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
						custom-class="px-5"
					>
						<Column
							custom-class="rounded-box"
							align-items="center"
							justify-content="center"
							height="65px"
							width="65px"
						>
							<TextView
								custom-class="font-18"
								font-color="goldenDream"
								text-alignment="center"
								font-weight="bold"
								>{{ hoursDisplay }}</TextView
							>
							<TextView
								custom-class="font-14"
								font-color="goldenDream"
								text-alignment="center"
								font-weight="bold"
								>Jam</TextView
							>
						</Column>
					</Column>
					<Column
						col="3"
						align-items="center"
						justify-content="center"
						custom-class="px-5"
					>
						<Column
							custom-class="rounded-box"
							align-items="center"
							justify-content="center"
							height="65px"
							width="65px"
						>
							<TextView
								custom-class="font-18"
								font-color="goldenDream"
								text-alignment="center"
								font-weight="bold"
								>{{ minutesDisplay }}</TextView
							>
							<TextView
								custom-class="font-14"
								font-color="goldenDream"
								text-alignment="center"
								font-weight="bold"
								>Menit</TextView
							>
						</Column>
					</Column>
					<Column
						col="3"
						align-items="center"
						justify-content="center"
						custom-class="px-5"
					>
						<Column
							custom-class="rounded-box"
							align-items="center"
							justify-content="center"
							height="65px"
							width="65px"
						>
							<TextView
								custom-class="font-18"
								font-color="goldenDream"
								text-alignment="center"
								font-weight="bold"
								>{{ secondsDisplay }}</TextView
							>
							<TextView
								custom-class="font-14"
								font-color="goldenDream"
								text-alignment="center"
								font-weight="bold"
								>Detik</TextView
							>
						</Column>
					</Column>
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
