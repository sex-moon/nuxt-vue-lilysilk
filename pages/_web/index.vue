<template>
    <div>
        <!-- <p>{{ $t('home.title') }}</p> -->
        <div class="home-banner" v-if="homeBanner.length > 0">
            <HomeCarousel :imageList="homeBanner" effect="fade" :pagination="true"></HomeCarousel>
        </div>

        <HomePage></HomePage>

        <MiniCart></MiniCart>
    </div>
</template>

<script>
export default {
    async asyncData ({app, params, store}) {
        const topbannar = await app.$axios.$get("/head/topbannar", {params: {web: params.web}});
        const homeBanner = await app.$axios.$get("/homeBanner/"+params.web);

        if(topbannar.status == 200){
            store.commit('header/setTopbannar', topbannar.info);
        }

        return {homeBanner: homeBanner};
    },
    components: {
        HomeCarousel: ()=>import('~/components/common/horizontal-carousel.vue'),
        HomePage: ()=>import('~/components/home.vue'),
        MiniCart: ()=>import('~/layouts/head/mini-cart.vue')
    }
}
</script>

<style scoped>
.home-banner{
    margin-top: 20px;
}
</style>