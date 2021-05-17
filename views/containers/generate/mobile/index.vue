<template>
	<div class="generate">
		<Column
			custom-class="container py-20 px-40"
			justify-content="center"
			align-items="normal"
		>
			<TextView
				v-if="isComponentShow"
				custom-class="font-14"
				text-alignment="left"
				font-family="PoppinsRegular"
				>Nama Tamu</TextView
			>
			<TextInput
				type="text"
				name="guestName"
				field="guestName"
				place-holder="Masukkan Nama Tamu"
				:value="guestName"
				@onChange="onChange"
			/>
			<TextView
				v-if="isComponentShow"
				custom-class="font-14"
				text-alignment="left"
				font-family="PoppinsRegular"
				>Sesi Tamu</TextView
			>
			<TextInput
				type="text"
				name="sesi"
				field="sesi"
				place-holder="Masukkan Sesi Tamu"
				:value="sesi"
				@onChange="onChange"
			/>
			<button type="button" class="btn-undangan mt-20" @click="onGenerateData">
				Copy
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
