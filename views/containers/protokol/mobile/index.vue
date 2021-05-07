<template>
	<div class="peta">
		<Column custom-class="container px-40" justify-content="center">
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-38 mb-10"
					font-color="goldenDream"
					text-alignment="center"
					font-weight="400"
					font-family="Niconne"
					>Pencegahan Covid-19</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-12"
					font-color="goldenDream"
					text-alignment="center"
					font-family="PoppinsRegular"
					>Acara ini akan diselenggarakan dengan mematuhi</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-12"
					font-color="goldenDream"
					text-alignment="center"
					font-family="PoppinsRegular"
					>protokol pencegahan penyebaran COVID-19.</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-right-custom">
				<Row v-if="isComponentShow" align-items="center" custom-class="mt-10">
					<Column col="2">
						<img :src="icons.mask" height="50" width="50" />
					</Column>
					<Column col="10">
						<TextView
							custom-class="font-14"
							font-color="goldenDream"
							font-family="PoppinsRegular"
							>Tamu undangan menggunakan masker.</TextView
						>
					</Column>
				</Row>
			</CustomTransition>
			<CustomTransition name="slide-left-custom">
				<Row
					v-if="isComponentShow"
					align-items="center"
					custom-class="mt-10"
					justify-content="flex-end"
				>
					<Column col="10">
						<TextView
							custom-class="font-14"
							font-color="goldenDream"
							text-alignment="right"
							font-family="PoppinsRegular"
							>Suhu Tubuh normal (dibahwah 37,5C)</TextView
						>
					</Column>
					<Column col="2">
						<img :src="icons.heat" height="50" width="50" />
					</Column>
				</Row>
			</CustomTransition>
			<CustomTransition name="slide-right-custom">
				<Row v-if="isComponentShow" align-items="center" custom-class="mt-10">
					<Column col="2">
						<img :src="icons.distance" height="50" width="50" />
					</Column>
					<Column col="10">
						<TextView
							custom-class="font-14"
							font-color="goldenDream"
							font-family="PoppinsRegular"
							>Jaga jarak antar orang sekitar 2 meter.</TextView
						>
					</Column>
				</Row>
			</CustomTransition>
			<CustomTransition name="slide-left-custom">
				<Row
					v-if="isComponentShow"
					align-items="center"
					custom-class="mt-10"
					justify-content="flex-end"
				>
					<Column col="10">
						<TextView
							custom-class="font-14"
							font-color="goldenDream"
							text-alignment="right"
							font-family="PoppinsRegular"
							>Cuci tangan menggunakan air dan sabun atau menggunakan hand
							sanitizer.</TextView
						>
					</Column>
					<Column col="2">
						<img :src="icons.handWashing" height="50" width="50" />
					</Column>
				</Row>
			</CustomTransition>
			<CustomTransition name="slide-bottom-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-12 mt-20"
					font-color="goldenDream"
					text-alignment="center"
					font-family="PoppinsRegular"
					>Bagi para tamu undangan diharapkan mengikuti</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-bottom-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-12"
					font-color="goldenDream"
					text-alignment="center"
					font-family="PoppinsRegular"
					>protokol pencegahan COVID-19</TextView
				>
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
