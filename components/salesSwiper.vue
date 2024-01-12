<template>
	<div class="sales-swiper">
		<h2 class="sales-swiper-title">Просмотренные товары</h2>
		<swiper
				:slides-per-view="4"
				:space-between="20"
				:navigation="{
      prevEl: prev,
      nextEl: next,
    }"
				:modules="modules"
				:pagination="{ clickable: true,type: 'fraction', el: pagination, }"
		>
			<swiper-slide class="sales-swiper-item" v-for="item in store.salesSwiper">
				<div>
					<img :src="noPhotoSwiper" alt="noPhotoSwiper">
				</div>
				<div class="sales-swiper-item__text">
					<div>{{ item.name }}</div>
					<div>{{ item.description }}</div>
				</div>
				<div style="font-weight: 700; font-size: 1.5rem">{{ item.priceRu.first }} ₽ - {{ item.priceRu.second }}
					₽
				</div>
				<div>{{ item.priceEu.first }} € - {{ item.priceEu.second }} €</div>
				<custom-button class="primary">Подробнее</custom-button>
			</swiper-slide>
			<div class="sales-swiper-others">
				<div ref="prev" class="prev">
					<icon-swiper/>
				</div>

				<div ref="pagination"></div>
				<div ref="next" class="next">
					<icon-swiper/>
				</div>
			</div>
		</swiper>
	</div>
</template>

<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Navigation, Pagination} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useWebsiteStore} from "~/stores/indexStore";
import noPhotoSwiper from "../assets/img/no-photo-swiper.png"
import {ref} from 'vue';
import IconSwiper from "~/components/icons/IconSwiper.vue";

const store = useWebsiteStore()
const modules = [Pagination, Navigation]

const prev = ref(null)
const next = ref(null)
const pagination = ref(null)

</script>

<style scoped lang="scss">
.sales-swiper {
	margin-top: 3rem;
	position: relative;
	
	&-title {
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.swiper {
		padding-top: 4rem;
	}
	
	&-item {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background: var(--shadow-color);
		border-radius: 0.5rem;
		padding: 1.5rem;
		height: auto !important;
		
		&__text {
			flex: 1 1 0;
			margin-bottom: 2.25rem;
		}
	}
	
	&-others {
		position: absolute;
		top: 0;
		right: 0;
		display: flex;
		align-items: center;
		gap: 1rem;
		z-index: 1000;
		
		.next, .prev{
			width: 50px;
			height: 50px;
			cursor: pointer;
		}
		
		.next{
			transform: rotate(180deg);
		}
	}
}


</style>