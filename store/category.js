export const state = ()=>({
    category: {},
    peerCategory: [],
    categoryAttributeList: {},
    categoryProducts: [],
    categoryPagination: {}
})

export const mutations = {
    setCategoryInfo(state, data){
        if(data.category){
            this.commit("category/setCategory", data.category);
        }

        if(data.peerCategory){
            this.commit("category/setPeerCategory", data.peerCategory);
        }

        if(data.categoryAttributeList){
            this.commit("category/setcategoryAttributeList", data.categoryAttributeList);
        }

        if(data.products){
            this.commit("category/setCategoryProducts", data.products);
        }

        if(data.categoryPagination){
            this.commit("category/setCategoryPagination", data.categoryPagination);
        }
    },
    setCategory(state, data){
        state.category = data;
    },
    setPeerCategory(state, data){
        state.peerCategory = data;
    },
    setcategoryAttributeList(state, data){
        state.categoryAttributeList = data;
    },
    setCategoryProducts(state, data){
        state.categoryProducts = data;
    },
    setCategoryPagination(state, data){
        state.categoryPagination = data;
    }
}

export const actions = {
    
};