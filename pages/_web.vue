<template>
    <div class="main">
        站点{{name}}
        <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) of carouselBanner" :key="index">
                    <router-link :to="item.href">
                        <img class="swiper-img" :src="'~/static/carouselBanner/'+item.img"/>
                        <img class="swiper-mbimg" :src="'~/static/carouselBanner/'+item.mb_img"/>
                    </router-link>
                </div>
            </div>

            <div class="swiper-pagination" slot="pagination"></div>
            <div class="custom-swiper-button-prev fa fa-angle-left" slot="button-prev"></div>
            <div class="custom-swiper-button-next fa fa-angle-right" slot="button-next"></div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data(){
        return {
            swiperOption: {
                effect: "fade",
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.custom-swiper-button-next',
                    prevEl: '.custom-swiper-button-prev'
                }
            },
            carouselBanner: []
        }
    },
    computed: {
        ...mapState("category", ["name"])  
    }
}
</script>
<style>
.main {
    width: 100%;
}
</style>