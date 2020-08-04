<template>
    <transition name="hide">
        <div class="topbanner tc" v-if="!hideTopBanner">
            <ul class="container-fluid">
                <li v-for="(topBanner, key) in topBanners" :key="key">
                    <nuxt-link :to="topBanner.href">
                        <span class="message">{{topBanner.message}}</span>&nbsp;&nbsp;
                        <span class="button p-1 d-none d-sm-inline">{{topBanner.button}}</span>
                    </nuxt-link>
                </li>
            </ul>

            <i class="fa fa-times close" aria-hidden="true" @click="setHideTopBanner(true)"></i>
        </div>
    </transition>
</template>

<script>
import {mapState, mapMutations} from "vuex";
export default {
    data () {
        return {
            topBanners: [
                {
                    message: "$10 OFF Every $200 Storewide",
                    button: "Shop Now",
                    href: "#",
                }
            ]
        }
    },
    computed: {
        ...mapState(["hideTopBanner"])
    },
    methods: {
        ...mapMutations(["setHideTopBanner"])
    }
}
</script>

<style scoped>
.topbanner{
    background-color: #000;
    position: relative;
    height: 45px;
    line-height: 45px;
}
li a{
    color: #fff;
}
.button{
    background-color: #D64123;
}
.close{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    cursor: pointer;
    color: #fff;
}
.hide-leave-active {
  transition: top 200ms ease-in-out;
}
.hide-leave {
  top: 0;
}
.hide-leave-to {
  top: -40px;
}
</style>