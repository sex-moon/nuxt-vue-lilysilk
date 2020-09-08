<template>
    <div class="category-content-right">
        <div class="title">
            <div><span class="name f20">{{category.name}}</span><span class="number">{{categoryPagination.total}} Products</span></div>
        </div>

        <div class="sort tr">
            <Select v-model="sort" style="width:150px;text-align: left;">
                <Option value="recommend">Recommend</Option>
                <Option value="price">Price</Option>
                <Option value="hot">Hot Sale</Option>
                <Option value="discount">Discount</Option>
            </Select>
        </div>

        <div class="product-list" v-if="categoryProducts.length > 0" ref="productList">
            <ProductCard v-for="(product, index) in categoryProducts" :key="index" :product="product"></ProductCard>
        </div>

        <Page :total="categoryPagination.total" :page-size="perPage" :current="1" class="category-pagination" @on-change="changePage" />
    </div>
</template>

<script>
import {mapState, mapMutations} from "vuex"

export default {
    computed: {
        ...mapState("category", ["category", "categoryProducts", "categoryPagination", "sort", "perPage"])
    },
    components: {
        ProductCard: ()=>import("~/components/common/product-card")
    },
    methods: {
        ...mapMutations("category", ["setCategoryProducts"]),
        async changePage(val){
            this.$nuxt.$loading.start();
            const response = await this.$axios.$get(`/products/category_show/${this.category.id}`, {params: {page: val}});

            window.scrollTo({
                top: this.$refs["productList"].offsetTop - 100, 
                behavior: "smooth"
            });

            this.$nuxt.$loading.finish();

            if(response.status == 200)
            {
                this.setCategoryProducts(response.info.products.data);
            }
        }
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
    margin-top: 10px;
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
.category-pagination{
    margin-top: 20px;
    text-align: right;
}
</style>