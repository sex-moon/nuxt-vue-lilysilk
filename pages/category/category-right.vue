<template>
    <div class="category-content-right">
        <div class="title">
            <div><span class="name f20">{{category.name}}</span><span class="number">{{categoryPagination.totalRows}} Products</span></div>
        </div>

        <div class="sort">
            <b-dropdown split right text="Recommend" class="m-2 sort-dropdown">
                <b-dropdown-item href="#">Hot Sale</b-dropdown-item>
                <b-dropdown-item href="#">Pirce</b-dropdown-item>
                <b-dropdown-item href="#">Discount</b-dropdown-item>
            </b-dropdown>
        </div>

        <div class="product-list" v-if="categoryProducts.length > 0">
            <ProductCard v-for="(product, index) in categoryProducts" :key="index" :product="product"></ProductCard>
        </div>

        <b-pagination :value="currentPage" :total-rows="categoryPagination.totalRows" :per-page="perPage" align="right" class="category-pagination"></b-pagination>
    </div>
</template>

<script>
import {mapState} from "vuex"

export default {
    data () {
        return {
            perPage: 3, // 每页记录数
            currentPage: 1, // 当前页数    
        }
    },
    computed: {
        ...mapState("category", ["category", "categoryProducts", "categoryPagination"])
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
.product-list{
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    flex-wrap: wrap;
}
.product-list > div{
    width: 32%;
    margin-bottom: 16px;
}
</style>

<style>
.sort-dropdown button:nth-of-type(1){
    background-color: #fff !important;
    color: #333;
}
.category-pagination .page-link{
    color: #333;
    transition: ease-in-out background-color 300ms;
}
.category-pagination .page-item.active .page-link{
    background-color: #e9e9e9;
    border-color: #dee2e6;
    color: #333;
}
</style>