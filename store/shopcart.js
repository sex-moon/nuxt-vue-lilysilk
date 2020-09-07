export const state = ()=>({
    totalNumber: 0, // 购物车总数量
    couponCode: null, // 折扣号
    use_integral: 0, // 使用的积分
    message: null, // 客户留言
    products: [] // 产品
})

export const mutations = {
    setProducts(state, products){
        state.products = products;
    }
}

export const actions = {
    
};