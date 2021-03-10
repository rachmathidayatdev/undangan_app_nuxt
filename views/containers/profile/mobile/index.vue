<template>
	<div class="profile">
		<Row custom-class="navbar p-20" align-items="center">
			<img
				:src="icons.leftArrowIcon"
				height="20"
				width="20"
				@click="onPageChange"
			/>
		</Row>
		<Column custom-class="px-20 py-10">
			<TextView custom-class="font-32" font-weight="700">My profile</TextView>
			<Column custom-class="mt-30">
				<Row align-items="center" justify-content="space-between">
					<TextView custom-class="font-14" font-weight="600"
						>Personal details</TextView
					>
					<TextView custom-class="font-14" font-color="tahitiGold"
						>Change</TextView
					>
				</Row>
				<Row custom-class="item-profile">
					<Column col="4">
						<img :src="images.avatarImage" width="91" height="100" />
					</Column>
					<Column col="8" custom-class="item-profile-info">
						<TextView custom-class="font-18" font-weight="600"
							>Marvis Ighedosa</TextView
						>
						<TextView custom-class="font-14" font-color="manatee"
							>Dosamarvis@gmail.com</TextView
						>
						<TextView custom-class="font-14" font-color="manatee"
							>+234 9011039271</TextView
						>
						<TextView custom-class="font-14" font-color="manatee"
							>No 15 uti street off ovie palace road effurun delta
							state</TextView
						>
					</Column>
				</Row>
				<Row
					custom-class="card"
					align-items="center"
					justify-content="space-between"
				>
					<TextView custom-class="font-18" font-weight="600">Orders</TextView>
					<img :src="icons.rightArrowIcon" width="24" height="24" />
				</Row>
				<Row
					custom-class="card"
					align-items="center"
					justify-content="space-between"
				>
					<TextView custom-class="font-18" font-weight="600"
						>Pending reviews</TextView
					>
					<img :src="icons.rightArrowIcon" width="24" height="24" />
				</Row>
				<Row
					custom-class="card"
					align-items="center"
					justify-content="space-between"
				>
					<TextView custom-class="font-18" font-weight="600">Faq</TextView>
					<img :src="icons.rightArrowIcon" width="24" height="24" />
				</Row>
				<Row
					custom-class="card"
					align-items="center"
					justify-content="space-between"
				>
					<TextView custom-class="font-18" font-weight="600">Help</TextView>
					<img :src="icons.rightArrowIcon" width="24" height="24" />
				</Row>
			</Column>
			<Row height="100px"></Row>
		</Column>
		<Column custom-class="footer-container">
			<button type="button" @click="onUpdateProfile">Update</button>
		</Column>
	</div>
</template>

<!-- Scripts -->
<script src="./script.js" />

<!-- Styles -->
<style lang="scss">
@import './style';
</style>
