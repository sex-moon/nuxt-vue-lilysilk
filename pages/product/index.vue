<template>
    <div id="product">
        <div class="product-container">
            <ProductMain></ProductMain>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        ProductMain: ()=>import('~/pages/product/main.vue')
    }
}
</script>

<style>
#product{
    width: 96%;
    max-width: 1500px;
    margin: auto;
    margin-top: 30px;
}
</style>