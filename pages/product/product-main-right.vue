<template>
    <div class="product">
       	<h1 class="product-name f24">{{product.name}}</h1>

       	<div class="product-stock">
           	<p class="stock-state">{{product.stock === 0 ? "Sold Out" : "In Stock"}}</p>

           	<p class="sku">
               <span>SKU: </span>
               <span>{{product.sku}}</span>
           	</p>

           	<div class="rating-quantity">
                <Rate v-model="product.review.rating" disabled show-text />({{product.review.total}})</Rate>
           	</div>
        </div>

        <div class="price-and-sale">
            <div class="product-price">
                <p v-if="product.discount">
                    <span class="discount-price">{{product.discount}}</span>
                    <span class="original-price">{{product.price}}</span>
                    <span class="save-price">{{product.price - product.discount}}</span>
                </p>

                <p v-else><span class="original-price">{{product.price}}</span></p>

                <!-- <p class="product-vip-price">
                    <span class="vip-price">{{VipPrice}}</span>
                    <span class="vip-tips">VIP Exclusive Price<img src="~/assets/image/product/vip_tips.webp"></span>
                </p> -->
            </div>

            <div class="product-sale">
                <p class="discount"><span class="red-dot">●</span>Buy 1 Get 1 30% OFF. Add Two Items To Qualify.</p>
                <p class="discount"><span class="red-dot">●</span>Buy 3, Get 1 60% Off. Add Four Items To Qualify.</p>
            </div>
        </div>


        <ProductAttributes></ProductAttributes>

        <ProductCustomized></ProductCustomized>
        <!-- <EmbroideredCharacters></EmbroideredCharacters> -->
        <!-- 定制、绣字 -->
        <!-- <ProductOptionsSummary></ProductOptionsSummary> -->
        <!-- 价格总览 -->
        <!-- <Description></Description> -->
        <!-- 售后说明 -->
        <!-- <div class="complete-the-look">
            <p class="complete-title">Complete The Look</p>
            <div class="complete-img-lists">
                <div class="complete-img" v-for="(complete,index) in completes" :key="index">
                    <img :src="'/images/product/complete/' + complete.img">
                    <nuxt-link :to="complete.url" class="details">Details</nuxt-link>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    computed: {
        ...mapState("product", ["product"])
    },
    components: {
        ProductAttributes: ()=>import("~/pages/product/product-attributes.vue"),
        ProductCustomized: ()=>import("~/pages/product/product-customized.vue"),
        // EmbroideredCharacters: ()=>import("~/components/enclosure/embroidered.vue"),
        /* 定制、绣字 */
        // ProductOptions: ()=>import("~/pages/product/product-right-model/product-options.vue"),
        // ProductOptionsSummary: ()=>import("~/pages/product/product-right-model/product-summary.vue"),
        /* 颜色、尺码，总价及加购按钮 */
        // Description: ()=>import("~/pages/product/product-right-model/product-description.vue"),
        /* 售后说明 */
    }
}
</script>

<style scoped>
.product-stock {
    margin-bottom: 10px;
}
.stock-state,.sku,.rating-quantity {
    display: inline-block;
}
.sku,.rating-quantity {
    margin-left: 40px;
}
.ratings {
    padding: 0;
}
.b-rating.disabled, .b-rating:disabled {
    background-color: #fff;
    color: #000;
}
/* 价格&折扣 */
.price-and-sale {
    background: #eee;
    padding-left: 10px;
    padding-bottom: 10px;
}
.original-price {
	font-size: 28px;
}
.product-vip-price {
    position: relative;
}
.product-vip-price .vip-price {
	font-size: 18px;
}
.product-vip-price .vip-tips {
    font-size: 12px;
    font-weight: 600;
    padding: 0 7px;
    margin-left: 5px;
    border-radius: 3px;
	background: #000;
	color: #C1A446;
}
.product-vip-price img {
    width: 11px;
    margin-left: 4px;
    margin-bottom: 2px;
    vertical-align: middle;
 }
.vip-suspended-window {
    display: none;
    position: absolute;
    width: 60%;
    top: 24px;
    right: 100px;
    background: #fff;
}

.discount {
    display: block;
    margin-top: 8px;
    line-height: 18px;
}
.discount .red-dot {
    font-size: 5px;
    color: #d64123;
    margin-right: 5px;
    vertical-align: top;
}
.discount-activity {
    text-decoration: underline;
}
/*公共弹框样式*/
.popup-background {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 3;
}
.popup-content {
    position: absolute;
    height: 90%;
    background-color: #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    box-sizing: border-box;
    overflow: auto;
    z-index: 3;
}
.popup-close {
    position: absolute;
    top: 5%;
    z-index: 4;
    cursor: pointer;
}
.popup-close img {
    width: 36px;
    height: 36px;
}
/* 成品展示 */
.complete-the-look {
    margin-top: 5px;
}
.complete-title {
    display: block;
    font-size: 19px;
    font-weight: 400;
    padding: 7px 0;
    border-bottom: 1px solid #e5e5e5;
}
.complete-img-lists {
    display: flex;
}
.complete-img {
    position: relative;
    margin: 20px 10px 20px 0;
    cursor: pointer;
}
.complete-img img {
    min-height: 100px;
}
.details {
    display: none;
    position: absolute;
    font-size: 18px;
    left: 50%;
    top: 50%;
    width: 75%;
    padding: 3px 0;
    transform: translate(-50%, -50%);
    background: hsla(0,0%,100%,.8);
    text-align: center;
}
.complete-img:hover .details {
    display: block;
}
.details:hover {
    color: #C1A446;
}
</style>