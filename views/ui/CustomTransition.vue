<template>
	<div :style="styleCustom">
		<transition :name="name">
			<slot />
		</transition>
	</div>
</template>

<script>
export default {
	props: {
		duration: { type: String, default: '0.5s' },
		name: { type: String, default: 'fade-custom' },
	},
	computed: {
		styleCustom() {
			return {
				'--transition-duration': this.duration,
			}
		},
	},
}
</script>

<style lang="scss">
.fade-custom-enter-active,
.fade-custom-leave-active {
	transition: opacity var(--transition-duration);
}
.fade-custom-enter,
.fade-custom-leave-to {
	opacity: 0;
}

.slide-left-custom-leave-active,
.slide-left-custom-enter-active {
	transition: var(--transition-duration);
}
.slide-left-custom-enter {
	transform: translate(100%, 0);
}
.slide-left-custom-leave-to {
	transform: translate(100%, 0);
}

.slide-right-custom-leave-active,
.slide-right-custom-enter-active {
	transition: var(--transition-duration);
}
.slide-right-custom-enter {
	transform: translate(-100%, 0);
}
.slide-right-custom-leave-to {
	transform: translate(-100%, 0);
}

.slide-bottom-custom-leave-active,
.slide-bottom-custom-enter-active {
	transition: var(--transition-duration);
}
.slide-bottom-custom-enter {
	transform: translate(0, 100%);
}
.slide-bottom-custom-leave-to {
	transform: translate(0, 100%);
}

.slide-top-custom-leave-active,
.slide-top-custom-enter-active {
	transition: var(--transition-duration);
}
.slide-top-custom-enter {
	transform: translate(0, -100%);
}
.slide-top-custom-leave-to {
	transform: translate(0, -100%);
}

.bounce-custom-enter-active,
.bounce-custom-leave-active {
	transition: all 400ms cubic-bezier(0.47, 1.64, 0.41, 0.8);
}
.bounce-custom-enter,
.bounce-custom-leave-to {
	transform: scale(1.5);
}
</style>
