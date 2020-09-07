<template>
    <div class="customer-centre">
        <div class="customer-navigation">
            <ul>
                <li v-for="(verticalNav,index) in verticalNavs" :key="index">
                    <nuxt-link :to="{name: verticalNav.url}">{{verticalNav.navName}}</nuxt-link>
                </li>
            </ul>
        </div>
        <div class="customer-main">
            <nuxt-child />
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            verticalNavs: [
                {navName: "My Profile",url: "web-customer-profile"},
                {navName: "My Orders",url: "web-customer-orders"},
                {navName: "MY RMA",url: "web-customer-rma"},
                {navName: "My Address Book",url: "web-customer-newaddress"},
                {navName: "My Points",url: "web-customer-points"},
                {navName: "LILYSILK Membership",url: "web-customer-vipmembership"},
                {navName: "My WishList",url: "web-customer-wishlist"},
                {navName: "Sign Out",url: "web"},
            ]
        }
    }
}
</script>
<style>
.customer-centre {
    display: flex;
    margin-top: 20px;
}
.customer-navigation {
    width: 16%;
    margin: 0 4%;
    margin-top: 20px;
}
.customer-navigation ul li {
    font-size: 15px;
    list-style: disc;
    text-transform: uppercase;
    margin-left: 25px;
    margin-bottom: 5px;
}
.customer-navigation a {
    color: #555;
}
.customer-navigation a:hover {
	color: #c1a446;
}
.customer-main {
    width: 76%;
    min-height: 370px;
}
</style>