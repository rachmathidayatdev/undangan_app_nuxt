<template>
	<div class="delivery">
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
				>Checkout</TextView
			>
		</Row>
		<Column custom-class="px-20 py-10">
			<TextView custom-class="font-32" font-weight="700">Delivery</TextView>
			<Column custom-class="mt-30">
				<Row align-items="center" justify-content="space-between">
					<TextView custom-class="font-14" font-weight="600"
						>Address details</TextView
					>
					<TextView custom-class="font-14" font-color="tahitiGold"
						>Change</TextView
					>
				</Row>
				<Column custom-class="item-address">
					<TextView custom-class="font-14" font-weight="600"
						>Alamat Rumah</TextView
					>
					<TextView custom-class="font-14"
						>Jl. Kalimalang Bekasi Timur</TextView
					>
					<TextView custom-class="font-14">0867635672528</TextView>
				</Column>
			</Column>
			<Column custom-class="mt-30">
				<Row align-items="center">
					<TextView custom-class="font-14" font-weight="600"
						>Delivery method</TextView
					>
				</Row>
				<Column custom-class="item-delivery">
					<TextView custom-class="font-14">Door delivery</TextView>
					<TextView custom-class="font-14">Pick up</TextView>
				</Column>
			</Column>
			<Column custom-class="mt-30">
				<Row align-items="center">
					<TextView custom-class="font-14" font-weight="600"
						>Payment method</TextView
					>
				</Row>
				<Column custom-class="item-delivery">
					<TextView custom-class="font-14">Card</TextView>
					<TextView custom-class="font-14">Bank account</TextView>
				</Column>
			</Column>
			<Row height="150px"></Row>
		</Column>
		<Column custom-class="footer-container">
			<Row align-items="center" justify-content="space-between">
				<TextView custom-class="font-14">Total</TextView>
				<TextView custom-class="font-16" font-weight="bold">23.000</TextView>
			</Row>
			<button class="mt-20" type="button" @click="onPayment">
				Proceed to payment
			</button>
		</Column>
	</div>
</template>

<!-- Scripts -->
<script src="./script.js" />

<!-- Styles -->
<style lang="scss">
@import './style';
</style>
