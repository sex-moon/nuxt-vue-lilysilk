<template>
    <div class="category-content-right">
        <div class="title">
            <div><span class="name f20">{{category.name}}</span><span class="number">28 Products</span></div>
        </div>

        <div class="sort">
            <b-dropdown split right text="Recommend" class="m-2 sort-dropdown">
                <b-dropdown-item href="#">Hot Sale</b-dropdown-item>
                <b-dropdown-item href="#">Pirce</b-dropdown-item>
                <b-dropdown-item href="#">Discount</b-dropdown-item>
            </b-dropdown>
        </div>

        <div class="product-list">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex"

export default {
    computed: {
        ...mapState("category", ["category"])
    },
    components: {
        ProductCard: ()=>import("~/components/common/product-card")
    }
}
</script>

<style scoped>
.title{
    background: #F5F5F5;
    padding: 20px;
    margin: 0 0 5px 0;
}
.title .number{
    font-size: 14px;
    margin: 0 0 0 20px;
    color: #999;
    font-weight: normal;
}
.sort{
    text-align: right;
}
.sort-dropdown{
    background-color: #fff;
    color: #333;
}
.product-list{
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
}
.product-list > div{
    width: 32%;
}
</style>