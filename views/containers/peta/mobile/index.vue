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
					custom-class="font-28 item-title"
					font-color="tan"
					text-alignment="center"
					font-weight="bold"
					>Peta Lokasi</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-12"
					font-color="tan"
					text-alignment="center"
					>Jalan Kemakmuran No.72, Marga Jaya, Bekasi Selatan, RT.005/RW.002,
					Marga Jaya, Kec. Bekasi Sel., Kota Bks, Jawa Barat 17141</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-top-custom">
				<Row v-if="isComponentShow" custom-class="mt-10">
					<iframe
						width="100%"
						height="300"
						frameborder="0"
						scrolling="yes"
						marginheight="0"
						marginwidth="0"
						src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Jalan%20Kemakmuran%20No.72,%20Marga%20Jaya,%20Bekasi%20Selatan,%20RT.005/RW.002,%20%09%09%09%09%09Marga%20Jaya,%20Kec.%20Bekasi%20Sel.,%20Kota%20Bks,%20Jawa%20Barat%2017141+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
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
