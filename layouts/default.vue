<template>
	<div>
		<header>
			<TopBannar></TopBannar>
			<HeaderContainer></HeaderContainer>
			<MainMenu></MainMenu>
			<HeaderAdvantage></HeaderAdvantage>
		</header>

		<Nuxt></Nuxt>

		<footer>
			<FooterMenu></FooterMenu>
		</footer>
	</div>
</template>

<script>
export default {
	components: {
		TopBannar: ()=>import('~/layouts/head/topbanner'),
		HeaderContainer: () => import("~/layouts/head/header-container"),
		HeaderAdvantage: () => import("~/layouts/head/header-advantage"),
		MainMenu: () => import("~/layouts/head/main_menu"),
		FooterMenu: ()=>import('~/layouts/footer/footer-menu')
	}
}
</script>

