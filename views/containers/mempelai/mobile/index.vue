<template>
	<div class="mempelai">
		<Column
			custom-class="container py-20 px-40"
			justify-content="center"
			align-items="center"
		>
			<CustomTransition name="slide-top-custom">
				<Row
					v-if="isComponentShow"
					align-items="center"
					justify-content="center"
					custom-class="mb-10"
				>
					<img :src="icons.bismillahBlack" style="height: 50px" />
				</Row>
			</CustomTransition>
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-14"
					text-alignment="center"
					font-family="PoppinsRegular"
					>Assalamu'alaikum warahmatullahi wabarakatuh</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-12"
					text-alignment="center"
					font-family="PoppinsRegular"
					>Dengan memohon rahmat dan ridho Allah SWT, Mohon do'a restu
					Bapak/Ibu/Saudara/i dalam rangka melangsungkan pernikahan putra-putri
					kami:</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-left-custom">
				<Row
					v-if="isComponentShow"
					custom-class="mt-10"
					align-items="center"
					justify-content="space-between"
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
						<TextView custom-class="font-20" text-alignment="center"
							>Radita Cahyani S.Kom.</TextView
						>
						<img :src="images.dividerGold" />
						<TextView
							custom-class="font-14"
							text-alignment="center"
							font-family="PoppinsRegular"
							>Putri Pertama</TextView
						>
						<TextView
							custom-class="font-14"
							text-alignment="center"
							font-family="PoppinsRegular"
							>Bapak Yuda Trihatna</TextView
						>
						<TextView
							custom-class="font-14"
							text-alignment="center"
							font-family="PoppinsRegular"
							>Ibu Endang Murtiningsih</TextView
						>
					</Column>
				</Row>
			</CustomTransition>
			<CustomTransition name="bounce-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-38"
					text-alignment="center"
					>&</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-right-custom">
				<Row
					v-if="isComponentShow"
					custom-class="mt-10"
					align-items="center"
					justify-content="space-between"
				>
					<Column col="8" align-items="center">
						<TextView custom-class="font-20" text-alignment="center"
							>Rachmat Hidayat S.T.</TextView
						>
						<img :src="images.dividerGold" />
						<TextView
							custom-class="font-14"
							text-alignment="center"
							font-family="PoppinsRegular"
							>Putra Pertama</TextView
						>
						<TextView
							custom-class="font-14"
							text-alignment="center"
							font-family="PoppinsRegular"
							>Bapak Ismail Aminah</TextView
						>
						<TextView
							custom-class="font-14"
							text-alignment="center"
							font-family="PoppinsRegular"
							>Ibu Siti Arni H. Ajrun</TextView
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
<style lang="scss" scoped>
@import './style';
</style>
