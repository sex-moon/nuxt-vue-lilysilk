<template>
    <div class="product-card">
        <nuxt-link to="#" class="product-image">
            <img v-lazy="'http://115.28.241.1/web/image/product/'+product.sku+'/500/'+productImage" @mouseover="changeImage(1)" @mouseout="changeImage(0)">
        </nuxt-link>

        <p class="product-name">{{product.name}}</p>

        <p class="product-price">
            <span class="price">US$ {{product.price}}</span>
            <i class="fa fa-heart-o" aria-hidden="true"></i>
        </p>

        <ul class="color-list" v-if="product.colors.length > 0">
            <li v-for="(color, index) in product.colors" :key="index">
                <img :src="require('~/static/images/attribute/'+color.attribute_value_img)" :alt="color.attribute_value">
            </li>
        </ul>
    </div>
</template>

<script>
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
            productImage: this.product.product_image[0].img
        }
    },
    methods: {
        changeImage(index){
            this.productImage = this.product.product_image[index].img;
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