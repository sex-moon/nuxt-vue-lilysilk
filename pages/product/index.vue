<template>
    <div class="product-main">
        <div class="temporary-parking">Home > Samething > **********************</div>
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
.temporary-parking {
    display: block;
    color: #bbb;
    margin-left: 20px;
    margin-bottom: 20px;
}
</style>