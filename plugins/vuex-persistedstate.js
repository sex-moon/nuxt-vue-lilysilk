import createPersistedState from 'vuex-persistedstate'
 
export default (context) => {
    createPersistedState({
        key: 'lilysilk-vuex',
        reducer(state){
            return {
                hideTopBanner: state.hideTopBanner,
                category: {
                    value: state.category.value
                }
            }
        }
    })(context.store)
}