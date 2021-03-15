<template>
	<div>
		<div v-if="isMobile">
			<!-- body -->
			<ViewMobile />
			<!-- bottom navbar -->
			<MobileBottomNavbar />
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
		MobileBottomNavbar: () =>
			import('~/views/components/Mobile/MobileBottomNavbar'),
	},
	computed: {
		...mapState({
			isMobile: (state) => state.general.device.isMobile,
		}),
	},
}
</script>
