<template>
	<div>
		<header>
			<TopBannar></TopBannar>
			<HeaderContainer v-show="!openSearch"></HeaderContainer>
			<HeaderSearch v-show="openSearch"></HeaderSearch>
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
import {mapState} from 'vuex'
export default {
	computed: {
		...mapState(["web"]),
		...mapState("header" ,["openSearch"])	
	},
	components: {
		TopBannar: ()=>import('~/layouts/head/topbanner.vue'),
		HeaderContainer: () => import("~/layouts/head/header-container.vue"),
		HeaderSearch: () => import("~/layouts/head/header-search.vue"),
		HeaderAdvantage: () => import("~/layouts/head/header-advantage.vue"),
		MainMenu: () => import("~/layouts/head/main_menu.vue"),
		FooterMenu: ()=>import('~/layouts/footer/footer-menu.vue')
	},
	methods: {
		async getSuggestions(){
			const suggestions = await this.$axios.$get("head/search", {params: {web: this.web}});

			if(suggestions.status == 200){
				this.$store.commit('header/setSuggestions', suggestions.info.recommend);
			}
		}
	},
	mounted () {
		// this.getSuggestions();
	}
}
</script>

