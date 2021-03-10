<template>
	<div class="home">
		<Row>
			<Column custom-class="header-container">
				<Column custom-class="item-content">
					<TextView
						custom-class="item-name font-28"
						font-weight="600"
						font-color="tan"
						>Radita</TextView
					>
					<TextView
						custom-class="item-name font-48 custom-mt"
						text-alignment="center"
						font-weight="bold"
						font-color="tan"
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
				<Column
					custom-class="body-container"
					align-items="center"
					justify-content="center"
				>
					<TextView custom-class="font-14" font-color="tan" font-weight="bold"
						>Yth</TextView
					>
					<TextView
						custom-class="font-18"
						font-color="tan"
						font-weight="bold"
						>{{ guestName }}</TextView
					>
					<Row>
						<img :src="images.divider" width="180" />
					</Row>
					<TextView custom-class="font-14" font-color="tan" font-weight="bold"
						>( {{ guestLocation }} )</TextView
					>
					<button class="btn-undangan mt-20" type="button">
						Buka Undangan
					</button>
				</Column>
			</Column>
		</Row>
	</div>
</template>

<!-- Scripts -->
<script src="./script.js" />

<!-- Styles -->
<style lang="scss">
@import './style';
</style>
