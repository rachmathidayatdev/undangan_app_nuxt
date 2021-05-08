<template>
	<div>
		<div v-if="isMobile">
			<!-- body -->
			<ViewMobile />
		</div>
		<ViewDesktop v-else />
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	components: {
		ViewDesktop: () => import('./desktop'),
		ViewMobile: () => import('./mobile'),
	},
	computed: {
		...mapState({
			isMobile: (state) => state.general.device.isMobile,
		}),
	},
}
</script>
