<template>
    <div class="product-main">
        <ProductInformation></ProductInformation>
    </div>
</template>

<script>
export default {
    // async asyncData(){
    //     console.log("asyncData", "product");
    // },
    components: {
        ProductInformation: ()=>import('~/pages/product/product.vue')
    }
}
</script>

<style>
.product-main {
    width: 95%;
    margin: auto;
}
</style>