<template>
	<div class="sampul">
		<Column
			custom-class="container"
			align-items="center"
			justify-content="center"
		>
			<CustomTransition name="slide-top-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-18"
					font-color="white"
					font-weight="bold"
					>The Wedding of</TextView
				>
			</CustomTransition>
			<CustomTransition name="bounce-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="item-title font-38"
					font-color="white"
					font-weight="400"
					>Radita & Rachmat</TextView
				>
			</CustomTransition>
			<CustomTransition name="slide-bottom-custom">
				<TextView
					v-if="isComponentShow"
					custom-class="font-18"
					font-color="white"
					font-weight="bold"
					>29 . 05 . 2021</TextView
				>
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
