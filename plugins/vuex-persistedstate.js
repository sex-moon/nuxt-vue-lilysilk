import createPersistedState from 'vuex-persistedstate'
 
export default (context) => {
    createPersistedState({
        key: 'lilysilk-vuex',
        reducer(state){
            return {
                customer: {
                    accessToken: state.customer.accessToken
                }
            }
        }
    })(context.store)
}