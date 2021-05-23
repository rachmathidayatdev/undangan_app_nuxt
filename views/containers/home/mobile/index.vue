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
				<div style="width: 150px">
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
				</div>
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
						>Kepada Yth Bapak/Ibu/Saudara/i,</TextView
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
					<Row
						v-if="isComponentShow"
						custom-class="mt-5"
						justify-content="center"
						align-items="center"
					>
						<img :src="images.dividerGold" style="width: 50%" />
					</Row>
				</CustomTransition>
				<CustomTransition duration="2.5s">
					<TextView
						v-if="isComponentShow"
						custom-class="font-14 mt-5"
						font-color="goldenDream"
						font-weight="bold"
						>{{ guestLocation }}</TextView
					>
				</CustomTransition>
				<CustomTransition name="bounce-custom">
					<!-- <button
						v-if="isComponentShow && guestName && guestLocation"
						:class="`btn-undangan ${isButtonBlink ? 'is-blink' : ''} mt-20`"
						type="button"
						@click="goToMain"
					>
						Buka Undangan
					</button> -->
					<button
						:class="`btn-undangan ${isButtonBlink ? 'is-blink' : ''} mt-20`"
						type="button"
						@click="goToMain"
					>
						<svg width="120px" height="45px" viewBox="0 0 120 45">
							<polyline points="119,1 119,44 1,44 1,1 119,1" />
							<polyline points="119,1 119,44 1,44 1,1 119,1" />
						</svg>
						<span>Buka Undangan</span>
					</button>
				</CustomTransition>
			</Column>
		</Column>
	</div>
</template>

<!-- Scripts -->
<script src="./script.js" />

<!-- Styles -->
<style lang="scss" scoped>
@import './style';
</style>
