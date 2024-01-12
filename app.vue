<template>
	<div class="container">
		<header class="header">
			<header-basket/>
		</header>
	</div>
	<NuxtPage/>
	<footer>

	</footer>
</template>
<style lang="scss">
@import "./assets/main.scss";


.header {
	display: flex;
	justify-content: flex-end;
	padding: 1rem 0;
}

footer {
	height: 50px;
}

</style>
<script setup lang="ts">
import HeaderBasket from "~/components/HeaderBasket.vue";
</script>