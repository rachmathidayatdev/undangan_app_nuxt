<template>
	<div class="product">
		<Row
			custom-class="navbar p-20"
			align-items="center"
			justify-content="space-between"
		>
			<img
				:src="icons.leftArrowIcon"
				height="20"
				width="20"
				@click="onPageChange"
			/>
			<img
				:src="isFavorit ? icons.favoritActiveIcon : icons.favoritIcon"
				height="20"
				width="20"
				@click="onFavoritChange"
			/>
		</Row>
		<Column custom-class="px-20 py-10">
			<Row
				custom-class="item-image"
				align-items="center"
				justify-content="center"
			>
				<img :src="product.imageUrl" height="230" width="230" />
			</Row>
			<Column custom-class="mt-20">
				<TextView
					custom-class="font-26"
					font-weight="700"
					text-alignment="center"
					>{{ product.productName }}</TextView
				>
				<TextView
					custom-class="font-20"
					font-weight="700"
					text-alignment="center"
					font-color="vermillion"
					>{{ product.price }}</TextView
				>
			</Column>
			<Column custom-class="mt-30">
				<TextView custom-class="font-16" font-weight="700"
					>Delivery info</TextView
				>
				<TextView custom-class="font-14" font-color="manatee"
					>Delivered between monday aug and thursday 20 from 8pm to 91:32
					pm</TextView
				>
			</Column>
			<Column custom-class="mt-30">
				<TextView custom-class="font-16" font-weight="700"
					>Return policy</TextView
				>
				<TextView custom-class="font-14" font-color="manatee"
					>All our foods are double checked before leaving our stores so by any
					case you found a broken food please contact our hotline
					immediately.</TextView
				>
			</Column>
		</Column>
		<Row custom-class="footer-container">
			<button type="button" @click="onAddToCart">Add to cart</button>
		</Row>
	</div>
</template>

<!-- Scripts -->
<script src="./script.js" />

<!-- Styles -->
<style lang="scss">
@import './style';
</style>
