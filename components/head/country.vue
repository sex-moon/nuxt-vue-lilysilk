<template>
    <div class="head-country">
        <div class="default">
            <img class="country-img" :src="country.image" />
            <span class="country-name">{{country.name}}</span>
            <i class="fa fa-angle-down" aria-hidden="true"></i>
        </div>

        <ul class="list">
            <li v-for="(country, index) in countryList" :key="index" v-if="country.alias != $route.params.web">
                <nuxt-link :to="{name: 'web', params: {web: country.alias}}">
                    <img class="country-img" :src="country.image" />
                    <span class="country-name">{{country.name}}</span>
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    data () {
        return {
            country: {},
            countryList: [
                {
                    name: "United States",
                    alias: "us",
                    image: require("~/assets/image/country/us.jpg")
                },
                {
                    name: "Canada",
                    alias: "ca",
                    image: require("~/assets/image/country/ca.jpg")
                },
                {
                    name: "United Kingdom",
                    alias: "uk",
                    image: require("~/assets/image/country/uk.jpg")
                },
                {
                    name: "Australia",
                    alias: "au",
                    image: require("~/assets/image/country/au.jpg")
                },
                {
                    name: "France",
                    alias: "fr",
                    image: require("~/assets/image/country/fr.jpg")
                },
                {
                    name: "日本",
                    alias: "jp",
                    image: require("~/assets/image/country/jp.jpg")
                },
                {
                    name: "Deutschland",
                    alias: "de",
                    image: require("~/assets/image/country/de.jpg")
                },
                {
                    name: "Nederland",
                    alias: "nl",
                    image: require("~/assets/image/country/nl.jpg")
                },
                {
                    name: "Singapore",
                    alias: "sg",
                    image: require("~/assets/image/country/sg.jpg")
                },
                {
                    name: "Russia",
                    alias: "ru",
                    image: require("~/assets/image/country/ru.jpg")
                },
                {
                    name: "Italia",
                    alias: "it",
                    image: require("~/assets/image/country/it.jpg")
                },
                {
                    name: "España",
                    alias: "es",
                    image: require("~/assets/image/country/es.jpg")
                },
                {
                    name: "Sverige",
                    alias: "se",
                    image: require("~/assets/image/country/se.jpg")
                },
                {
                    name: "Danmark",
                    alias: "dk",
                    image: require("~/assets/image/country/dk.jpg")
                },
            ]
        }
    },
    watch: {
        "$route.params.web": {
            deep: true,
            immediate: true,
            handler: function(newVal){
                let country = this.countryList.filter((country, index)=>{
                    return country.alias == newVal;
                });

                this.country = country[0];
            }
        }
    }
}
</script>
<style scoped>
.head-country .default{
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-left: 10px;
}
.head-country  .country-img{
    width: 20px;
}
.head-country .country-name{
    font-size: 15px;
    margin: 0 8px;
    transition: color 300ms ease-in-out;
    cursor: pointer;
}
.head-country .country-name:hover {
    color: #c1a446;
}
.head-country .list{
    display: none;
    box-shadow: 0 5px 10px rgba(0,0,0, 0.1);
    padding: 20px 10px;
    background-color: #fff;
    position: absolute;
    z-index: 2;
    margin: 0;
    list-style: none;
}
.head-country .list:hover, .head-country .default:hover+.list{
    display: block;
}
</style>