<template>
    <transition name="topbannerHide">
        <div class="tc" id="topbanner" v-if="!hideTopBanner && topbannar.content">
            <div v-html="topbannar.content"></div>
            
            <i class="fa banner-main-show" :class="[bannerMainShow ? 'fa-angle-double-up':'fa-angle-double-down']" aria-hidden="true" @click="bannerMainShow = !bannerMainShow" v-if="topbannar.content_dropdown"></i>
            <i class="fa fa-times close" aria-hidden="true" @click="setHideTopBanner(true)"></i>

            <transition name="bannerMainFade">
                <div class="banner-main" v-show="bannerMainShow">
                    <div class="banner-main-container" v-html="topbannar.content_dropdown"></div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
import {mapState, mapMutations} from "vuex";
export default {
    data () {
        return {
            bannerMainShow: false      
        }
    },
    computed: {
        ...mapState("header", ["hideTopBanner", "topbannar"])
    },
    methods: {
        ...mapMutations(["setHideTopBanner"])
    }
}
</script>

<style>
#topbanner{
    background-color: #000;
    position: relative;
    height: 45px;
    line-height: 45px;
}
#topbanner li a{
    color: #fff;
}
#topbanner .close, #topbanner .banner-main-show{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    cursor: pointer;
    color: #fff;
}
#topbanner .banner-main-show{
    right: 600px;
}

#topbanner .banner-main-container {
    position: absolute;
    background: #fff;
    padding: 10px;
    box-shadow: 0 3px 10px rgba(0,0,0,.15);
}
#topbanner .banner-main-container .imgList{
    display: flex;
}
#topbanner .banner-main-container .imgList li {
  margin-right: 10px;
}
#topbanner .banner-main-container .imgList li img {
  width: 100%;
}


.topbannerHide-leave-active {
  transition: top 200ms ease-in-out;
}
.topbannerHide-leave {
  top: 0;
}
.topbannerHide-leave-to {
  top: -40px;
}
.bannerMainFade-enter, .bannerMainFade-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}
.bannerMainFade-leave-active, .bannerMainFade-enter-active {
  transition: all 0.5s linear;
}
</style>