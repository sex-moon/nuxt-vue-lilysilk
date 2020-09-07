export const state = () => ({
    web: "au", // 站点
    openMiniCart: false
})

export const mutations = {
    setWeb(state, web){
        state.web = web;
    },
    setOpenMiniCart(state, status){
        state.openMiniCart = status;
    }
}

export const actions = {}