export const state = ()=>({
    product: {}, // 产品基础数据
    productAttributes: [], // 产品属性
    productReviews: {}, // 产品评论
    productSet: [], // 套件产品的子产品
    productTogether: [], // 捆绑产品
    productTopTabs: [],
    productImages: [], // 产品图
    productTypeTabs: [],
    productIcon: [] // 产品角标
})

export const mutations = {
    setProductInfo(state, info){
        if(info.attributes){
            this.commit("product/setProductAttributes", info.attributes);
            delete info.attributes;
        }

        if(info.reviews){
            info.review = {rating: info.reviews.rating, total: info.reviews.list.total};
            this.commit("product/setProductReviews", info.reviews);
            delete info.reviews;
        }

        if(info.set){
            this.commit("product/setProductSet", info.set);
            delete info.set;
        }
        
        if(info.together){
            this.commit("product/setProductTogether", info.together);
            delete info.together;
        }

        if(info.top_tabs){
            this.commit("product/setProductTopTabs", info.top_tabs);
            delete info.top_tabs;
        }

        if(info.productImg){
            info.productImg.map((obj, index)=>{
                obj.image = `/product/${info.sku}/500/${obj.image}`;
            })
            
            this.commit("product/setProductImages", info.productImg);
            delete info.productImg;
        }

        if(info.type_tabs){
            this.commit("product/setProductTypeTabs", info.type_tabs);
            delete info.type_tabs;
        }

        if(info.icon){
            this.commit("product/setProductIcon", info.icon);
            delete info.icon;
        }

        this.commit("product/setProduct", info);
    },
    setProductAttributes(state, data){
        state.productAttributes = data;
    },
    setProductReviews(state, data){
        state.productReviews = data;
    },
    setProductSet(state, data){
        state.productSet = data;
    },
    setProductTogether(state, data){
        state.productTogether = data;
    },
    setProductTopTabs(state, data){
        state.productTopTabs = data;
    },
    setProductImages(state, data){
        state.productImages = data;
    },
    setProductTypeTabs(state, data){
        state.productTypeTabs = data;
    },
    setProductIcon(state, data){
        state.productIcon = data;
    },
    setProduct(state, data){
        state.product = data;
    }
}

export const actions = {
    
};