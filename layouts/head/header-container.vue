<template>
    <div class="header-container">
        <div class="header-container-left">
            <HeadCountry></HeadCountry>
        </div>

        <div class="header-container-logo">
            <nuxt-link :to="{name: 'web'}"><img src="~/assets/image/logo.svg"/></nuxt-link>
        </div>

        <ul class="header-container-right tc">
            <li class="search" @click="setOpenSearch(true)">
				<i class="fa fa-search" aria-hidden="true"></i>
			</li>

			<li class="account">
				<nuxt-link :to="{name: [accessToken ? 'web-customer' : 'web-login']}">
					<i class="fa fa-user-o" aria-hidden="true"></i>
				</nuxt-link>

				<ul v-show="accessToken" class="tl">
					<nuxt-link to="#"><li>My Orders</li></nuxt-link>
					<nuxt-link to="#"><li>My Address Book</li></nuxt-link>
					<nuxt-link to="#"><li>LILYSILK Points</li></nuxt-link>
					<nuxt-link to="#"><li>Sign Out</li></nuxt-link>
				</ul>
			</li>
			
			<li class="wishlist">
				<nuxt-link :to="{name: [accessToken ? 'web-wishlist' : 'web-login']}">
					<i class="fa fa-heart-o" aria-hidden="true"></i>
				</nuxt-link>
			</li>
			
            <li class="mini-cart">
				<i class="fa fa-shopping-bag" aria-hidden="true" @click="setOpenMiniCart(true)"></i>
			</li>
        </ul>
    </div>
</template>

<script>
import {mapState, mapMutations} from "vuex"
export default {
    components: {
		HeadCountry: () => import("~/layouts/head/country")
	},
	computed: {
		...mapState("customer", ["accessToken"])
	},
	methods: {
		...mapMutations(["setOpenMiniCart"]),
		...mapMutations("header", ["setOpenSearch"])
	}
}
</script>

<style scoped>
.header-container {
	width: 96%;
	max-width: 1500px;
	margin: 16px auto;
	color: #000;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 48px;
}

.header-container-logo {
  cursor: pointer;
}
.header-container-logo img {
  width: 150px;
}

.header-container-right{
	display: flex;
	height: 100%;
}
.header-container-right > li{
	display: flex;
	justify-content: center;
	height: 100%;
	font-size: 18px;
	flex-direction: column;
	padding: 0 12px;
	cursor: pointer;
	transition: 200ms ease-in-out box-shadow;
}
.header-container-right > li:hover{
	box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.08);
}
.account{
	position: relative;
}
.account > ul{
	display: none;
	list-style: none;
	position: absolute;
	box-shadow: 0 6px 6px 0 rgba(0,0,0,.08);
    padding: 20px;
	background-color: #fff;
	z-index: 2;
	font-size: 13px;
	min-width: 150px;
	top: 100%;
	right: 0;
}
.account:hover ul{
	display: block;
}
.account > ul li{
	transition: color 300ms ease-in-out;
}
.account > ul li:hover{
	color: #c1a446;
	text-decoration: underline;
}
</style>