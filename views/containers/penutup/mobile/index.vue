<template>
	<div class="penutup">
		<Column
			custom-class="container px-20"
			align-items="center"
			justify-content="center"
		>
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-38 item-title mb-10"
					font-color="goldenDream"
					text-alignment="center"
					font-weight="400"
					>Penutup</TextView
				>
			</CustomTransition>
			<CustomTransition name="bounce-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-14"
					font-color="goldenDream"
					text-alignment="center"
					>Merupakan suatu kehormatan dan kebahagiaan bagi kami</TextView
				>
			</CustomTransition>
			<CustomTransition name="bounce-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-14"
					font-color="goldenDream"
					text-alignment="center"
					>apabila Bapak/Ibu/Saudara/i berkenan hadir untuk</TextView
				>
			</CustomTransition>
			<CustomTransition name="bounce-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-14"
					font-color="goldenDream"
					text-alignment="center"
					>memberikan doa restu kepada kedua mempelai.</TextView
				>
			</CustomTransition>
			<CustomTransition name="bounce-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-14 mt-10"
					font-color="goldenDream"
					text-alignment="center"
					>"Dan Kami menciptakan kamu berpasang-pasangan."</TextView
				>
			</CustomTransition>
			<CustomTransition name="bounce-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-14"
					font-color="goldenDream"
					text-alignment="center"
					>(QS. An Nabaa : 78)</TextView
				>
			</CustomTransition>
			<CustomTransition name="bounce-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-14 mt-10"
					font-color="goldenDream"
					text-alignment="center"
					>Wasalamu'alaikum Warahmatullahi Wabarakatuh</TextView
				>
			</CustomTransition>
			<CustomTransition name="bounce-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-14 mt-10"
					font-color="goldenDream"
					text-alignment="center"
					>Turut berbahagia,</TextView
				>
			</CustomTransition>
			<CustomTransition name="bounce-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-14"
					font-color="goldenDream"
					text-alignment="center"
					>Segenap keluarga besar</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-bottom-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-38 item-title mt-10"
					font-color="goldenDream"
					text-alignment="center"
					font-weight="400"
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
