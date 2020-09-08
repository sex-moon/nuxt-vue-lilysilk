<template>
    <div>
        <Category v-if="type == 'category'"></Category>
        <Product v-else-if="type == 'product'"></Product>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    async asyncData ({app, params, error, store}) {
        let _params = {
            web: store.state.web,
            url: params.pathMatch.split("/").pop(),
            sort: store.state.category.sort,
            order: store.state.category.order,
            per_page: store.state.category.perPage
        };

        const response = await app.$axios.$get("/product_or_category", {params: _params});
        if(response.status == 200)
        {
            switch (response.info.type) {
                case "category":
                    store.commit('category/setCategoryInfo', response.info);
                    break;
                default:
                    break;
            }
            
            return {type: response.info.type};
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
    head(){
		return {
			title: this.category.title,
			meta: [
				{name: "description", content: this.category.description || this.category.name},
				{name: "keywords", content: this.category.keywords || this.category.name}
			]
		}
    },
    computed: {
        ...mapState("category", ["category"])  
    },
    components: {
        Category: ()=>import('~/pages/category/index.vue'),
        Product: ()=>import('~/pages/product/index.vue')
    }
}
</script>