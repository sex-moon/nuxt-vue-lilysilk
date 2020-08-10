export const state = ()=>({
    value: 'Hello World',
    list: [1, 2, 3, 4, 5]
})

export const mutations = {
    setValue(state, val){
        state.value = val;
    }
}

export const actions = {
    
};