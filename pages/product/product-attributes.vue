<template>
    <div class="product-attributes" v-if="productAttributes">
        <div class="product-attribute-options" v-for="(attribute, key) in productAttributes" :key="key">
            <p class="attribute-name">{{key}}: <span class="select-option" ></span></p>

            <ul>
                <li v-for="(option,index) in attribute" :key="index">
                    <img :src="`${domainName}/attribute/${option.image}`" :title="option.value" v-if="option.image">
                    <span v-else class="f14">{{option.value}}</span>
                </li>
            </ul>
        </div>
    </div>
    <!-- <div class="product-options">
        <div class="product-color-options">
            <p class="color-name">Color:
                <span class="select-label">{{ColorName}}</span>
            </p>
            <ul>
                <li v-for="(colorlist,index) in colorlists" :key="index" @click="getColorBlock(colorlist.name,index)" @mouseover="colorMouseover(colorlist.name)" @mouseout="colorMouseout" :class="haveColorBorder == index ? 'black-border':''">
                    <img :src="'/images/product/color/'+ colorlist.img">
                </li>
            </ul>
        </div>

        <div class="product-size-options">
            <p class="size-name">Size:
                <span class="select-label">{{SizeName}}</span>
            </p>
            <ul>
                <li v-for="(sizelist,index) in sizelists" :key="index" @click="getSizeBlock(sizelist.name,index)" @mouseover="sizeMouseover(sizelist.name)" @mouseout="sizeMouseout" :class="haveSizeBorder == index ? 'black-background':''">
                    <p class="size-list">{{sizelist.name}}</p>
                </li>
            </ul>
        </div>
    </div>     -->
</template>

<script>
import {mapState} from "vuex"
export default {
    data(){
        return {
            colorlists: [
                {name: 'black',img: 'black.webp'},
                {name: 'blue',img: 'blue.webp'},
                {name: 'dark-teal',img: 'dark-teal.webp'},
                {name: 'gold',img: 'gold.webp'},
                {name: 'ivory',img: 'ivory.webp'},
                {name: 'lake-blue',img: 'lake-blue.webp'},
                {name: 'light-blue',img: 'light-blue.webp'},
                {name: 'light-plum',img: 'light-plum.webp'},
                {name: 'rosy-pink',img: 'rosy-pink.webp'},
                {name: 'silvergray',img: 'silvergray.webp'},
                {name: 'taupe',img: 'taupe.webp'},
                {name: 'white',img: 'white.webp'},
            ],
            sizelists: [
                {name: 'Standard(20" x 26")'},
                {name: 'King(20" x 36")'},
                {name: 'Queen(20" x 30")'}
            ],
            ColorStorage: "",
            SizeStorage: "",
            ColorName: "",
            SizeName: "",
            haveColorBorder: "-1",
            haveSizeBorder: "-1"
        }
    },
    computed: {
        ...mapState(["domainName"]),
        ...mapState("product", ["productAttributes"])
    },
    methods: {
        getColorBlock(name,index) {
            this.ColorStorage = name;
            this.ColorName = this.ColorStorage;
            this.haveColorBorder = index;
        },
        getSizeBlock(name,index) {
            this.SizeStorage = name;
            this.SizeName = this.SizeStorage;
            this.haveSizeBorder = index;
        },
        colorMouseover(name) {
            this.ColorName = name;
        },
        colorMouseout() {
            this.ColorName = this.ColorStorage;
        },
        sizeMouseover(name) {
             this.SizeName = name;
        },
        sizeMouseout() {
            this.SizeName = this.SizeStorage;
        }

    }
}
</script>

<style scoped>
.product-attributes {
    margin-top: 10px;
}
.product-attribute-options {
    margin-bottom: 10px;
}
.product-size-options {
    margin-bottom: 10px;
}
.attribute-name {
    margin-bottom:5px;
}
.select-option {
    color: #222;
    font-weight: 600;
}
ul li {
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 5px;
    border: 2px solid #ccc;
    cursor: pointer;
    font-size: 0;
    transition: ease-in-out 300ms border-color;
}
ul li span{
    display: block;
    min-width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
ul li img {
    width: 40px;
    height: 40px;
    padding: 2px;
}
ul li:hover {
    border-color: #000;
}
</style>