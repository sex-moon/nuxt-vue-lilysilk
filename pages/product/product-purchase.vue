<template>
    <div class="product-purchase">
       	<div class="product-purchase-title">
           19MM Silk Pillowcase With Ruffle Trim And Hidden Zipper
       	</div>
       	<div class="product-stock">
           	<p class="stock-state">
               {{StockState}}
           	</p>
           	<p class="sku">
               <span>SKU: </span>
               <span>{{SkuValue}}</span>
           	</p>
           	<div class="ratings-box">
               <div class="ratings"></div>
          	</div>
           	<div class="rating-quantity">
               <nuxt-link :to="a">{{RatingQuantity}}</nuxt-link>
           	</div>
        </div>
        <div class="product-price">
            <p class="original-price">{{OriginalPrice}}</p>
            <p class="product-vip-price">
                <span class="vip-price">{{VipPrice}}</span>
                <span class="vip-tips">VIP Exclusive Price<img src="~/assets/image/product/vip_tips.webp"></span>
            </p>
           <p class="discount"><span class="red-dot">●</span>Buy 1 Get 1 30% OFF. Add Two Items To Qualify.</p>
           <p class="discount"><span class="red-dot">●</span>Buy 3, Get 1 60% Off. Add Four Items To Qualify.</p>
		   <nuxt-link :to="a" class="discount"><span class="red-dot">●</span><span class="discount-activity">{{DiscountActivity}}</span></nuxt-link>
        </div>
        <ProductOptions></ProductOptions>
        <Customized></Customized>
        <EmbroideredCharacters></EmbroideredCharacters>
        <div class="product-options-summary">
            <div class="purchase-quantity">
                <label class="qty">Qty</label>
                <div class="qty-button" @click="minusQty"><div class="fa fa-minus-circle fa-2x"></div></div>
                <input type="text" name="qty" id="qty" class="input-text-qty" maxlength="12" :value="QtyInput" @input="inputQty">
                <div class="qty-button" @click="additionQty"><div class="fa fa-plus-circle fa-2x"></div></div>
            </div>
            <div class="total-content">
                <div class="total">
                    Total:
                    <span>{{Total}}</span>
                </div>
                <div class="points">
                    Earn 
                    <span>{{Points}}</span> 
                    LILYSILK Points
                </div>
            </div>
            <div class="add-to-cart">
                <button class="add-to-cart-button">
                    <img src="~/assets/image/product/gouwuche.webp">
                    <span>Add to Cart</span>
                </button>
                <div class="wish-list">
                    <img src="~/assets/image/product/heart.webp" v-if="isHeart">
                    <img src="~/assets/image/product/solidheart.webp" v-else>
                </div>
            </div>
        </div>
        <Description></Description>
        <div class="complete-the-look">
            <p class="complete-title">Complete The Look</p>
            <div class="complete-img-lists">
                <div class="complete-img" v-for="(complete,index) in completes" :key="index">
                    <img :src="'/images/product/complete/' + complete.img">
                    <nuxt-link :to="complete.url" class="details">Details</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            completes: [
                {img:'800-6111B-20190130100748.jpg',url:'/'},
                {img:'800-6196C-20191108102259.jpg',url:'/'},
                {img:'korean-style-silk-night-sleep-hat-main-7005-1-20200812104730.jpg',url:'/'},
                {img:'silke-sd-ovnmaske-med-sort-trim-Light-Plum-3122-1-20180706.jpg',url:'/'}
            ],
            a: "/",
            StockState: "In Stock",
            SkuValue: "4160",
            RatingQuantity: "(34)",
            OriginalPrice: "$42.00",
            VipPrice: "$39.90",
            DiscountActivity: "10th Anniversary Sale, More Deals Than Black Friday >",
            Total: "$42.00",
            Points: "42",
            isHeart: true,
            QtyInput: "1",
            isMouseOver: "-1"
        }
    },
    components: {
        ProductOptions: ()=>import("~/pages/product/product-options.vue"),
        Description: ()=>import("~/pages/product/product-description.vue"),
        Customized: ()=>import("~/components/enclosure/customized.vue"),
        EmbroideredCharacters: ()=>import("~/components/enclosure/embroidered.vue"),
    },
    methods: {
        minusQty() {
            if(this.QtyInput > 1) {
                this.QtyInput--;
            }else {
                this.QtyInput = this.QtyInput;
            }
        },
        additionQty() {
           if(this.QtyInput < 1) {
                this.QtyInput = this.QtyInput;

            }else {
                this.QtyInput++;
            } 
        },
        inputQty(e){
            this.QtyInput = e.target.value;
        },
        // completeover(index) {
        //     this.isMouseOver = index;
        // },
        // completeout() {
        //     this.isMouseOver = this.isMouseOver;
        // }
    }
}
</script>

<style>
.product-purchase {
    width:40%;
    margin-left: 5%;
}
.product-purchase-title {
    font-size: 24px;
    line-height: 24px;
}
.product-stock {
    margin-bottom: 10px;
}
.stock-state,.sku,.ratings-box,.rating-quantity {
    display: inline-block;
}
.sku,.ratings-box,.rating-quantity {
    margin-left: 40px;
}
.ratings-box {
    background: url(https://www.lilysilk.com/skin/frontend/ultimo/default/images/img/rating.png) 0 0 repeat-x;
}
.ratings {
    background: url(https://www.lilysilk.com/skin/frontend/ultimo/default/images/img/rating.png) 0 100% repeat-x;
}
/* 价格&折扣 */
.product-price {
    background: #eee;
    padding-left: 10px;
    padding-bottom: 10px;
}
.original-price {
	font-size: 28px;
}
.product-vip-price .vip-price {
	font-size: 18px;
}
.product-vip-price .vip-tips {
    font-size: 12px;
    font-weight: 600;
    padding: 0 7px;
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
/*加购操作*/
.product-options-summary {
    margin-bottom: 10px;
}
/*数量加减*/
.purchase-quantity {
    margin-top: 20px;
    margin-bottom: 20px;
}
.qty,.input-text-qty,.qty-button {
    display: inline-block;
    vertical-align: middle;
}
.purchase-quantity .qty {
    margin-right: 18px;
}
.purchase-quantity .input-text-qty {
    width: 3em;
    text-align: center;
    border: none;
    outline: none;
    padding: 8px;
    text-overflow: ellipsis
}
.purchase-quantity .qty-button {
    cursor: pointer;
}
/**/
.total-content {
    margin-bottom: 10px;
}
.total,.points {
    display:inline-block;
    vertical-align: bottom;
}
.total-content .total {
    font-size: 20px;
    margin-right: 30px;
}
.total-content .points {
    font-size: 14px;
}
.total-content span {
    color: #d64123;
}
/* 加购按钮 */
.add-to-cart {
    display: flex;
}
.add-to-cart-button,.wish-list {
    height: 48px;
    vertical-align: top;
}
.add-to-cart-button {
    width: 50%;
    margin-right: 20px;
    background: #d64123;
    color: #fff;
    border: none;
}
.add-to-cart-button:focus {
    outline: none;
}
.add-to-cart-button img {
    width: 24px;
    margin-right: 10px;
    vertical-align: sub;
}
.wish-list {
    width: 48px;
    padding: 10px;
    border: 1px solid #222;
}
.wish-list img {
    width: 26px;
}
/*成品展示*/
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