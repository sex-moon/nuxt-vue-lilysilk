export const state = () => ({
    hideTopBanner: false, // 隐藏TopBanner
    topbannar: {}, // topbanner 内容
    openSearch: false, // 
    suggestions: [] // 搜索推荐
})

export const mutations = {
    setHideTopBanner(state, status){
        state.hideTopBanner = status;
    },
    setTopbannar(state, data){
        state.topbannar = data;
    },
    setAccessToken(state, token){
        state.accessToken = token;
    },
    setOpenSearch(state, status){
        state.openSearch = status;
    },
    setSuggestions(state, data){
        state.suggestions = data;
    }
}

export const actions = {}