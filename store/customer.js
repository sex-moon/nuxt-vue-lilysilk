export const state = () => ({
    accessToken: null // 登录用户的token
})

export const mutations = {
    setAccessToken(state, token){
        state.accessToken = token;
    }
}

export const actions = {}