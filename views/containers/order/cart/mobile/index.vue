<template>
	<div class="cart">
		<Row
			custom-class="navbar p-20"
			align-items="center"
			justify-content="center"
		>
			<img
				:src="icons.leftArrowIcon"
				height="20"
				width="20"
				@click="onPageChange"
			/>
			<TextView custom-class="font-14" text-alignment="center" font-weight="600"
				>Cart</TextView
			>
		</Row>
		<Column custom-class="px-20 py-10">
			<TextView custom-class="font-12 mb-20" text-alignment="center"
				>Swipe on an item to delete</TextView
			>
			<Row
				v-for="(item, index) in carts"
				:key="index"
				custom-class="item-cart mt-10"
			>
				<Column
					custom-class="item-image"
					align-items="center"
					justify-content="center"
					col="4"
				>
					<img :src="item.imageUrl" height="80" width="80" />
				</Column>
				<Column col="8" justify-content="space-between">
					<TextView custom-class="font-16" font-weight="600">{{
						item.productName
					}}</TextView>
					<Row align-items="center" justify-content="space-between">
						<TextView
							custom-class="font-14"
							font-weight="400"
							text-alignment="center"
							font-color="vermillion"
							>{{ item.price }}</TextView
						>
						<Row custom-class="qty-button">
							<Row
								:on-click="onQtyChange"
								:payload-custom="
									JSON.stringify({
										id: item.id,
										qty: -1,
									})
								"
								align-items="center"
								justify-content="center"
							>
								<TextView
									custom-class="font-14 px-7"
									font-weight="600"
									font-color="white"
									text-alignment="center"
									>-</TextView
								>
							</Row>
							<Row width="20px" align-items="center" justify-content="center">
								<TextView
									custom-class="font-14"
									font-weight="600"
									font-color="white"
									text-alignment="center"
									>{{ item.qty }}</TextView
								>
							</Row>
							<Row
								:on-click="onQtyChange"
								:payload-custom="
									JSON.stringify({
										id: item.id,
										qty: 1,
									})
								"
								align-items="center"
								justify-content="center"
							>
								<TextView
									custom-class="font-14 px-7"
									font-weight="600"
									font-color="white"
									text-alignment="center"
									>+</TextView
								>
							</Row>
						</Row>
					</Row>
				</Column>
			</Row>
		</Column>
		<Row custom-class="footer-container">
			<button type="button" @click="onCheckout">Proceed to checkout</button>
		</Row>
	</div>
</template>

<!-- Scripts -->
<script src="./script.js" />

<!-- Styles -->
<style lang="scss">
@import './style';
</style>
