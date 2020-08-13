<template>
    <div class="product-card">
        <nuxt-link to="#" class="product-image">
            <img src="http://115.28.241.1/web/image/product/1008/500/19-momme-terse-silke-pudebetra-ek-Light-Green-1008-31-5075-2-20181025.jpg" alt="19-momme-terse-silke-pudebetra-ek-Light-Green-1008-31-5075-2-20181025">
        </nuxt-link>

        <p class="product-name">19 Momme Terse Envelope Silk Pillowcase</p>

        <p class="product-price">
            <span class="price">US$ 62</span>
            <i class="fa fa-heart-o" aria-hidden="true"></i>
        </p>

        <ul class="color-list">
            <li><img src="http://115.28.241.1/web/image/attribute/pale-turquoise.png" alt="pale-turquoise"></li>
            <li><img src="http://115.28.241.1/web/image/attribute/pale-turquoise.png" alt="pale-turquoise"></li>
            <li><img src="http://115.28.241.1/web/image/attribute/pale-turquoise.png" alt="pale-turquoise"></li>
            <li><img src="http://115.28.241.1/web/image/attribute/pale-turquoise.png" alt="pale-turquoise"></li>
            <li><img src="http://115.28.241.1/web/image/attribute/pale-turquoise.png" alt="pale-turquoise"></li>
            <li><img src="http://115.28.241.1/web/image/attribute/pale-turquoise.png" alt="pale-turquoise"></li>
            <li><img src="http://115.28.241.1/web/image/attribute/pale-turquoise.png" alt="pale-turquoise"></li>
            <li><img src="http://115.28.241.1/web/image/attribute/pale-turquoise.png" alt="pale-turquoise"></li>
            <li><img src="http://115.28.241.1/web/image/attribute/pale-turquoise.png" alt="pale-turquoise"></li>
            <li><img src="http://115.28.241.1/web/image/attribute/pale-turquoise.png" alt="pale-turquoise"></li>
            <li><img src="http://115.28.241.1/web/image/attribute/pale-turquoise.png" alt="pale-turquoise"></li>
        </ul>
    </div>
</template>

<style scoped>
.product-image {

}
.product-name{
    margin: 3px 0;
    padding: 0;
    color: #666;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.product-price{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 15px;
}
.color-list{
    display: flex;
    margin: 16px 0;
}
.color-list li{
    margin-right: 5px;
}
.color-list li img{
    padding: 1px;
    width: 25px;
    margin: 1px;
    border: 1px solid #ccc;
    cursor: pointer;
    transition: ease-in-out border-color 300ms;
}
.color-list li img:hover{
    border-color: #000;
}
</style>