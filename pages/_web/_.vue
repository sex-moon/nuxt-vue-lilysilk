<template>
    <div>
        <Category v-if="type == 'category'"></Category>
        <Product v-else-if="type == 'product'"></Product>
    </div>
</template>

<script>
export default {
    async asyncData ({app, params, error, store}) {
        const response = await app.$axios.$post("/distribute", {path: params.pathMatch, web: params.web});
        if(response.code == 200)
        {
            switch (response.type) {
                case "category":
                    store.commit('category/setCategoryInfo', response.data);
                    break;
                default:
                    break;
            }
            
            return {type: response.type};
        }
        else if(response.code == 404)
        {
            return error({statusCode: 404});
        }
        else
        {
            return error({statusCode: 500});
        }
    },
    components: {
        Category: ()=>import('~/pages/category/index.vue'),
        Product: ()=>import('~/pages/product/index.vue')
    }
}
</script>