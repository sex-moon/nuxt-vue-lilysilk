<template>
    <div id="user-login">
        <p class="title tc">SIGN IN</p>

        <ValidationObserver ref="loginForm">
            <Form :model="loginData" label-position="top">
                <FormItem label="Email Address">
                    <ValidationProvider v-slot="{classes, errors}" rules="required|email" name="Email Address">
                        <input v-model="loginData.email" type="email" :class="classes">
                        <span class="is-invalid-msg">{{ errors[0] }}</span>
                    </ValidationProvider>
                </FormItem>

                <FormItem label="Password">
                    <ValidationProvider v-slot="{classes, errors}" rules="required" name="Password">
                        <input v-model="loginData.password" type="password" :class="classes">
                        <span class="is-invalid-msg">{{ errors[0] }}</span>
                    </ValidationProvider>
                </FormItem>

                <FormItem>
                    <button type="button" class="button" @click="login">SIGN IN</button>
                </FormItem>
            </Form>
        </ValidationObserver>
        

        <div class="forgot-password tc f14"><nuxt-link to="#">Forgot Your Password?</nuxt-link></div>

        <div class="division">
            <p></p>
            <span>OR</span>
            <p></p>
        </div>

        <div class="third-party">
            <p class="facebook-icon">
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <span class="tc f13">Login with Facebook</span>
            </p>

            <p class="twitter-icon">
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <span class="tc f13">Login with Twitter</span>
            </p>
        </div>

        <p class="privacy-policy">Your privacy is important to us.See Our <nuxt-link to="#">Privacy Policy</nuxt-link></p>
    </div>
</template>

<script>
export default {
    props: {
        fromPath: {
            type: String
        }
    },
    data () {
        return {
            loginData: {}
        }
    },
    methods: {
        login(){
            this.$refs.loginForm.validate().then(async valid=>{
                if(valid){
                    const response = await this.$axios.$post("/login", this.loginData);

                    if(response.status == 200){
                        this.$store.commit('customer/setAccessToken', response.info.access_token);
                        this.$router.push({path: this.fromPath});
                    }
                }
            })
        }
    }
}
</script>

<style scoped>
#user-login{
    max-width: 442px;
    width: 100%;
    margin: auto;
}
.title{
    font-size: 32px;
    text-transform: uppercase;
    margin-bottom: 20px;
}
.button{
    width: 100%;
    height: 48px;
    color: #fff;
    text-transform: uppercase;
    background-color: #000;
    border: none;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 300ms ease-in-out;
}
.button:hover{
    background-color: #c1a446;
}
input{
    width: 100%;
    height: 42px;
    padding: 8px;
    outline:none;
    border: 1px solid #ddd;
    transition: border-color 300ms ease-in-out;
}
input:hover, input:focus{
    border-color: #aaa;
}
.forgot-password a{
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid;
    transition: color 300ms ease-in-out;
}
.division{
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
}
.division p{
    height: 1px;
    background-color: #e5e2e2;
    flex-grow: 1;
}
.division span{
    color: #b2b2b2;
    font-size: 12px;
    margin: 0 5px;
}
.facebook-icon, .twitter-icon{
    display: flex;
    align-items: center;
    margin-top: 12px;
    cursor: pointer;
}
.facebook-icon{
    background-color: #4b69a1;
}
.twitter-icon{
    background-color: #53bae8;
}
.facebook-icon .fa, .twitter-icon .fa{
    font-size: 20px;
    color: #fff;
}
.facebook-icon .fa{
    background-color: #1e4389;
    padding: 14px 12px;
}
.twitter-icon .fa{
    background-color: #28a9e2;
    padding: 14px 8px;
}
.facebook-icon span, .twitter-icon span{
    color: #fff;
    flex-grow: 1;
}
.privacy-policy{
    width: 100%;
    margin: auto;
    text-align: center;
    font-size: 15px;
    margin-top: 12px;
}
.privacy-policy a{
    text-decoration: none;
    border-bottom: 1px solid;
}
</style>