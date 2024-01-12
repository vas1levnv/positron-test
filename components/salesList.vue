<script setup lang="ts">
import {useWebsiteStore} from "~/stores/indexStore";
import noPhoto from '~/assets/img/no-photo.png'
import IconClose from "~/components/icons/IconClose.vue";
import CustomButton from "~/components/CustomButton.vue";
import IconLabel from "~/components/icons/IconLabel.vue";

const store = useWebsiteStore()

const installation = computed({
	get() {
		return store.installation
	},
	set(value) {
		store.changeInstallation(value)
	}
})

const handleSubmit = () => {
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify({
			title: 'foo',
			body: 'bar',
			userId: 1,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
		.then((response) => response.json())
		.then((json) => console.log(json));
}

</script>

<template>
	<form class="sales" @submit.prevent="handleSubmit">
		<div>
			<div class="sales-header">
				<h1 class="sales-title">Ваша корзина</h1>
				<div class="sales-header__count">{{ store.countAllItems }} товара</div>
				<button type="button">Очистить корзину</button>
			</div>

			<div class="sales-list">
				<div class="sales-item" v-for="item in store.salesList" :key="item.id">
					<div class="sales-item__img">
						<img :src="noPhoto" alt="no-photo">
					</div>
					<div class="sales-item__text">
						<div class="sales-item__text-name">{{ item.name }}</div>
						<div class="sales-item__text-description">{{ item.description }}</div>
						<div class="sales-item__text-article">{{ item.article }}</div>
					</div>
					<div class="sales-item__counter">
						<button type="button" class="sales-item__counter-btn" @click="store.decrementSalesItemCount(item.id)">-
						</button>
						<div class="sales-item__counter-value">{{ item.count }}</div>
						<button type="button" class="sales-item__counter-btn" @click="store.incrementSalesItemCount(item.id)">+
						</button>
						<div class="sales-item__counter-one" v-if="item.count > 1">{{ item.price }} ₽/шт. </div>
					</div>
					<div class="sales-item__price">{{ item.price * item.count }} ₽</div>
					<button class="sales-item__close" @click="store.deleteSalesItem(item.id)">
						<icon-close></icon-close>
					</button>
				</div>
			</div>
			<label class="sales-list-label">
				<input type="checkbox" :value="installation" v-model="installation">
				<icon-label></icon-label>
				<div>
					<div style="font-weight: 700">Установка</div>
					<div style="font-size: 0.875rem">Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.</div>
				</div>
			</label>
		</div>
		<div class="sales-total">
			<div class="sales-total-title">
				Итого
			</div>
			<div class="sales-total-item">
				<div>Сумма заказа</div>
				<div>{{ store.priceAllItems }}</div>
			</div>
			<div class="sales-total-item">
				<div>Количество</div>
				<div>{{ store.countAllItems }} шт</div>
			</div>
			<div class="sales-total-item">
				<div>Установка</div>
				<div>{{store.installation ? 'да' : 'нет'}}</div>
			</div>
			<div class="sales-total__price">
				<div>Стоимость товаров</div>
				<div>
					<div>{{ store.installation? Math.floor(store.priceAllItems * 1.2) : store.priceAllItems}}</div>
				</div>
			</div>
			<custom-button type="submit" class="primary">Оформить заказ</custom-button>
			<custom-button type="button" class="secondary">Купить в 1 клик</custom-button>
		</div>
	</form>
</template>

<style scoped lang="scss">

.sales {
	display: grid;
	gap: 3rem;
	
	&-title {
		margin: 0;
	}
	
	&-header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 1.5rem;
		margin-bottom: 3rem;
		
		&__count {
			flex: 1 1 0;
		}
	}
	
	&-list {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		
		&-label{
			display: flex;
			align-items: center;
			background: var(--shadow-color);
			padding: 1.5rem;
			gap: 1.25rem;
			border-radius: 0.5rem;
			margin-top: 1rem;
		}
	}
	
	&-item {
		display: grid;
		grid-template-columns: min-content  6fr 2fr 2fr;
		align-items: center;
		gap: 1rem;
		position: relative;
		border-bottom: 1px solid var(--border-color);
		padding: 0 1rem 1.25rem;
		
		&:last-child{
			border: none;
		}
		
		&__img {
			width: min-content;
		}
		
		&__text {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			
			&-name {
				font-weight: 700;
			}
			
			&-description {
				font-size: 0.75rem;
				max-width: 260px;
			}
			
			&-article {
				font-size: 0.825rem;
			}
		}
		
		&__counter {
			display: flex;
			justify-content: center;
			gap: 2px;
			position: relative;
			
			&-btn, &-value {
				width: 34px;
				height: 34px;
				display: flex;
				align-items: center;
				font-size: 1rem;
				justify-content: center;
				background: var(--shadow-color);
				line-height: 100%;
			}
			
			&-btn {
				cursor: pointer;
				
				&:first-child {
					border-radius: 0.25rem 0 0 0.25rem;
				}
				
				&:last-child {
					border-radius: 0 0.25rem 0.25rem 0;
				}
			}
			
			&-one{
				position: absolute;
				bottom: -1.25rem;
				left: 50%;
				transform: translateX(-50%);
				white-space: nowrap;
				font-size: 0.75rem;
			}
		}
		
		&__price {
			text-align: center;
			font-size: 1.125rem;
			font-weight: 700;
		}
		
		&__close {
			position: absolute;
			top: 0;
			right: 0;
		}
	}
	
	&-total {
		padding: 2rem;
		background: var(--shadow-color);
		max-width: 425px;
		margin: 0 auto;
		width: 100%;
		border-radius: 0.5rem;
		
		&-title {
			font-weight: 700;
			font-size: 1.5rem;
			margin-bottom: 2rem;
		}
		
		&-item {
			display: flex;
			justify-content: space-between;
			gap: 1rem;
			margin-bottom: 1.125rem;
			font-weight: 700;
		}
		
		&__price {
			border-top: 1px solid var(--border-color);
			margin: 2rem 0;
			padding-top: 1rem;
			display: flex;
			justify-content: space-between;
			align-items: baseline;
			gap: 1rem;
			font-weight: 700;
			
			div:first-child {
				font-size: 1.125rem;
			}
			
			div:last-child {
				font-size: 1.5rem;
			}
		}
	}
}

@media (min-width: 1200px) {
	.sales{
		grid-template-columns: 1fr 425px;
		gap: 3.5rem;
		align-items: center;
		
		&-title{
			font-size: 44px;
		}
	}
}

</style>