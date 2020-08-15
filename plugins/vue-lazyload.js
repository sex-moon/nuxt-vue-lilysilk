import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
    loading: require('~/assets/image/default.png'),
    error: require('~/assets/image/default.png')
})