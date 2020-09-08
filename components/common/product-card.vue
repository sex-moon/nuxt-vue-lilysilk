<template>
    <div class="product-card">
        <nuxt-link to="#" class="product-image">
            <img v-lazy="`${domainName}/product/${product.sku}/500/${productImage}`" @mouseover="changeImage(1)" @mouseout="changeImage(0)">
        </nuxt-link>

        <p class="product-name">{{product.name}}</p>

        <p class="product-price">
            <span class="price">{{currencyCode}} {{product.price}}</span>
            <i class="fa fa-heart-o" aria-hidden="true"></i>
        </p>

        <ul class="color-list" v-if="product.colors && product.colors.length > 0">
            <li v-for="(color, index) in product.colors" :key="index">
                <img :src="`/images/attribute/${color.image}`" :alt="color.value">
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    props: {
        product: {
            type: Object,
            default: ()=>{
                return {};
            }
        }
    },
    data () {
        return {
            productImage: this.product.productImg.length > 0 && this.product.productImg[0].image || ""
        }
    },
    computed: {
        ...mapState(["currencyCode", "domainName"])  
    },
    methods: {
        changeImage(index){
            if(this.product.productImg.length > 0)
            {
                this.productImage = this.product.productImg[index].image;
            }
        }
    }
}
</script>

<style scoped>
.product-name{
    margin: 3px 0;
    padding: 0;
    color: #666;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.product-price{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 15px;
}
.color-list{
    display: flex;
    margin: 16px 0;
    flex-wrap: wrap;
}
.color-list li{
    margin-right: 5px;
    margin-bottom: 5px;
}
.color-list li img{
    padding: 1px;
    width: 25px;
    border: 1px solid #ccc;
    cursor: pointer;
    transition: ease-in-out border-color 300ms;
}
.color-list li img:hover{
    border-color: #000;
}
</style>