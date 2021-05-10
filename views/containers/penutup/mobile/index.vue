<template>
	<div class="penutup">
		<Column
			custom-class="container py-20 px-40"
			justify-content="center"
			align-items="center"
		>
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-38 item-title mb-10"
					text-alignment="center"
					font-weight="400"
					font-family="Niconne"
					>Penutup</TextView
				>
			</CustomTransition>
			<CustomTransition name="bounce-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-14"
					text-alignment="center"
					font-family="PoppinsRegular"
					>Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
					Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada
					kedua mempelai.</TextView
				>
			</CustomTransition>
			<CustomTransition name="bounce-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-14 mt-10"
					text-alignment="center"
					font-family="PoppinsRegular"
					>"Dan Kami menciptakan kamu berpasang-pasangan."</TextView
				>
			</CustomTransition>
			<CustomTransition name="bounce-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-14"
					text-alignment="center"
					font-family="PoppinsRegular"
					>(QS. An Nabaa : 78)</TextView
				>
			</CustomTransition>
			<CustomTransition name="bounce-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-14 mt-10"
					text-alignment="center"
					font-family="PoppinsRegular"
					>Wasalamu'alaikum Warahmatullahi Wabarakatuh</TextView
				>
			</CustomTransition>
			<CustomTransition name="bounce-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-14 mt-10"
					text-alignment="center"
					font-family="PoppinsRegular"
					>Turut berbahagia,</TextView
				>
			</CustomTransition>
			<CustomTransition name="bounce-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-14"
					text-alignment="center"
					font-family="PoppinsRegular"
					>Segenap keluarga besar</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-bottom-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-32 mt-10"
					text-alignment="center"
					font-weight="400"
					font-family="Niconne"
					>Radita & Rachmat</TextView
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
