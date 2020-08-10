<template>
    <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) of imageList" :key="index">
                <nuxt-link :to="item.href" v-if="item.href">
                    <img class="swiperImg" :src="'http://115.28.241.1/web/image/poster/'+item.img" />
                </nuxt-link>

                <img class="swiperImg" :src="'http://115.28.241.1/web/image/poster/'+item.img" v-else/>
            </div>
        </div>

        <div class="swiper-pagination" slot="pagination"></div>
        <div class="custom-swiper-button-prev fa fa-angle-left" slot="button-prev"></div>
        <div class="custom-swiper-button-next fa fa-angle-right" slot="button-next"></div>
    </div>
</template>

<script>
export default {
    props: {
        imageList: {
            type: Array,
            default: ()=>{
                return [];
            }
        }
    },
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
            }
        }
    }
}
</script>

<style>
.swiper-pagination{
    height: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.swiper-pagination .my-bullet{
    border-radius: 50%;
    width: 4px;
    height: 4px;
    margin: 4px;
    background: #000000;
    display: block;
}
.swiper-pagination .my-bullet-active{
    display: block;
    background: #000000;
    width: 10px;
    height: 4px;
    border-radius: 2px;
}
.prevSwiper,.nextSwiper{
    position: absolute;
    top: 50%;
    background: #fff;
    width: 50px;
    height: 50px;
    text-align: center;
    cursor: pointer;
    color: #000;
    z-index: 10;font-family: FontAwesome;display: none;}
.prevSwiper:hover,.nextSwiper:hover{background: #c1a446;color:#fff;}
.prevSwiper{left: 0px;}
.nextSwiper{right: 0px;}
.prevSwiper:before {
    content: "\f104";
    font-size: 28px;
    margin-top: 10px;
    display: inline-block;cursor: pointer;}
.nextSwiper:before {
    content: "\f105";
    font-size: 28px;
    margin-top: 10px;
    display: inline-block;cursor: pointer;}
.custom-swiper-button-prev, .custom-swiper-button-next{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #ffffff;
    color: #333;
    transition: opacity 300ms ease-in-out, background-color 300ms ease-in-out, color 300ms ease-in-out;
}
.custom-swiper-button-prev{
    left: 0;
}
.custom-swiper-button-next{
    right: 0;
}
.custom-swiper-button-prev:hover, .custom-swiper-button-next:hover{
    background: #c1a446;
    color: #fff;
}
</style>