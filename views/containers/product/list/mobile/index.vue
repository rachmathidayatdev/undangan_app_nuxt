<template>
	<div class="product">
		<Row
			custom-class="navbar p-20"
			align-items="center"
			justify-content="space-between"
		>
			<img :src="icons.burgerMenuIcon" height="20" width="20" />
			<img
				:src="icons.shoppingCartIcon"
				height="20"
				width="20"
				@click="onOrderPageChange"
			/>
		</Row>
		<Column custom-class="px-20 py-10">
			<TextView custom-class="font-32" font-weight="700">Delicious</TextView>
			<TextView custom-class="font-32" font-weight="700">food for you</TextView>
		</Column>
		<Row custom-class="px-20 py-5">
			<TextInput
				input-custom-class="py-10"
				type="text"
				place-holder="Search"
				name="productName"
				field="productName"
				:value="form.keywoard.productName"
				border-radius="30"
				border-color="transparent"
				background="gallery"
				:on-click="onSearchPageChange"
				:prefix-icon="true"
				@onChange="onChange"
				@clearValue="
					clearValue({
						field: 'productName',
						defaultValue: '',
					})
				"
			/>
		</Row>
		<Column v-if="menus && menus.length" custom-class="menu-container is-fixed">
			<ul>
				<li
					v-for="(item, index) in menus"
					:key="index"
					:class="`${item.isActive ? 'active' : ''}`"
					@click="onMenuChange(item.id)"
				>
					<TextView custom-class="font-14">{{ item.label }}</TextView>
				</li>
			</ul>
		</Column>
		<Row custom-class="item-container">
			<Row
				v-if="isLoading"
				align-items="center"
				justify-content="center"
				height="250px"
				width="100%"
			>
				<SpinnerRing
					height="25px"
					width="25px"
					color="#FF240C"
					border-size="2px"
				/>
			</Row>
			<Column
				v-for="(item, index) in products"
				v-else
				:key="index"
				col="6"
				custom-class="p-20"
				:on-click="onPageChange"
				:payload-custom="JSON.stringify(item)"
			>
				<Row
					:custom-class="`item-card ${index % 2 === 0 ? '' : 'mt-50'}`"
					height="175px"
				>
					<Row custom-class="item-image">
						<img :src="item.imageUrl" width="90" />
					</Row>
					<Column
						custom-class="mt-10"
						align-items="center"
						justify-content="flex-end"
					>
						<TextView
							custom-class="font-14"
							text-alignment="center"
							font-weight="bold"
							>{{ item.productName }}</TextView
						>
						<TextView
							custom-class="font-12"
							text-alignment="center"
							font-color="vermillion"
							>{{ item.price }}</TextView
						>
					</Column>
				</Row>
			</Column>
		</Row>
		<Row height="25px"></Row>
	</div>
</template>

<!-- Scripts -->
<script src="./script.js" />

<!-- Styles -->
<style lang="scss">
@import './style';
</style>
