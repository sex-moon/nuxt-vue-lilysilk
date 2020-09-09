<template>
    <div v-swiper:mySwiper="swiperOption" v-if="imageList.length > 0" :style="_style">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) of imageList" :key="index">
                <img class="swiper-img" :src="`${domainName}${item.image}`" />
            </div>
        </div>

        <!-- <div class="custom-swiper-button-prev fa fa-angle-up" slot="button-prev"></div>
        <div class="custom-swiper-button-next fa fa-angle-down" slot="button-next"></div> -->
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
            default: 3.3
        },
        spaceBetween: { // 每个swiper-slide之间的间距
            type: Number,
            default: 5
        },
        loop: { // 是否开启自动循环模式
            type: Boolean,
            default: false
        },
        _style: {
            type: Object,
            default: ()=>{
                return {
                    maxHeight: '500px',
                    overflowY: 'hidden'
                };
            }
        }
    },
    data(){
        return {
            swiperOption: {
                effect: this.effect,
                direction: "vertical",
                slidesPerView: this.slidesPerView,
                spaceBetween: this.spaceBetween,
                loop: this.loop,
                // navigation: {
                //     nextEl: '.custom-swiper-button-next',
                //     prevEl: '.custom-swiper-button-prev'
                // }
            }
        }
    },
    computed: {
        ...mapState(["domainName"])
    }
}
</script>

<style scoped>
/*图片样式*/
.swiper-img {
    height: 100%;
    max-height: 148px;
    padding: 4px;
    border: 1px solid #eee;
    cursor: pointer;
}
.swiper-img:hover {
    border: 1px solid #000;
}
/* .custom-swiper-button-prev, .custom-swiper-button-next{
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
} */
</style>