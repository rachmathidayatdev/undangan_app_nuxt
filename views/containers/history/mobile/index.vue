<template>
	<div class="history">
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
				>History</TextView
			>
		</Row>
		<Column
			custom-class="history-container"
			align-items="center"
			justify-content="center"
		>
			<img :src="icons.historyNotFoundIcon" width="80" height="90" />
			<TextView
				custom-class="mt-10 font-18"
				text-alignment="center"
				font-weight="600"
				>No history yet</TextView
			>
			<TextView
				custom-class="mt-10 font-14"
				text-alignment="center"
				font-color="manatee"
				>Hit the orange button down below to Create an order</TextView
			>
		</Column>
		<Column custom-class="footer-container">
			<button type="button" @click="openBottomSheetKeywoard">
				Star ordering
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
