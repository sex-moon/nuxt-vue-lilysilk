<template>
    <div>
        <HomeCarousel :imageList="homeBanner"></HomeCarousel>

        <HomePage></HomePage>

    </div>
</template>

<script>
export default {
    async asyncData ({app, params}) {
        const response = await app.$axios.$post("/user/homeBanner", {web: params.web});
        
        return {homeBanner: response.data};
    },
    components: {
        HomeCarousel: ()=>import('~/components/common/carousel'),
        HomePage: ()=>import('~/layouts/home.vue')
    }
}
</script>