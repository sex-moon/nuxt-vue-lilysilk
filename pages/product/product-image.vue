<template>
    <div class="product-image">
       <div class="image-list">
           <ProductCarousel></ProductCarousel>
       </div>
       <div class="image-big">
           <img src="https://images.lilysilk.com/media/catalog/product/cache/6/image/1000x/040ec09b1e35df139433887a97daa66f/m/no/4160/19mm-silk-pillowcase-with-ruffle-trim-4160-PUBLIC-3-20190829155025.jpg">
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    components: {
        ProductCarousel: ()=>import('~/pages/product/product-carousel-test.vue')
    }
}
</script>

<style>
.product-image {
    display: inline-block;
}
.image-list {
    display: inline-block;
    width: 30%;
    vertical-align: top;
}
.image-big {
    display: inline-block;
    width: 60%;
    vertical-align: top;
}
</style>