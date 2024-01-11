<script setup lang="ts">
import {useWebsiteStore} from "~/stores/indexStore";

const store = useWebsiteStore()
</script>

<template>
	<div class="sales-list">
		<div v-for="item in store.salesList" :key="item.id">
			<div>{{ item.name }}</div>
			<div>{{ item.description }}</div>
			<div>{{ item.img }}</div>
			<div>{{ item.article }}</div>
			<button @click="store.decrementSalesItemCount(item.id)">-</button>
			<div>{{ item.count }}</div>
			<button @click="store.incrementSalesItemCount(item.id)">+</button>
			<div>{{ item.price * item.count }}</div>
			<button @click="store.deleteSalesItem(item.id)">Удалить</button>
		</div>
		<div>
			<div>
				<div>Сумма</div>
				<div></div>
			</div>
			<div>
				<div>Количество</div>
				<div></div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>