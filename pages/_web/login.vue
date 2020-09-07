<template>
    <div class="login">
        <div class="container">
            <Row>
                <Col span="12"><Login :fromPath="fromPath" /></Col>
                <Col span="12"><Register :fromPath="fromPath" /></Col>
            </Row>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            fromPath: null
        }
    },
    head(){
		return {
			title: "Customer Login",
			meta: [
				{name: "description", content: "LilySilk offers the delicate range of silk pillowcase,silk nightwear,silk comforter,silk pillows,silk sheets,silk bedding sets and fashion silk clothes in different styles and colours."},
				{name: "keywords", content: "silk sheet set,silk pillowcase,silk pillow,silk duvet,silk pajamas,silk shirts,silk blouse"}
			]
		}
	},
    components: {
        Login: ()=>import('~/pages/login/user-login.vue'),
        Register: ()=>import('~/pages/login/user-register.vue')
    },
    beforeRouteEnter(to, from, next){
        next(vm=>{
            vm.fromPath = from.path;
        });
    }
}
</script>

<style scoped>
.login{
    width: 96%;
    max-width: 1500px;
    margin: 0 auto;
}
.container{
    padding: 20px 15px;
}
</style>