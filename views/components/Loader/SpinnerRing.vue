<template>
	<div :class="classes" :style="styleCustom">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
</template>

<script>
export default {
	props: {
		customClass: { type: String, default: null },
		height: { type: String, default: '50px' },
		width: { type: String, default: '50px' },
		borderSize: { type: String, default: '5px' },
		color: { type: String, default: '#fff' },
	},
	computed: {
		classes() {
			const classes = ['lds-ring']
			const { customClass } = this

			if (customClass) {
				classes.push(customClass)
			}

			return (classes.length && classes.join(' ')) || null
		},
		styleCustom() {
			const { height, width, borderSize, color } = this

			return {
				'--height': height,
				'--width': width,
				'--border': `${borderSize} solid ${color}`,
				'--border-color': `${color} transparent transparent transparent`,
			}
		},
	},
}
</script>

<style lang="scss">
@import '~/assets/scss/global';

.lds-ring {
	display: inline-block;
	position: relative;
	width: var(--width);
	height: var(--height);

	div {
		box-sizing: border-box;
		display: block;
		position: absolute;
		width: var(--width);
		height: var(--height);
		margin: 8px;
		border: var(--border);
		border-radius: 50%;
		animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		border-color: var(--border-color);

		&:nth-child(1) {
			animation-delay: -0.45s;
		}

		&:nth-child(2) {
			animation-delay: -0.3s;
		}

		&:nth-child(3) {
			animation-delay: -0.15s;
		}
	}
}
@keyframes lds-ring {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
