<template>
    <div>
        <ProductInformation></ProductInformation>
    </div>
</template>

<script>
export default {
    async asyncData(){
        console.log("asyncData", "product");
    },
    components: {
        ProductInformation: ()=>import('~/layouts/product/product.vue')
    }
}
</script>