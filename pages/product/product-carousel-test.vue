<template>
<div>
    <div class="custom-swiper-button-prev fa fa-angle-up" slot="button-prev"></div>
    <div v-swiper:mySwiper="swiperOption" class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) of homeBanner" :key="index">
                <router-link :to="item.href">
                    <img class="swiper-img" :src="'/images/product/'+item.img"/>
                </router-link>
            </div>
        </div>
    </div>
    <div class="custom-swiper-button-next fa fa-angle-down" slot="button-next"></div>
</div>
</template>

<script>
export default {
    data(){
        return {
            swiperOption: {
                effect: "slide", // 切换轮播风格
                direction: 'vertical', // 垂直切换选项
                slidesPerView: 4, // 轮播显示数量
                spaceBetween: 15, //每个swiper-slide之间的间距
                loop: false, // 循环模式选项
                navigation: {
                    nextEl: '.custom-swiper-button-next',
                    prevEl: '.custom-swiper-button-prev'
                }
            },
            homeBanner: [
                {img:'19mm-silk-pillowcase-with-ruffle-trim-4160-PUBLIC-1-20190829155025.jpg',href:"/1"},
                {img:'19mm-silk-pillowcase-with-ruffle-trim-4160-PUBLIC-2-20190829155025.jpg',href:"/2"},
                {img:'19mm-silk-pillowcase-with-ruffle-trim-4160-PUBLIC-3-20190829155025.jpg',href:"/3"},
                {img:'19mm-silk-pillowcase-with-ruffle-trim-4160-PUBLIC-4-20190829155025.jpg',href:"/4"},
                {img:'19mm-silk-pillowcase-with-ruffle-trim-4160-PUBLIC-5-20190829155025.jpg',href:"/5"},
                {img:'19mm-silk-pillowcase-with-ruffle-trim-4160-PUBLIC-6-20190829155025.jpg',href:"/6"},
                {img:'19mm-silk-pillowcase-with-ruffle-trim-4160-PUBLIC-7-20190829155025.jpg',href:"/7"},
            ]
        }
    }
}
</script>

<style>
/* 可视高度 */
.swiper-wrapper { 
    height: 440px;
}
/*图片样式*/
.swiper-img {
    width: 100%;
    max-width: 110px;
    padding: 4px;
    border: 1px solid #eee;
}
.swiper-img:hover {
    border: 1px solid #000;
}
/*按钮样式*/
.custom-swiper-button-prev,.custom-swiper-button-next {
    display: block;
    margin: auto;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
}
.custom-swiper-button-prev:hover,.custom-swiper-button-next:hover {
    color: #fff;
    background: #000;
}
.custom-swiper-button-prev {
    margin-bottom: 10px;
    outline: none;
}
.custom-swiper-button-next {
    margin-top: 10px;
    outline: none;
}
</style>