<template>
    <div id="header-search" :class="{ fixed: fixed }" ref="headSearch">
        <div class="header-search-container">
            <div class="head-search-input">
                <input type="text" v-model="keyWord" placeholder="Start Typing Here" ref="headerSearchInput" @input="onSearch"/>
                <i class="fa fa-times close-search" aria-hidden="true" @click="setOpenSearch(false)"></i>
            </div>

            <div class="head-search-result">
                <div class="head-search-result-container">
                    <div class="products" v-if="products.length > 0">
                        <h5>
                            <span>PRODUCTS</span>
                            <nuxt-link :to="{ name: 'web', params: { key: keyWord } }"><button class="view-all">View All</button></nuxt-link>
                        </h5>

                        <ul>
                            <li v-for="(product, index) in products" :key="index">
                                <nuxt-link :to="{path: web+'/'+product.url}">
                                    <div class="product-image">
                                        <img v-lazy="product.img"/>
                                    </div>
                                </nuxt-link>

                                <nuxt-link :to="{path: web+'/'+product.url}">
                                    <div class="product-name">{{product.name}}</div>
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>

                    <div class="suggestions" v-else-if="suggestions.length > 0">
                        <h5>SUGGESTIONS</h5>
                        <ul>
                            <li v-for="(suggestion, index) in suggestions" :key="index">
                                <nuxt-link :to="{path: web+'/'+suggestion.url}"><span class="product-name">{{ suggestion.name }}</span></nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapMutations} from "vuex"
export default {
    data () {
        return {
            keyWord: "",
            fixed: false,
            offsetTop: 0,
            products: []
        }
    },
    computed: {
        ...mapState(["web"]),
        ...mapState("header", ["suggestions"])
    },
    methods: {
        ...mapMutations("header", ["setOpenSearch"]),
        // 延时搜索
        onSearch(){
            if (this.keyWord == "") {
                return;
            }

            let old_keyWord = this.keyWord;
            setTimeout(async ()=>{
                if(old_keyWord == this.keyWord){
                    const response = await this.$axios.$get("head/search", {params: {web: this.web, key: this.keyWord}});

                    if(response.status == 200){
                        this.products = response.info.recommend;
                    }
                }
            }, 1500)
        },
        getScrollPosition() {
            let scrollTop = document.documentElement.scrollTop;

            if (this.offsetTop - scrollTop <= 0) {
                this.fixed = true;
            } else {
                this.fixed = false;
            }
        }
    },
    watch: {
        "$store.state.header.openSearch": function(val){
            if(val){
                this.$nextTick(()=>{
                    document.documentElement.style.overflowY = 'hidden';
                    this.$refs.headerSearchInput.focus(); // 搜索框获取焦点
                    window.addEventListener('scroll', this.getScrollPosition,false); // 绑定监听滚动事件
                    this.offsetTop = this.$refs.headSearch.offsetTop;
                })
            }else{
                document.documentElement.style.overflowY = 'scroll';
                this.$refs.headerSearchInput.blur(); // 搜索框失去焦点
                window.removeEventListener("scroll", this.getScrollPosition, false); // 移除监听滚动事件
                this.offsetTop = 0;
            }
        }
    }
}
</script>

<style scoped>
.fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 2;
}
.header-search-container {
  position: relative;
  margin: 0 auto;
  background-color: #fff;
  padding: 16px 50px;
}
.head-search-input {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
}
.head-search-input input {
    width: 100%;
    border: none;
    padding: 20px 0;
    outline: none;
    font-size: 14px;
    letter-spacing: 0.1em;
    color: #333;
}
.close-search {
    color: #000;
    cursor: pointer;
    transition: 300ms ease-in-out color;
}
.close-search:hover {
    color: #1b1b1b;
}

.head-search-result{
	box-shadow: 0 4px 5px -1px rgba(200, 200, 200, 0.7);
	overflow-Y: auto;
	max-height: 450px;
    position: absolute;
	background-color: #fff;
	left: 0;
	right: 0;
    z-index: 2;
}
.head-search-result-container {
    padding: 10px 50px;
}
.suggestions h5, .products h5{
    padding: 5px 0;
    color: #333;
    margin: 0;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 0.09em;
    display: block;
    width: auto;
}
.suggestions li .product-name, .products li .product-name{
    font-size: 12px;
    color: #666;
    transition: ease-in-out 300ms color;
    padding: 5px 10px;
    letter-spacing: 0.07em;
}
.suggestions li .product-name{
    background-color: #f5f5f5;
}
.suggestions li .product-name:hover, .products li .product-name:hover{
    color: #c1a446;
}
.products li .product-image img {
    width: 100%;
    display: block;
}
.products ul, .suggestions ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    min-height: 200px;
    max-height: 450px;
}
.products h5 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.products ul {
  margin-top: 10px;
}
.products li{
  margin-top: 15px;
  margin-right: 32px;
}
.products li{
  width: calc(25% - 20px);
  margin-right: 20px;
  max-width: 200px;
  min-width: 180px;
}
.view-all {
    background-color: #000;
    border: 1px solid;
    color: #fff;
    padding: 5px 10px;
    font-size: 14px;
    cursor: pointer;
}
</style>