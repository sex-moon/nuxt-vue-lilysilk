<template>
    <div class="product-image">
       <div class="image-list">
           <ProductCarousel></ProductCarousel>
       </div>
       <div class="image-big">
           <img class="img-enlarge" src="https://images.lilysilk.com/media/catalog/product/cache/6/image/1000x/040ec09b1e35df139433887a97daa66f/m/no/4160/19mm-silk-pillowcase-with-ruffle-trim-4160-PUBLIC-3-20190829155025.jpg">
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
    width: 55%;
    vertical-align: top;
}
.image-list {
    display: inline-block;
    margin-right: 10px;
    vertical-align: top;
}
.image-big {
    display: inline-block;
    width: 82%;
    vertical-align: top;
}
.img-enlarge {
    padding: 5px;
    border: 1px solid #eee;
}
</style>