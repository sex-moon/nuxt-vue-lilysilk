<template>
    <div class="category-content-left">
        <div class="category" v-if="peerCategory.length > 0">
            <p class="title">Category</p>
            <ul>
                <li v-for="(category, index) in peerCategory" :key="index">
                    <nuxt-link :to="category.url">{{category.name}}</nuxt-link>
                </li>
            </ul>
        </div>

        <template v-if="categoryAttributeList">
            <div class="attribute" v-for="(categoryAttribute, key) in categoryAttributeList" :key="key">
                <p class="title">{{key|initialsUpperCase}}</p>
                <ul>
                    <li v-for="(attribute, index) in categoryAttribute" :key="index">
                        <b-form-checkbox size="sm" plain></b-form-checkbox>
                        <img v-if="attribute.attribute_value_img" :src="require('~/static/images/attribute/'+attribute.attribute_value_img)" :alt="attribute.name">
                        <span>{{attribute.name}}</span>
                    </li>
                </ul>
            </div>
        </template>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState("category", ["peerCategory", "categoryAttributeList"])
    },
    filters: {
        initialsUpperCase(str){
            return str.charAt(0).toUpperCase()+str.slice(1);
        }
    }
}
</script>

<style scoped>
.title{
    font-size: 15px;
    font-weight: bold;
    margin: 20px 0;
}
.category ul li{
    margin: 6px;
    font-size: 13px;
    color: #666;
}
.category ul li a{
    transition: color 300ms ease-in-out;
}
.category ul li:hover a{
    color: #c1a446;
}
.attribute ul{
    max-height: 250px;
    overflow-y: auto;
}
.attribute ul li{
    font-size: 13px;
    color: #666;
    display: flex;
    align-items: center;
}
.attribute ul li input{
    margin-right: 5px;
}
.attribute ul li img{
    width: 15px;
    height: 15px;
    margin-right: 5px;
}
.attribute ul li span{
    word-break: keep-all;
    white-space: nowrap;
}
</style>