<template>
	<div :id="id" :class="classes"><slot /></div>
</template>

<script>
export default {
	props: {
		id: { type: String, default: null },
		customClass: { type: String, default: null },
		borderRadius: { type: [String, Number], default: 0 },
		variant: { type: String, default: 'primary' },
	},
	computed: {
		classes() {
			const classes = ['alert']
			const { customClass, borderRadius, variant } = this

			if (borderRadius) {
				classes.push(`border-radius-${borderRadius}`)
			}

			if (variant) {
				classes.push(variant)
			} else {
				classes.push('primary')
			}

			if (customClass) {
				classes.push(customClass)
			}

			return (classes.length && classes.join(' ')) || null
		},
	},
}
</script>

<style lang="scss">
@import '~/assets/scss/global';

.alert {
	position: relative;
	padding: 0.75rem 1.25rem;
	margin-bottom: 1rem;
	border: 1px solid transparent;

	$variant: 'primary', 'secondary', 'success', 'danger', 'warning', 'info',
		'light', 'dark';
	@each $i in $variant {
		&.#{$i} {
			background-color: var(--#{$i}-background-color);
			border-color: var(--#{$i}-border-color);
		}
	}
}
</style>
