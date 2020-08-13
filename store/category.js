export const state = ()=>({
    category: {},
    peerCategory: [],
    categoryAttributeList: {}
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
    },
    setCategory(state, data){
        state.category = data;
    },
    setPeerCategory(state, data){
        state.peerCategory = data;
    },
    setcategoryAttributeList(state, data){
        state.categoryAttributeList = data;
    }
}

export const actions = {
    
};