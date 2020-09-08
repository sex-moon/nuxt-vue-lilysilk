<template lang="html">
	<div class="demo-spin-col" v-if="loading">
		<Spin fix>
			<Icon type="ios-loading" size=30 class="demo-spin-icon-load"></Icon>
		</Spin>
	</div>
</template>

<script>
export default {
	data: () => ({
		loading: false
	}),
	methods: {
		start () {
			this.loading = true
		},
		finish () {
			this.loading = false
		}
	}
}
</script>

<style scoped>
.demo-spin-icon-load{
	animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
	from { transform: rotate(0deg);}
	50%  { transform: rotate(180deg);}
	to   { transform: rotate(360deg);}
}
.demo-spin-col{
	position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
</style>