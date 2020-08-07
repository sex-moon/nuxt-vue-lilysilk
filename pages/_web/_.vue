<template>
    <div>
        {{type}}
        <!-- <Category v-if="type == 'category'"></Category> -->
        <Product v-if="type == 'product'"></Product>
    </div>
</template>

<script>
export default {
    // async asyncData ({app, params}) {
    //     const response = await app.$axios.get("/test/1");
    //     return {type: response.data};
    // },
     data(){
        return {
            type:"product"
        }
    },
    components: {
        // Category: ()=>import('~/pages/category.vue'),
        Product: ()=>import('~/pages/product.vue')
    }
}
</script>