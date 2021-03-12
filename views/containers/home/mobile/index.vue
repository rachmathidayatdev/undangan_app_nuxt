<template>
	<div class="home">
		<Column
			custom-class="container"
			align-items="center"
			justify-content="center"
		>
			<Column
				custom-class="header-content"
				align-items="center"
				justify-content="center"
			>
				<Column col="6">
					<TextView
						custom-class="item-name font-38"
						font-weight="400"
						font-color="goldenDream"
						>Radita</TextView
					>
					<TextView
						custom-class="item-name font-50 custom-mt"
						text-alignment="center"
						font-color="goldenDream"
						>&</TextView
					>
					<TextView
						custom-class="item-name font-38 custom-mt"
						text-alignment="right"
						font-weight="400"
						font-color="goldenDream"
						>Rachmat</TextView
					>
				</Column>
			</Column>
			<Column
				custom-class="body-content"
				align-items="center"
				justify-content="center"
			>
				<CustomTransition duration="1s">
					<TextView
						v-if="isComponentShow"
						custom-class="font-16"
						font-color="goldenDream"
						font-weight="bold"
						>Kepada Yth,</TextView
					>
				</CustomTransition>
				<CustomTransition duration="1.5s">
					<TextView
						v-if="isComponentShow"
						custom-class="font-16"
						font-color="goldenDream"
						font-weight="bold"
						>{{ guestName }}</TextView
					>
				</CustomTransition>
				<CustomTransition name="bounce-custom">
					<Row v-if="isComponentShow" custom-class="mt-5">
						<img :src="images.divider" width="180" />
					</Row>
				</CustomTransition>
				<CustomTransition duration="2.5s">
					<TextView
						v-if="isComponentShow"
						custom-class="font-14 mt-5"
						font-color="goldenDream"
						font-weight="bold"
						>( {{ guestLocation }} )</TextView
					>
				</CustomTransition>
				<CustomTransition name="bounce-custom">
					<button
						v-if="isComponentShow && guestName && guestLocation"
						class="btn-undangan mt-20"
						type="button"
						@click="goToMain"
					>
						Buka Undangan
					</button>
				</CustomTransition>
			</Column>
		</Column>
	</div>
</template>

<!-- Scripts -->
<script src="./script.js" />

<!-- Styles -->
<style lang="scss">
@import './style';
</style>
