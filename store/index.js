export const state = () => ({
    domainName: "http://vue.lilysilk.com/image",
    web: "au", // 站点
    openMiniCart: false,
    locale: "en", // 语言包
    currencyCode: "US$" // 货币符号
})

export const mutations = {
    setWeb(state, web){
        state.web = web;
    },
    setLocale(state, locale){
        state.locale = locale;
    },
    setOpenMiniCart(state, status){
        state.openMiniCart = status;
    }
}

export const actions = {}