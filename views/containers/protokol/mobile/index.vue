<template>
	<div class="peta">
		<Column custom-class="container px-40" justify-content="center">
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-28 item-title"
					font-color="tan"
					text-alignment="center"
					font-weight="bold"
					>Pencegahan Covid-19</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-12"
					font-color="tan"
					text-alignment="center"
					>Acara ini akan diselenggarakan dengan mematuhi</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-12"
					font-color="tan"
					text-alignment="center"
					>protokol pencegahan penyebaran COVID-19.</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-12 mt-10"
					font-color="tan"
					>Tamu undangan menggunakan masker.</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-12 mt-10"
					font-color="tan"
					text-alignment="right"
					>Suhu Tubuh normal (dibahwah 37,5C)</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-12 mt-10"
					font-color="tan"
					>Jaga jarak antar orang sekitar 2 meter.</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-12 mt-10"
					font-color="tan"
					text-alignment="right"
					>Cuci tangan menggunakan air dan sabun atau menggunakan hand
					sanitizer.</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-12 mt-20"
					font-color="tan"
					text-alignment="center"
					>Bagi para tamu undangan diharapkan mengikuti</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-12"
					font-color="tan"
					text-alignment="center"
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
