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
						custom-class="item-name font-28"
						font-weight="600"
						font-color="tan"
						>Radita</TextView
					>
					<TextView
						custom-class="item-name font-50 custom-mt"
						text-alignment="center"
						>&</TextView
					>
					<TextView
						custom-class="item-name font-28 custom-mt"
						text-alignment="right"
						font-weight="600"
						font-color="tan"
						>Rachmat</TextView
					>
				</Column>
			</Column>
			<Column
				custom-class="body-content"
				align-items="center"
				justify-content="center"
			>
				<TextView custom-class="font-16" font-color="tan" font-weight="bold"
					>Yth,</TextView
				>
				<TextView custom-class="font-16" font-color="tan" font-weight="bold">{{
					guestName
				}}</TextView>
				<Row custom-class="mt-5">
					<img :src="images.divider" width="180" />
				</Row>
				<TextView
					custom-class="font-14 mt-5"
					font-color="tan"
					font-weight="bold"
					>( {{ guestLocation }} )</TextView
				>
				<button
					v-if="guestName && guestLocation"
					class="btn-undangan mt-20"
					type="button"
				>
					Buka Undangan
				</button>
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
