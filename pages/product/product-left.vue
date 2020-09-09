<template>
    <div class="product-image">
       <div class="small-image">
           <ProductCarousel :imageList="productImages"></ProductCarousel>
       </div>
       
       <div class="main-image">
            <img v-lazy="mainImageUrl">
       </div>

                   <!-- <div class="share-elements">
                <span class="fa fa-facebook"></span>
                <span class="fa fa-twitter"></span>
                <span class="fa fa-envelope-o"></span>
                <span class="fa fa-pinterest-p"></span>
            </div> -->
            <!-- <div class="share-luxury-moment">
                Share your luxury moment with #lilysilk on IG to win FREE purchase.
            </div> -->
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

<style>
.small-image {
    width: 110px;
    margin-right: 10px;
    display: inline-block;
}
.main-image{
    width: calc(100% - 120px);
    display: inline-block;
    /* border: 1px solid #eee;
    padding: 5px; */
}
.main-image img{
    width: 100%;
}
/* .img-enlarge {
    padding: 5px;
    border: 1px solid #eee;
}
.share-luxury-moment {
    display: block;
    border-top: 2px solid #222;
    margin-top: 20px;
    text-align: center;
} */
</style>