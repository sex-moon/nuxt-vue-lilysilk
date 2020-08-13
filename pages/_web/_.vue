<template>
    <div>
        <!-- <Category v-if="type == 'category'"></Category> -->
        <Product></Product>
    </div>
</template>

<script>
export default {
    // async asyncData ({app, params, error}) {
    //     const response = await app.$axios.$post("until/urLParsing", {path: params.pathMatch, web: params.web});
    //     if(response.code == 200)
    //     {
    //         return {type: response.type, data: response.data};
    //     }
    //     else if(response.code == 404)
    //     {
    //         return error({statusCode: 404});
    //     }
    //     else
    //     {
    //         return error({statusCode: 500});
    //     }
    // },
    components: {
        Category: ()=>import('~/pages/category/index.vue'),
        Product: ()=>import('~/pages/product/index.vue')
    }
}
</script>