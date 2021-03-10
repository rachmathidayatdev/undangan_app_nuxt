<template>
	<div :class="`bottom-sheet ${visible ? 'active' : ''}`" :style="styleCustom">
		<div class="bottom-sheet-backdrop" @click="closeBottomSheet">
			<div class="bottom-sheet-container p-10" @click="onBodyClick">
				<header>
					<slot name="bottom-sheet-header" />
				</header>
				<main>
					<slot name="bottom-sheet-body" class="body" />
				</main>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		customRef: { type: String, default: 'bottomSheet' },
		height: {
			type: [String, Number],
			default: process.client ? screen.height / 2 : 300,
		},
		maxHeight: {
			type: [String, Number],
			default: process.client ? screen.height - 36 : 736,
		},
		isRoundedHeader: { type: Boolean, default: true },
		backdropColor: { type: String, default: 'rgba(0, 0, 0, 0.8)' },
	},
	computed: {
		styleCustom() {
			const { height, maxHeight, isRoundedHeader, backdropColor } = this

			return {
				'--height': height > maxHeight ? `${maxHeight}px` : `${height}px`,
				'--bottom': height > maxHeight ? `-${maxHeight}px` : `-${height}px`,
				'--is-rounded-header': isRoundedHeader ? '20px' : '0px',
				'--height-content':
					height > maxHeight ? `${maxHeight - 50}px` : `${height - 50}px`,
				'--backdrop-color': backdropColor,
			}
		},
	},
	methods: {
		closeBottomSheet() {
			this.$emit('closeBottomSheet', false)
		},
		onBodyClick(e) {
			e.stopPropagation()
		},
	},
}
</script>

<style lang="scss">
@import '~/assets/scss/global';

.bottom-sheet {
	position: absolute;
	width: 100%;
	z-index: 99;
	visibility: hidden;
	overflow: hidden;

	.bottom-sheet-backdrop {
		height: calc(100vh - 37px);
		overflow: hidden;
		background-color: var(--backdrop-color);

		.bottom-sheet-container {
			position: absolute;
			bottom: var(--bottom);
			height: var(--height);
			width: 100%;
			background-color: map-get($colors, white);
			border-top-left-radius: var(--is-rounded-header);
			border-top-right-radius: var(--is-rounded-header);
			transition: all 0.3s ease;

			.header {
				@extend .max-line-1;
				@extend .mb-10;
			}

			.body {
				max-height: var(--height-content);
				overflow: auto;
			}
		}
	}

	&.active {
		visibility: visible;

		.bottom-sheet-backdrop {
			.bottom-sheet-container {
				bottom: var(--height);
				transform: translate(0, 100%);
			}
		}
	}
}
</style>
