<template>
	<h2>Просмотренные товары</h2>
	<swiper
			:slides-per-view="3"
			:space-between="50"
	>
		<swiper-slide v-for="item in store.salesSwiper">
			<div>
				<img :src="noPhotoSwiper" alt="noPhotoSwiper">
			</div>
			<div>{{ item.name }}</div>
			<div>{{ item.description }}</div>
			<div>{{ item.price }}</div>
			<button>Подробнее</button>
		</swiper-slide>
	</swiper>
</template>

<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import {useWebsiteStore} from "~/stores/indexStore";
import noPhotoSwiper from "../assets/img/no-photo-swiper.png"

const store = useWebsiteStore()

</script>

<style scoped>

</style>