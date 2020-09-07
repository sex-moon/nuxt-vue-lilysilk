<template>
    <Drawer :closable="false" v-model="openMiniCart" :mask="false" :width="430">
        <div id="mini-cart">
            <div class="mini-cart-head">
                <p class="mini-cart-head-title tc fl">
                    <Icon type="md-close" class="fl" @click="setOpenMiniCart(false)" />
                    <span>SHOPPING CART</span>
                </p>

                <div class="mini-cart-head-tips tc">
                    <p class="f12">YOUR CART HAS ITEM(S)</p>
                    <p class="f15">Only <span style="color:#D64123;">$50.00</span> Until Free Shipping</p>
                </div>
            </div>

            <div class="mini-cart-content">
                <div class="mini-cart-content-empty tc">
                    <p>There is nothing in your shopping cart<br>Add a product to get started</p>
                </div>
            </div>

            <div class="mini-cart-foot">
                <ul class="mini-cart-check-info">
                    <li class="f18"><span>Subtotal</span><span>$0.00</span></li>
                    <li class="f24"><span>Total</span><span>$0.00</span></li>
                </ul>

                <div class="mini-cart-button">View Cart and Checkout</div>
            </div>
        </div>
    </Drawer>
</template>

<script>
import {mapState, mapMutations} from "vuex"
export default {
    computed: {
        ...mapState(["openMiniCart"]),
        ...mapState("shopcart", ["totalNumber"])
    },
    methods: {
        ...mapMutations(["setOpenMiniCart"])
    }
}
</script>

<style scoped>
#mini-cart{
    display: flex;
    flex-direction: column;
    height: 100%;
}
.mini-cart-content{
    flex-grow: 1;
}
.mini-cart-content-empty{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
.mini-cart-head-title{
    font-size: 24px;
    width: 100%;
}
.mini-cart-head-title .ivu-icon-md-close{
    font-size: 20px;
    padding: 10px;
    background-color: #e5e5e5;
    cursor: pointer;
}
.mini-cart-head-title > span{
    vertical-align: middle;
}
.mini-cart-head-tips{
    border-bottom: 1px solid #333;
    padding-bottom: 10px;
}
.mini-cart-check-info{
    padding: 20px 0;
    border-top: 1px solid;
    border-bottom: 1px solid #e5e5e5;
}
.mini-cart-check-info li{
    display: flex;
    justify-content: space-between;
}
.mini-cart-button{
    margin-top: 10px;
    font-size: 24px;
    height: 64px;
    text-align: center;
    line-height: 64px;
    background-color: #d64123;
    color: #fff;
    cursor: pointer;
}
</style>