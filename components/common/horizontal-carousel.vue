<template>
    <div v-swiper:mySwiper="swiperOption" v-if="imageList.length > 0">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) of imageList" :key="index">
                <img class="swiper-img" :src="`${domainName}${item.image}`" />
            </div>
        </div>

        <div class="swiper-pagination" slot="pagination" v-if="pagination"></div>
        <div class="custom-swiper-button-prev fa fa-angle-left" slot="button-prev"></div>
        <div class="custom-swiper-button-next fa fa-angle-right" slot="button-next"></div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    props: {
        imageList: {
            type: Array,
            default: ()=>{
                return [];
            }
        },
        effect: { // 轮播风格 默认为"slide"（位移切换），可设置为"fade"（淡入）"cube"（方块）"coverflow"（3d流）"flip"（3d翻转）
            type: String,
            default: "slide"
        },
        slidesPerView: { // 轮播显示数量
            type: Number,
            default: 1
        },
        spaceBetween: { // 每个swiper-slide之间的间距
            type: Number,
            default: 0
        },
        loop: { // 是否开启自动循环模式
            type: Boolean,
            default: false
        },
        pagination: { // 是否显示点点
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            swiperOption: {
                effect: this.effect,
                direction: "horizontal",
                slidesPerView: this.slidesPerView,
                spaceBetween: this.spaceBetween,
                loop: this.loop,
                navigation: {
                    nextEl: '.custom-swiper-button-next',
                    prevEl: '.custom-swiper-button-prev'
                }
            }
        }
    },
    watch: {
        pagination: {
            handler(newVal){
                newVal && Object.assign(this.swiperOption, {pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }});
            },
            immediate: true
        }     
    },
    computed: {
        ...mapState(["domainName"])
    }
}
</script>

<style scoped>
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
    z-index: 10;
    display: none;
}
.prevSwiper:hover,.nextSwiper:hover{
    background: #c1a446;color:#fff;
}
.prevSwiper{
    left: 0px;
}
.nextSwiper{
    right: 0px;
}
.prevSwiper:before {
    content: "\f104";
    font-size: 28px;
    margin-top: 10px;
    display: inline-block;cursor: pointer;
}
.nextSwiper:before {
    content: "\f105";
    font-size: 28px;
    margin-top: 10px;
    display: inline-block;
    cursor: pointer;
}
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