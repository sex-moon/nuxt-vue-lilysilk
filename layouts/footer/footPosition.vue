<template>
	<div class="footall">
		<div class="footsignup">
			<span>SIGN UP FOR 10% OFF Your First Order</span>
			<div class="footsignup-right">
				<input
					placeholder="email address"
					type="text"
					class="signupinput"
					v-model="email"
				/>
				<button @click="submit">Sign Up</button>
				<span class="ErrorPrompt" v-if="ErrorPrompt">{{tips}}</span>
			</div>
		</div>

		<FootSuccess></FootSuccess>

		<div class="footcontent">
			<div class="footcontentall">
			<div class="footcontentone">
				<p class="title" @click="getOpenA()">
				About LILYSILK 
				<span :class="[selectnumber == 1 ? 'fa-angle-up':'fa-angle-down']"></span>
				</p>
				<p class="content" :class="[selectnumber == 1 ? 'selectaction' : '']"><nuxt-link to="/">Our Story</nuxt-link></p>
				<p class="content" :class="[selectnumber == 1 ? 'selectaction' : '']"><nuxt-link to="/">Our Press</nuxt-link></p>
				<p class="content" :class="[selectnumber == 1 ? 'selectaction' : '']"><nuxt-link to="/">Our Blog</nuxt-link></p>
				<p class="content" :class="[selectnumber == 1 ? 'selectaction' : '']"><nuxt-link to="/">Our Donation</nuxt-link></p>
			</div><div class="footcontentone">
				<p class="title" @click="getOpenB()">
				Customer Services
				<span :class="[selectnumber == 2 ? 'fa-angle-up':'fa-angle-down']"></span>
				</p>
				<p class="content" :class="[selectnumber == 2 ? 'selectaction' : '']"><nuxt-link to="/">Contact us</nuxt-link></p>
				<p class="content" :class="[selectnumber == 2 ? 'selectaction' : '']"><nuxt-link to="/">FAQs</nuxt-link></p>
				<p class="content" :class="[selectnumber == 2 ? 'selectaction' : '']"><nuxt-link to="/">Shipping Information</nuxt-link></p>
				<p class="content" :class="[selectnumber == 2 ? 'selectaction' : '']"><nuxt-link to="/">Returns & Exchanges</nuxt-link></p>
				<p class="content" :class="[selectnumber == 2 ? 'selectaction' : '']"><nuxt-link to="/">Track Order Details</nuxt-link></p>
				<p class="content" :class="[selectnumber == 2 ? 'selectaction' : '']"><nuxt-link to="/">Request an RMA</nuxt-link></p>
			</div><div class="footcontentone">
				<p class="title" @click="getOpenC()">
				Featured Program
				<span :class="[selectnumber == 3 ? 'fa-angle-up':'fa-angle-down']"></span>
				</p>
				<p class="content" :class="[selectnumber == 3 ? 'selectaction' : '']"><nuxt-link to="/">Affiliate Program</nuxt-link></p>
				<p class="content" :class="[selectnumber == 3 ? 'selectaction' : '']"><nuxt-link to="/">LILYSILK Reward Points</nuxt-link></p>
				<p class="content" :class="[selectnumber == 3 ? 'selectaction' : '']"><nuxt-link to="/">LILYSILK VIP MEMBERSHIP</nuxt-link></p>
				<p class="content" :class="[selectnumber == 3 ? 'selectaction' : '']"><nuxt-link to="/">LILYSTAR Program</nuxt-link></p>
				<p class="content" :class="[selectnumber == 3 ? 'selectaction' : '']"><nuxt-link to="/">Give $20, Get $20</nuxt-link></p>
			</div><div class="footcontentone">
				<p class="title" @click="getOpenD()">
				Silk Guide 
				<span :class="[selectnumber == 4 ? 'fa-angle-up':'fa-angle-down']"></span>
				</p>
				<p class="content" :class="[selectnumber == 4 ? 'selectaction' : '']"><nuxt-link to="/">Silk Care</nuxt-link></p>
				<p class="content" :class="[selectnumber == 4 ? 'selectaction' : '']"><nuxt-link to="/">Satin vs Silk</nuxt-link></p>
				<p class="content" :class="[selectnumber == 4 ? 'selectaction' : '']"><nuxt-link to="/">What's Momme Count</nuxt-link></p>
				<p class="content" :class="[selectnumber == 4 ? 'selectaction' : '']"><nuxt-link to="/">Charmeuse vs Mulberry Silk</nuxt-link></p>
				<p class="content" :class="[selectnumber == 4 ? 'selectaction' : '']"><nuxt-link to="/">Cotton vs Silk</nuxt-link></p>
			</div><div class="footcontentone footcontentone01">
				<p class="title">Find Us On</p>
				<p class="snslist">
				<nuxt-link to="/"><span class="fa fa-twitter"></span></nuxt-link>
				<nuxt-link to="/"><span class="fa fa-facebook"></span></nuxt-link>
				<nuxt-link to="/"><span class="fa fa-youtube"></span></nuxt-link>
				<nuxt-link to="/"><span class="fa fa-instagram"></span></nuxt-link>
				<nuxt-link to="/"><span class="fa fa-pinterest"></span></nuxt-link>
				</p>
				<p class="telephone">
				<span class="fa fa-phone"></span> PHONE：909-861-1680
				</p>
				<p class="telephonetime">
				9:00am~5:00pm PST (Monday to Friday)
				</p>
			</div>
			</div>
		</div>

		<div class="footcontentoneline">
			<img
			class="paymentimg"
			src="https://www.lilysilk.com/images/workImages/common/payment.png"
			alt="Payment methods"
			title="Sample image with payment methods"
			/>

			<div class="fr">
			<nuxt-link to="/">
				<img
				src="https://www.lilysilk.com/images/workImages/common/webgood1.png"
				/>
			</nuxt-link>

			<nuxt-link to="/">
				<img
				src="https://www.lilysilk.com/images/workImages/common/webgood2.png"
				/>
			</nuxt-link>

			<nuxt-link to="/">
				<img
				src="https://www.lilysilk.com/images/workImages/common/webgood3.png"
				/>
			</nuxt-link>
			</div>
		</div>

		<div class="footcontentbottom">
			<span class="span01">® Copyright 2018 LilySilk. All Rights Reserved .</span>
			<span class="span02">
			<nuxt-link to="/">Terms Conditions</nuxt-link>
			<span class="footMargin">|</span>
			<nuxt-link to="/">Privacy Policy</nuxt-link>
			</span>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			country: this.$route.params.country,
			ErrorPrompt: false,
			email: "",
			tips: "",
			successLogon: false,
			selectnumber: 0,
			// 随机生成游客ID
			touristId: null
		};
	},
	components: {
		// FootSuccess: () => import("~/components/footer/footSuccess.vue"),
	}
};
</script>
<style scoped>
.footsignup-right{
   display:inline-block;
   position: relative;
}
.footall {
  background: #000;
}
.footsignup {
  text-align: center;
  padding: 40px 15px;
  color: #fff;
  border-bottom: 1px solid #333;
}
.footsignup span {
  display: inline-block;
  margin: 10px 6px 16px 0;
  font-size: 16px;
  text-transform:capitalize;
}

