<template>
    <div>
        <HomeCarousel></HomeCarousel>

        <!-- <HomePage></HomePage> -->

    </div>
</template>

<script>
import Qs from 'qs';

export default {
    async asyncData ({app}) {
        // const response = await app.$axios.post("/user/homeBanner", {web: "au"});
        // return {homeBanner: response.data};
    },
    components: {
        HomeCarousel: ()=>import('~/components/common/carousel'),
        HomePage: ()=>import('~/components/home/homepage')
    }
}
</script>