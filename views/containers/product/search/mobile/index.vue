<template>
	<div class="history">
		<Row
			custom-class="navbar p-20"
			align-items="center"
			justify-content="center"
		>
			<Column col="1">
				<img
					:src="icons.leftArrowIcon"
					height="20"
					width="20"
					@click="onPageChange"
				/>
			</Column>
			<Column col="11">
				<form novalidate @submit.prevent="onSearch">
					<TextInput
						custom-ref="keywoard"
						custom-class="my-0"
						type="text"
						place-holder="Search"
						name="productName"
						field="productName"
						:value="form.keywoard.productName"
						border-color="transparent"
						background="transparent"
						@onChange="onChange"
						@clearValue="
							clearValue({
								field: 'productName',
								defaultValue: '',
							})
						"
					/>
				</form>
			</Column>
		</Row>

		<client-only>
			<BottomSheet
				:visible="isBottomSheetKeywoardShow"
				@closeBottomSheet="closeBottomSheetKeywoard"
			>
				<template slot="bottom-sheet-header">
					<div class="header">
						<Row
							custom-class="mt-10"
							align-items="center"
							justify-content="center"
						>
							<TextView custom-class="max-line-1 font-18" font-weight="600"
								>Found 6 results</TextView
							>
						</Row>
					</div>
				</template>
				<template slot="bottom-sheet-body">
					<div class="body">
						<Row custom-class="item-container">
							<Column
								v-for="(item, index) in products"
								:key="index"
								col="6"
								custom-class="p-20"
								:on-click="onProductDetailChange"
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
					</div>
				</template>
			</BottomSheet>
		</client-only>
	</div>
</template>

<!-- Scripts -->
<script src="./script.js" />

<!-- Styles -->
<style lang="scss">
@import './style';
</style>
