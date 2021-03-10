<template>
	<div class="landing">
		<Row custom-class="navbar" align-items="center">
			<Column col="6">
				<img :src="images.appLogo" width="180" />
			</Column>
			<Column col="6" align-items="flex-end">
				<ul>
					<li class="active">
						<TextView custom-class="font-14"> Home </TextView>
					</li>
					<li>
						<TextView custom-class="font-14"> Product </TextView>
					</li>
					<li>
						<TextView custom-class="font-14"> Faq </TextView>
					</li>
					<li>
						<TextView custom-class="font-14"> Contact </TextView>
					</li>
				</ul>
			</Column>
		</Row>
		<Row custom-class="banner-1">
			<Column align-items="center" justify-content="center">
				<TextView
					custom-class="font-16"
					font-weight="600"
					font-color="white"
					text-alignment="center"
				>
					Food app
				</TextView>
				<TextView
					custom-class="mt-20 font-38"
					font-weight="600"
					font-color="white"
					text-alignment="center"
				>
					Why stay hungry when
				</TextView>
				<TextView
					custom-class="font-38"
					font-weight="600"
					font-color="white"
					text-alignment="center"
				>
					you can order from Bella onojie
				</TextView>
				<TextView
					custom-class="mt-20 font-16"
					font-color="white"
					text-alignment="center"
				>
					Download the bella onojie's food app now
				</TextView>
				<Row custom-class="mt-40">
					<button class="playstore" type="button">Playstore</button>
					<button class="appstore" type="button">App store</button>
				</Row>
			</Column>
		</Row>
		<Column class="content-container">
			<Column
				custom-class="app-works"
				align-items="center"
				justify-content="center"
			>
				<img :src="images.phoneFrame" width="500" />
				<Row class="divider mt-30-rem"></Row>
				<TextView
					custom-class="mt-40 font-38"
					text-alignment="center"
					font-weight="600"
				>
					How the app works
				</TextView>
			</Column>
			<Row custom-class="py-5-rem">
				<Column col="6">
					<img :src="images.phone1" width="300" />
				</Column>
				<Column col="6" justify-content="center">
					<TextView
						custom-class="font-16"
						font-color="vermillion"
						font-weight="600"
					>
						Create an account
					</TextView>
					<TextView custom-class="font-32 mt-20" font-weight="600">
						Create/login to an existing account to get started
					</TextView>
					<TextView custom-class="font-16 mt-20" font-color="heather">
						An account is created with your email and a desire password
					</TextView>
				</Column>
			</Row>
			<Row custom-class="py-5-rem">
				<Column col="6" justify-content="center">
					<TextView
						custom-class="font-16"
						font-color="vermillion"
						font-weight="600"
					>
						Explore varities
					</TextView>
					<TextView custom-class="font-32 mt-20" font-weight="600">
						Shop for your favorites meal as e dey hot
					</TextView>
					<TextView custom-class="font-16 mt-20" font-color="heather">
						Shop for your favorite meals or drinks and enjoy while doing it
					</TextView>
				</Column>
				<Column col="6" align-items="flex-end">
					<img :src="images.phone2" width="300" />
				</Column>
			</Row>
			<Row custom-class="py-5-rem">
				<Column col="6">
					<img :src="images.phone3" width="300" />
				</Column>
				<Column col="6" justify-content="center">
					<TextView
						custom-class="font-16"
						font-color="vermillion"
						font-weight="600"
					>
						Checkout
					</TextView>
					<TextView custom-class="font-32 mt-20" font-weight="600">
						When you done check out and get it delivered
					</TextView>
					<TextView custom-class="font-16 mt-20" font-color="heather">
						When you done check out and get it delivered with ease
					</TextView>
				</Column>
			</Row>
		</Column>
		<Row custom-class="banner-2">
			<Column align-items="center" justify-content="center">
				<TextView
					custom-class="mt-20 font-38"
					font-weight="600"
					font-color="white"
					text-alignment="center"
				>
					Download the app now
				</TextView>
				<TextView
					custom-class="mt-20 font-16"
					font-color="white"
					text-alignment="center"
				>
					Available on your favorite store. Start your premium experience now
				</TextView>
				<Row custom-class="mt-40">
					<button class="playstore" type="button">Playstore</button>
					<button class="appstore" type="button">App store</button>
				</Row>
			</Column>
		</Row>
		<Row custom-class="footer">
			<Column col="4" align-items="center" justify-content="center">
				<img :src="images.appLogo" width="180" />
			</Column>
			<Column
				custom-class="item-sosmed"
				col="4"
				align-items="center"
				justify-content="center"
			>
				<Row align-items="center" justify-content="center">
					<img :src="icons.twitterIcon" width="35" height="35" />
					<img :src="icons.fbIcon" width="35" height="35" />
					<img :src="icons.instagramIcon" width="35" height="35" />
				</Row>
			</Column>
			<Column col="4" align-items="center" justify-content="center">
				<TextView custom-class="font-14" text-alignment="center">
					Copyright 2020 Bella Onojie.com
				</TextView>
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
