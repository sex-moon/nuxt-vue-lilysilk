<template>
    <div>
        <HomeCarousel></HomeCarousel>

        <!-- <HomePage></HomePage> -->
    </div>
</template>

<script>
export default {
    // async asyncData ({app}) {
    //     const response = await app.$axios.$get("test/1");
    //     console.log(response.data);
    //     // return {homeBanner: response.data};
    // },
    components: {
        HomeCarousel: ()=>import('~/components/common/carousel'),
        HomePage: ()=>import('~/components/home/homepage')
    }
}
</script>