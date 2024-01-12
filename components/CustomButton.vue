<template>
	<button>
		<slot/>
	</button>
</template>

<script>

</script>

<style scoped lang="scss">
button {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 14px 40px;
	width: 100%;
	font-size: 1.125rem;
	border-radius: 0.5rem;
	cursor: pointer;
	margin-top: 0.75rem;
	
	&.primary {
		background: var(--primary-color);
		border: 2px solid var(--primary-color);
		color: white;
	}
	
	&.secondary {
		background: white;
		border: 2px solid var(--primary-color);
		color: var(--primary-color);
	}
}
</style>