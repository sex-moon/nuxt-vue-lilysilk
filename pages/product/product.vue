<template>
    <div class="product-page">
           <ProductImage></ProductImage>
           <ProductPurchase></ProductPurchase>
    </div>
</template>

<script>
export default {
    // async asyncData(){
    //     console.log("asyncData", "product");
    // },
    data(){
        return {}
    },
    components: {
        ProductImage: ()=>import('~/pages/product/product-image.vue'),
        ProductPurchase: ()=>import('~/pages/product/product-purchase.vue')
    }
}
</script>

<style>
.product-page {
    display: flex;
}
</style>