export const state = ()=>({
    category: {},
    sonCategory: [],
    categoryAttributeList: {},
    categoryProducts: [],
    categoryPagination: {},
    perPage: 15, // 每页条数
    sort: "price", // 默认排序规则
    order: "asc", // 默认正序
})

export const mutations = {
    setCategoryInfo(state, info){
        if(info.current){
            this.commit("category/setCategory", info.current);
        }

        if(info.son){
            this.commit("category/setSonCategory", info.son);
        }

        if(info.category_attributes){
            this.commit("category/setcategoryAttributeList", info.category_attributes);
        }

        if(info.products){
            info.products.total > 0 && this.commit("category/setCategoryProducts", info.products.data);

            delete info.products.data;

            this.commit("category/setCategoryPagination", info.products)
        }
    },
    setCategory(state, data){
        state.category = data;
    },
    setSonCategory(state, data){
        state.sonCategory = data;
    },
    setcategoryAttributeList(state, data){
        state.categoryAttributeList = data;
    },
    setCategoryProducts(state, data){
        state.categoryProducts = data;
    },
    setCategoryPagination(state, data){
        state.categoryPagination = data;
    },
    setPerPage(state, perPage){
        state.perPage = perPage;
    },
    setSort(state, sort){
        state.sort = sort;
    },
    setOrder(state, order){
        state.order = order;
    }
}

export const actions = {
    
};