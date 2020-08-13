export const state = () => ({
    hideTopBanner: false, // 隐藏TopBanner
})

export const mutations = {
    setHideTopBanner(state, status){
        state.hideTopBanner = status;
    }
}

export const actions = {}