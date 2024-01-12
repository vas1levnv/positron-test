<template>
	<div class="sales-swiper">
		<h2>Просмотренные товары</h2>
		<swiper
				:slides-per-view="4"
				:space-between="20"
				:modules="modules"
				navigation
				:pagination="{ clickable: true }"
		>
			<swiper-slide class="sales-swiper-item" v-for="item in store.salesSwiper">
				<div>
					<img :src="noPhotoSwiper" alt="noPhotoSwiper">
				</div>
				<div class="sales-swiper-item__text">
					<div>{{ item.name }}</div>
					<div>{{ item.description }}</div>
				</div>
				<div style="font-weight: 700; font-size: 1.5rem">{{ item.priceRu.first }} ₽ - {{ item.priceRu.second }} ₽</div>
				<div>{{ item.priceEu.first }} € - {{ item.priceEu.second }} €</div>
				<custom-button class="primary">Подробнее</custom-button>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';
import { Navigation, Pagination} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useWebsiteStore} from "~/stores/indexStore";
import noPhotoSwiper from "../assets/img/no-photo-swiper.png"

const store = useWebsiteStore()
const modules = [Pagination, Navigation]
</script>

<style scoped lang="scss">
.sales-swiper {
	margin-top: 3rem;
	
	&-item {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background: var(--shadow-color);
		border-radius: 0.5rem;
		padding: 1.5rem;
		height: auto !important;
		
		&__text{
			flex: 1 1 0;
			margin-bottom: 2.25rem;
		}
	}
}
</style>