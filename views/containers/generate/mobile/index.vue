<template>
	<div class="generate">
		<Column
			custom-class="container py-20 px-40"
			justify-content="center"
			align-items="normal"
		>
			<TextView
				custom-class="font-18"
				text-alignment="center"
				font-family="PoppinsRegular"
				>Generate Undangan</TextView
			>
			<TextInput
				type="text"
				name="guestName"
				field="guestName"
				place-holder="Masukkan Nama Tamu"
				:material="true"
				border-radius="8"
				custom-class="mt-20"
				input-custom-class="py-10"
				:value="guestName"
				@onChange="onChange"
			/>
			<TextInput
				type="text"
				name="sesi"
				field="sesi"
				place-holder="Masukkan Sesi Tamu"
				:material="true"
				border-radius="8"
				input-custom-class="py-10"
				:value="sesi"
				@onChange="onChange"
			/>
			<button type="button" class="btn-undangan mt-20" @click="onGenerateData">
				Copy
			</button>
			<CustomTransition name="slide-top-custom">
				<Alert
					v-if="isSuccessGenerateShow"
					variant="warning"
					custom-class="alert-custom"
				>
					<TextView font-weight="600" text-alignment="center"
						>Success Copy</TextView
					>
				</Alert>
			</CustomTransition>
			<textarea
				id="dataUndangan"
				v-model="undanganMessage"
				style="position: absolute; top: -1000px"
			></textarea>
		</Column>
	</div>
</template>

<!-- Scripts -->
<script src="./script.js" />

<!-- Styles -->
<style lang="scss" scoped>
@import './style';
</style>
