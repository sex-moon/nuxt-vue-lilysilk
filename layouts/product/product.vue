<template>
    <div class="product-page">
       <ProductImage></ProductImage>
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
        ProductImage: ()=>import('~/layouts/product/product-image.vue')
    }
}
</script>