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
                <span class="vip-tips">VIP Exclusive Price</span>
            </p>
           <p class="discount"><span class="red-dot">●</span>Buy 1 Get 1 30% OFF. Add Two Items To Qualify.</p>
           <p class="discount"><span class="red-dot">●</span>Buy 3, Get 1 60% Off. Add Four Items To Qualify.</p>
		   <nuxt-link :to="a" class="discount"><span class="red-dot">●</span>{{DiscountActivity}}</nuxt-link>
       </div>
       <div class="product-options">
           <div class="product-color-options">
               <p class="color-name"><span>Color:</span><span>{{ColorName}}</span></p>
               <ul>
                   <li v-for="(color,index) in colors" :key="index"></li>
               </ul>
           </div>
           <div class="product-size-options">
               <p class="color-name"><span>Color:</span><span>{{ColorName}}</span></p>
               <ul>
                   <li v-for="(color,index) in colors" :key="index"></li>
               </ul>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            a: "/",
            StockState: "In Stock",
            SkuValue: "4160",
            RatingQuantity: "(34)",
            OriginalPrice: "$42.00",
            VipPrice: "$39.90",
            DiscountActivity: "10th Anniversary Sale, More Deals Than Black Friday >",
        }
    },
    components: {}
}
</script>

<style>
.product-purchase {
    display: inline-block;
    width: 42%;
    margin-left: 2%;
    vertical-align: top;
}
.product-purchase-title {
    font-size: 24px;
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

.product-price {
    background: #eee;
}
.original-price {
	font-size: 28px;
}
.product-vip-price .vip-price {
	font-size: 18px;
}
.product-vip-price .vip-tips {
	background: #000;
	color: #C1A446;
}
.discount {
    margin-top: 8px;
    line-height: 18px;
}
.discount .red-dot {
    font-size: 5px;
    color: #d64123;
    margin-right: 5px;
    vertical-align: top;
}
</style>