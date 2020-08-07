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
        ProductInformation: ()=>import('~/pages/product/product.vue')
    }
}
</script>