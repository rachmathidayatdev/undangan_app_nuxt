<template>
	<div class="mempelai">
		<Column custom-class="container px-40" justify-content="center">
			<CustomTransition name="slide-top-custom">
				<Row
					v-if="isComponentShow"
					align-items="center"
					justify-content="center"
					custom-class="mb-10"
				>
					<img :src="icons.bismillah" width="200" />
				</Row>
			</CustomTransition>
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-14"
					font-color="goldenDream"
					text-alignment="center"
					font-family="PoppinsRegular"
					>Assalamu'alaikum warahmatullahi wabarakatuh</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-12"
					font-color="goldenDream"
					text-alignment="center"
					font-family="PoppinsRegular"
					>Dengan memohon rahmat dan ridho Allah SWT,</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-12"
					font-color="goldenDream"
					text-alignment="center"
					font-family="PoppinsRegular"
					>Mohon do'a restu Bapak/Ibu/Saudara/i dalam rangka</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-12"
					font-color="goldenDream"
					text-alignment="center"
					font-family="PoppinsRegular"
					>melangsungkan pernikahan putra-putri kami:</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-left-custom">
				<Row
					v-if="isComponentShow"
					custom-class="mt-10"
					align-items="center"
					justify-content="center"
				>
					<Column col="4" align-items="center" justify-content="center">
						<div class="rounded-box" style="width: 100px; height=100px">
							<img
								:src="images.cpw"
								class="border-radius-50"
								style="height: 100px; width: 100px; object-fit: cover"
							/>
						</div>
					</Column>
					<Column col="8" align-items="center">
						<TextView
							custom-class="font-22"
							font-color="goldenDream"
							text-alignment="center"
							>Radita Cahyani</TextView
						>
						<img :src="images.divider" />
						<TextView
							custom-class="font-14"
							font-color="goldenDream"
							text-alignment="center"
							font-family="PoppinsRegular"
							>Putri Pertama</TextView
						>
						<TextView
							custom-class="font-14"
							font-color="goldenDream"
							text-alignment="center"
							font-family="PoppinsRegular"
							>Bapak Yuda Trihatna</TextView
						>
						<TextView
							custom-class="font-14"
							font-color="goldenDream"
							text-alignment="center"
							font-family="PoppinsRegular"
							>Ibu Endang</TextView
						>
					</Column>
				</Row>
			</CustomTransition>
			<CustomTransition name="bounce-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-38"
					font-color="goldenDream"
					text-alignment="center"
					>&</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-right-custom">
				<Row
					v-if="isComponentShow"
					custom-class="mt-10"
					align-items="center"
					justify-content="center"
				>
					<Column col="8" align-items="center">
						<TextView
							custom-class="font-22"
							font-color="goldenDream"
							text-alignment="center"
							>Rachmat Hidayat</TextView
						>
						<img :src="images.divider" />
						<TextView
							custom-class="font-14"
							font-color="goldenDream"
							text-alignment="center"
							font-family="PoppinsRegular"
							>Putra Pertama</TextView
						>
						<TextView
							custom-class="font-14"
							font-color="goldenDream"
							text-alignment="center"
							font-family="PoppinsRegular"
							>Bapak Ismail Aminah</TextView
						>
						<TextView
							custom-class="font-14"
							font-color="goldenDream"
							text-alignment="center"
							font-family="PoppinsRegular"
							>Ibu Arni</TextView
						>
					</Column>
					<Column col="4" align-items="center" justify-content="center">
						<div class="rounded-box" style="width: 100px; height=100px">
							<img
								:src="images.cpp"
								class="border-radius-50"
								style="height: 100px; width: 100px; object-fit: cover"
							/>
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
<style lang="scss">
@import './style';
</style>