.footsignup button {
  line-height: 40px;
  padding: 0px 15px;
  font-size: 14px;
  background: #c1a446;
  color: #fff;
  margin-left: 5px;
  border: none;
  cursor: pointer;
  width: 130px;
}
.footcontent {
  width: calc(100% - 30px);
  display: block;
  margin-top: 30px;
  padding: 0 15px;
}
.footcontent .footcontentall {
  max-width: 1200px;
  margin: auto;
}
.footcontent .footcontentall .footcontentone {
  display: inline-block;
  width: calc(20% - 10px);
  vertical-align: top;
  margin-right: 10px;
}

.footcontent .footcontentall .footcontentone01 {
  text-align: center;
}
.footcontent .footcontentall .footcontentone01 .telephone {
  color: #eee;
  margin: 0;
  font-size: 18px;
}
.footcontent .footcontentall .footcontentone01 .telephone span {
  font-size: 18px;
  margin-right: 5px;
}
.footcontent .footcontentall .footcontentone01 .telephonetime {
  color: #aaa;
  margin: 10px 0 0 0;
  font-size: 13px;
}
.footcontent .footcontentall .footcontentone .title {
  font-size: 18px;
  color: #fff;
  margin-bottom: 8px;
}
.footcontent .footcontentall .footcontentone .title span {
  display: none;
}
.footcontent .footcontentall .footcontentone .snslist span {
  font-size: 24px;
  color: #fff;
  margin: 0 5px;
}
.footcontent .footcontentall .footcontentone .snslist a {
  text-decoration: none;
}
.footcontent .footcontentall .footcontentone .content {
  font-size: 14px;
}
.footcontent .footcontentall .footcontentone .content a {
  color: #999;
  text-decoration: none;
}
.footcontent .footcontentall .footcontentone .content a:hover{color:#fff;}
.footcontentoneline {
  display: block;
  padding: 10px 10px;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  margin: 30px 0 20px 0;
}

.footcontentbottom {
  text-align: center;
  font-size: 14px;
  color: #333;
  padding: 0px 0 20px 0;
  color: #999;
}
.footcontentbottom span {
  display: inline-block;
}
.footcontentbottom .span02 {
  margin: 0 0 0 20px;
}
.footcontentbottom .span02 a {
  color: #555;
  display: inline-block;
  margin: 0 10px;
  text-decoration: none;
}
.footcontentbottom .span02 a:hover{color:#fff;}
@media screen and (min-width: 769px) {
  .footcontentoneline .paymentimg {
    height: 30px;
	width: auto;
    padding: 10px 0;
  }
  .fr img {
    height: 50px;
	width: auto;
  }
  .footsignup input {
    height: 40px;
    padding: 0px 10px;
    width: 300px;
    border: none;
  }
  .footsignup-right .ErrorPrompt{
      position: absolute;
      left: 0;
      top: 52px;
      color:#fff;
      text-align: left;
      display:inline;
      margin:0;
  }
}
@media screen and (max-width: 768px) {
  .footcontentoneline .paymentimg {
    height: inherit;
    padding: 10px 0;
    width: 100%;
  }
   .fr img {
    width: 30%;
  }
  .footsignup span {
    display: block;
    width: 100%;
    margin-bottom: 16px;
    font-size: 15px;
  }
  .footcontent .footcontentall .footcontentone {
    display: block;
    width: 100%;
    margin-bottom: 8px;
  }

  .footcontent .footcontentall .footcontentone .title {
    display: block;
  }

  .footcontent .footcontentall .footcontentone .title span {
    display: inline-block;
    float: right;
    font-size: 20px;
  }

  .footcontent .footcontentall .footcontentone .content {
    display: none;
  }
  .footcontent .footcontentall .footcontentone .selectaction {
    display: block;
  }
  .footcontent .footcontentall .footcontentone01 {
    border-top: 1px solid #333;
    padding-top: 20px;
    margin-top: 30px;
  }

  .footcontentoneline {
    text-align: center;
  }
  .fr {
    float: none;
    display: inline-block;
    text-align: center;
    width: 70%;
  }
  .footsignup button {    
    width: 30%;
    max-width: 150px;
    display: inline-block;
  }
  .footsignup input {
    height: 40px;
    padding: 0px 10px;
    border: none;
    width: 58%;
    max-width: 300px;
  }
  .footsignup-right .ErrorPrompt{
      color:#fff;
      text-align: left;
      display:inline-block;
      margin-left:8px;
      max-width: 480px;
  }
  .footsignup-right{width: 100%;}
}
</style>
