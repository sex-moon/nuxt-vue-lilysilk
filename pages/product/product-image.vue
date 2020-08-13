<template>
    <div class="product-image">
       <div class="image-list">
           <ProductCarousel></ProductCarousel>
       </div>
       <div class="image-big">
            <img class="img-enlarge" src="https://images.lilysilk.com/media/catalog/product/cache/6/image/1000x/040ec09b1e35df139433887a97daa66f/m/no/4160/19mm-silk-pillowcase-with-ruffle-trim-4160-PUBLIC-3-20190829155025.jpg">
            <div class="share-luxury-moment">
                Share your luxury moment with #lilysilk on IG to win FREE purchase.
            </div>
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
    display: flex;
    width: 60%;
}
.image-list {
    margin-right: 10px;
}
.image-big {
    width: 100%;
}
.img-enlarge {
    padding: 5px;
    border: 1px solid #eee;
}
.share-luxury-moment {
    display: block;
    border-top: 2px solid #222;
    margin-top: 20px;
    text-align: center;
}
</style>