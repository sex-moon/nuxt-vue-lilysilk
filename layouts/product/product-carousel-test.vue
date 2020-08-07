<template>
    <div v-swiper:mySwiper="swiperOption" class="swiper-container">
        <div class="custom-swiper-button-prev fa fa-angle-up" slot="button-prev"></div>
        <div class="custom-swiper-button-next fa fa-angle-down" slot="button-next"></div>
        <div class="swiper-wrapper">
            <!-- <div class="swiper-slide" v-for="(item, index) of homeBanner" :key="index">
                <router-link :to="item.href">
                    <img class="swiperImg" :src="'http://115.28.241.1/web/image/poster/'+item.img"/>
                </router-link>
            </div> -->
            <div class="swiper-slide">
                <img class="swiper-img" src="~/static/images/product/19mm-silk-pillowcase-with-ruffle-trim-4160-PUBLIC-1-20190829155025.jpg"/>
            </div>
            <div class="swiper-slide">
                <img class="swiper-img" src="~/static/images/product/19mm-silk-pillowcase-with-ruffle-trim-4160-PUBLIC-2-20190829155025.jpg"/>
            </div>
            <div class="swiper-slide">
                <img class="swiper-img" src="~/static/images/product/19mm-silk-pillowcase-with-ruffle-trim-4160-PUBLIC-3-20190829155025.jpg"/>
            </div>
            <div class="swiper-slide">
                <img class="swiper-img" src="~/static/images/product/19mm-silk-pillowcase-with-ruffle-trim-4160-PUBLIC-4-20190829155025.jpg"/>
            </div>
            <div class="swiper-slide">
                <img class="swiper-img" src="~/static/images/product/19mm-silk-pillowcase-with-ruffle-trim-4160-PUBLIC-5-20190829155025.jpg"/>
            </div>
            <div class="swiper-slide">
                <img class="swiper-img" src="~/static/images/product/19mm-silk-pillowcase-with-ruffle-trim-4160-PUBLIC-6-20190829155025.jpg"/>
            </div>
            <div class="swiper-slide">
                <img class="swiper-img" src="~/static/images/product/19mm-silk-pillowcase-with-ruffle-trim-4160-PUBLIC-7-20190829155025.jpg"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            swiperOption: {
                effect: "slide",
                direction: 'vertical', // 垂直切换选项
                autoHeight: true,
                speed: 500,
                loop: true, // 循环模式选项
                navigation: {
                    nextEl: '.custom-swiper-button-next',
                    prevEl: '.custom-swiper-button-prev'
                }
            }
        }
    }
}
</script>

<style>
.custom-swiper-button-prev {
    display: block;
}
.custom-swiper-button-next {
    display: block;
}
</style>