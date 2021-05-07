<template>
	<div class="peta">
		<Column
			custom-class="container px-20"
			align-items="center"
			justify-content="center"
		>
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-38 mb-10"
					font-color="goldenDream"
					text-alignment="center"
					font-weight="400"
					font-family="Niconne"
					>Peta Lokasi</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-14"
					font-color="goldenDream"
					text-alignment="center"
					font-family="PoppinsRegular"
					>Jalan Kemakmuran No.72, Marga Jaya, Bekasi Selatan, RT.005/RW.002,
					Marga Jaya, Kec. Bekasi Sel., Kota Bks, Jawa Barat 17141,
					Indonesia</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-top-custom">
				<Row v-if="isComponentShow" custom-class="mt-10">
					<iframe
						id="gmap_canvas"
						width="100%"
						height="300"
						frameborder="0"
						scrolling="no"
						marginheight="0"
						marginwidth="0"
						src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Aula%20Muzdalifah%20Jakarta+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
					></iframe>
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
