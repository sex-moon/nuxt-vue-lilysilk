<template>
    <div class="product-image">
       <div class="small-image">
           <ProductCarousel :imageList="productImages"></ProductCarousel>
       </div>
       
       <div>
           <div class="main-image">
                <img v-lazy="mainImageUrl">
            </div>

            <ul class="share-elements">
                <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
                <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
                <li><i class="fa fa-envelope-o" aria-hidden="true"></i></li>
                <li><i class="fa fa-pinterest-p" aria-hidden="true"></i></li>
            </ul>

            <p class="share-luxury-moment f15">Share your luxury moment with #lilysilk on IG to win FREE purchase.</p>
       </div>
    </div>
</template>

<script>
import {mapState} from "vuex";
export default {
    computed: {
        ...mapState(["domainName"]),
        ...mapState("product", ["productImages"]),
        mainImageUrl(){
            return this.domainName+this.productImages[0]["image"].replace("/500/", "/1000/");
        }
    },
    components: {
        ProductCarousel: ()=>import('~/components/common/vertical-carousel.vue')
    }
}
</script>

<style scoped>
.product-image{
    display: flex;
}
.small-image {
    width: 110px;
    margin-right: 10px;
    flex-shrink: 0;
}
.main-image{
    border: 1px solid #eee;
    padding: 5px;
    font-size: 0;
}
.main-image img{
    width: 100%;
}
.share-elements{
    display: flex;
    margin-top: 10px;
    justify-content: center;
    border-bottom: 2px solid #333;
}
.share-elements li{
    padding: 0 5px;
    margin-right: 5px;
}
.share-luxury-moment{
    margin-top: 8px;
    text-align: center;
}
</style>