<script setup lang="ts">
import {useWebsiteStore} from "~/stores/indexStore";
import noPhoto from '~/assets/img/no-photo.png'
import IconClose from "~/components/icons/IconClose.vue";

const store = useWebsiteStore()

</script>

<template>
	<div class="sales-header">
		<h1 class="sales-title">Ваша корзина</h1>
		<div class="sales-header__count">{{ store.countAllItems }} товара</div>
		<button>Очистить корзину</button>
	</div>

	<div class="sales-list">
		<div class="sales-item" v-for="item in store.salesList" :key="item.id">
			<div>
				<img :src="noPhoto" alt="no-photo">
			</div>
			<div>
				<div>{{ item.name }}</div>
				<div>{{ item.description }}</div>
				<div>{{ item.img }}</div>
				<div>{{ item.article }}</div>
			</div>
			<div class="sales-item__counter">
				<button @click="store.decrementSalesItemCount(item.id)">-</button>
				<div>{{ item.count }}</div>
				<button @click="store.incrementSalesItemCount(item.id)">+</button>
			</div>
			<div>{{ item.price * item.count }}</div>
			<button class="sales-item__close" @click="store.deleteSalesItem(item.id)">
				<icon-close></icon-close>
			</button>
		</div>
		<div>
			<div>
				<div>Сумма заказа</div>
				<div>{{ store.priceAllItems }}</div>
			</div>
			<div>
				<div>Количество</div>
				<div>{{ store.countAllItems }} шт</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">

.sales {
	&-title {
		margin: 0;
	}
	
	&-header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 1.5rem;
		margin-bottom: 1.5rem;
		
		&__count {
			flex: 1 1 0;
		}
	}
	
	&-item {
		display: grid;
		grid-template-columns: repeat(4, auto);
		align-items: center;
		position: relative;
		
		&__counter {
			display: flex;
			gap: 1rem;
		}
		
		&__close {
			position: absolute;
			top: 1rem;
			right: 1rem;
		}
	}
}
</style>