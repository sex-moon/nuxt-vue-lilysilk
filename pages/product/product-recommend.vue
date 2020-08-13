<template>
    <div class="product-recommend">
        <div class="product-recommend-title">
            Customers Who Viewed This Item Also Viewed
        </div>
        <!-- <Carousel></Carousel> -->
        <Bundledivcontent></Bundledivcontent>
    </div>
</template>

<script>
export default {
    components: {
        Bundledivcontent: ()=>import('~/pages/product/product-bundledivcontent.vue')
    }
}
</script>

<style>
.product-recommend {
    margin-top: 10px;
}
.product-recommend-title {
    display: block;
    font-size: 24px;
    color: #333;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 10px;
    margin-bottom: 20px;
}
</style>