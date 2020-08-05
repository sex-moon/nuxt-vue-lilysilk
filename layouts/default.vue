<template>
	<div>
		<header>
			<TopBannar></TopBannar>

			<div class="header-container">
				<div class="header-container-left">
					<HeadCountry></HeadCountry>
				</div>

				<div class="header-container-logo">
					<nuxt-link :to="{name: 'web'}"><img src="~/assets/image/logo.svg"/></nuxt-link>
				</div>

				<div class="header-container-right tc">
					<div class="search"><i class="fa fa-search" aria-hidden="true"></i><span>Search</span></div>
					<div class="account"><i class="fa fa-user-o" aria-hidden="true"></i><span>Log In</span></div>
					<div class="wishlist"><i class="fa fa-heart-o" aria-hidden="true"></i><span>Wishlist</span></div>
					<div class="mini-cart"><i class="fa fa-shopping-bag" aria-hidden="true"></i><span>Cart</span></div>
				</div>
			</div>

			<MainMenu></MainMenu>
		</header>

		<Nuxt></Nuxt>

		<footer>
			<FooterMenu></FooterMenu>
		</footer>
	</div>
</template>

<script>
export default {
	data () {
		return {
			web: "au"		
		}
	},
	components: {
		TopBannar: ()=>import('~/layouts/head/topbanner'),
		HeadCountry: () => import("~/layouts/head/country"),
		MainMenu: () => import("~/layouts/head/main_menu"),
		FooterMenu: ()=>import('~/layouts/footer/footer-menu')
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
}
.header-container-right > div{
	display: flex;
	font-size: 18px;
	flex-direction: column;
	padding: 8px 12px;
	cursor: pointer;
	transition: 200ms ease-in-out box-shadow;
}
.header-container-right > div:hover{
	box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.08);
}
.header-container-right > div > span{
	font-size: 12px;
	color: #555;
}
</style>