<template>
    <div id="user-register">
        <p class="title tc">NEW TO LILYSILK</p>

        <ValidationObserver ref="registerForm">
            <Form :model="registerData" label-position="top" ref="loginForm">
                <FormItem label="Email Address">
                    <ValidationProvider v-slot="{classes, errors}" rules="required|email" name="Email Address">
                        <input v-model="registerData.email" type="email" :class="classes">
                        <span class="is-invalid-msg">{{ errors[0] }}</span>
                    </ValidationProvider>
                </FormItem>

                <FormItem label="Password">
                    <ValidationProvider v-slot="{classes, errors}" rules="required" name="Password" vid="password">
                        <input v-model="registerData.password" type="password" :class="classes">
                        <span class="is-invalid-msg">{{ errors[0] }}</span>
                    </ValidationProvider>
                </FormItem>

                <FormItem label="Confirm Password">
                    <ValidationProvider v-slot="{classes, errors}" rules="required|confirmed:password" name="Confirm Password">
                        <input v-model="registerData.confirm" type="password" :class="classes">
                        <span class="is-invalid-msg">{{ errors[0] }}</span>
                    </ValidationProvider>
                </FormItem>

                <FormItem>
                    <p class="clause" style="margin-bottom: 8px;">
                        <span class="icon tc"><i class="fa fa-check f18" aria-hidden="true"></i></span>
                        <span>I agree to the <nuxt-link to="#">Privacy Policy</nuxt-link></span>
                    </p>

                    <p class="clause">
                        <span class="icon tc" @click="hideBox = !hideBox"><i class="fa f18" :class="[hideBox ? 'hideBox' : 'fa-check']" aria-hidden="true"></i></span>
                        <span>I'd like to receive exclusive offers and latest news by email.</span>
                    </p>
                </FormItem>

                <FormItem>
                    <button type="button" class="button" @click="register">REGISTER</button>
                </FormItem>
            </Form>
        </ValidationObserver>

        <Row>
            <Col span="12" class="f15"><i class="fa fa-angle-right" aria-hidden="true"></i> Earn Reward Points</Col>
            <Col span="12" class="f15"><i class="fa fa-angle-right" aria-hidden="true"></i> Save your favorites</Col>
        </Row>

        <Row>
            <Col span="12" class="f15"><i class="fa fa-angle-right" aria-hidden="true"></i> Check out quickly</Col>
            <Col span="12" class="f15"><i class="fa fa-angle-right" aria-hidden="true"></i> Track orders easily</Col>
        </Row>
    </div>
</template>

<script>
export default {
    data () {
        return {
            registerData: {},
            hideBox: false
        }
    },
    methods: {
        register(){
            this.$refs.registerForm.validate().then(async valid=>{
                if(valid){
                    const response = await this.$axios.$post("register", this.registerData);

                    console.log(response);
                }
            })
        }
    }
}
</script>

<style scoped>
#user-register{
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
input[type='email'], input[type='password']{
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
.clause a{
    text-decoration: none;
    border-bottom: 1px solid;
}
.clause .icon{
    width: 24px;
    height: 24px;
    display: inline-block;
    border: 1px solid #ccc;
    line-height: 24px;
    cursor: pointer;
}
</style>