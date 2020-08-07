<template>
	<div class="all">
		<div class="content mb">
			<div class="onelayer">
				<nuxt-link to="/" class="one-thirdblock">
					<img src="https://www.lilysilk.com/images/newhome/mbcategory1a-ca.jpg">
					<span class="text">Pillowcase</span>
				</nuxt-link><nuxt-link to="/" class="one-thirdblock">
					<img src="https://www.lilysilk.com/images/newhome/mbcategory1b-ca.jpg">
					<span class="text">Women Clothing</span>
				</nuxt-link><nuxt-link to="/" class="one-thirdblock">
					<img src="https://www.lilysilk.com/images/newhome/mbcategory1c-ca.jpg">
					<span class="text">For Men</span>
				</nuxt-link><nuxt-link to="/" class="one-thirdblock">
					<img src="https://www.lilysilk.com/images/newhome/mbcategory2a-ca.jpg">
					<span class="text">Lingerie</span>
				</nuxt-link><nuxt-link to="/" class="one-thirdblock">
					<img src="https://www.lilysilk.com/images/newhome/mbcategory2b-ca.jpg">
					<span class="text">Shirt &amp; Blouse</span>
				</nuxt-link><nuxt-link to="/" class="one-thirdblock">
					<img src="https://www.lilysilk.com/images/newhome/mbcategory2c-ca.jpg">
					<span class="text">Nightwear</span>
				</nuxt-link><nuxt-link to="/" class="one-thirdblock">
					<img src="https://www.lilysilk.com/images/newhome/mbcategory3a-ca.jpg">
					<span class="text">Accessories</span>
				</nuxt-link><nuxt-link to="/" class="one-thirdblock">
					<img src="https://www.lilysilk.com/images/newhome/mbcategory3b-ca.jpg">
					<span class="text marginleft">Pillow &amp; Duvet</span>
				</nuxt-link><nuxt-link to="/" class="one-thirdblock">
					<img src="https://www.lilysilk.com/images/newhome/mbcategory3c-ca.jpg">
					<span class="text">Sheet</span>
				</nuxt-link>
			</div>

			<div class="onelayer">
				<nuxt-link to="/" ><img src="https://www.lilysilk.com/images/newhome/mbhomecollection1-ca.jpg"></nuxt-link>
			</div>

			<div class="onelayer">
				<nuxt-link to="/" class="halfblock relation">
					<img src="https://www.lilysilk.com/images/newhome/mbhomebanner1-ca.jpg">
					<div class="textfixed pink">
						<p class="bold">Clearance Sale</p>
						<p>Up To 70% Off ></p>
					</div>
				</nuxt-link><nuxt-link to="/" class="halfblock relation">
					<img src="https://www.lilysilk.com/images/newhome/mbhomebanner2-ca.jpg">
					<div class="textfixed pink">
						<p class="bold">New Arrivals</p>
						<p>Buy 1 Get 1 40% Off ></p>
					</div>
				</nuxt-link>
			</div>

			<div class="onelayer">
				<img src="https://www.lilysilk.com/images/newhome/mbhomecollection2-ca.jpg">
			</div>

			<div class="onelayer">
				<nuxt-link to="/" class="halfblock relation">
					<img src="https://www.lilysilk.com/images/newhome/mbhomecollection3-ca.jpg">
					<div class="textfixed blue">
						<p class="bold">Silk Pillowcases</p>
						<p>Buy 1 Get 1 30% Off ></p>
					</div>
				</nuxt-link><nuxt-link to="/" class="halfblock relation">
					<img src="https://www.lilysilk.com/images/newhome/mbhomecollection4-ca.jpg">
					<div class="textfixed blue">
						<p class="bold">Silk Bedding Sets</p>
						<p>$10 Off Every $250 ></p>
					</div>
				</nuxt-link>
			</div>

			<div class="onelayer">
				<img src="https://www.lilysilk.com/images/newhome/mbhomecollection5-ca.jpg">
			</div>

			<div class="onelayer">
				<div class="border">
				<img src="https://www.lilysilk.com/images/newhome/mbhomesmallbanner1-ca.jpg">
					<img src="https://www.lilysilk.com/images/newhome/mbhomesmallbanner3-ca.jpg">
					<img src="https://www.lilysilk.com/images/newhome/mbhomesmallbanner4-ca.jpg">
				</div>
			</div>
		</div>

		<div class="content">
			<div class="onelayer pc">
				<div class="halfblock">
					<img src="https://www.lilysilk.com/images/newhome/homebanner1-ca.jpg">
				</div><div class="halfblock">
					<img src="https://www.lilysilk.com/images/newhome/homebanner2-ca.jpg">
				</div>
			</div>

			<div class="onelayer pc">
				<div class="one-thirdblock">
					<img src="https://www.lilysilk.com/images/newhome/homesmallbanner1-ca.png">
				</div><div class="one-thirdblock">
					<img src="https://www.lilysilk.com/images/newhome/homesmallbanner2-ca.png">
				</div><div class="one-thirdblock">
					<img src="https://www.lilysilk.com/images/newhome/homesmallbanner3-ca.png">
				</div>
			</div>

			<div class="onelayer pc">
				<p class="title">Featured Categories</p>
				<p class="subtitle">Be stylish whenever and wherever.</p>
			</div>

			<div class="onelayer pc">
				<div v-show="day">
					<div class="half-left">
						Day time
						<img src="https://www.lilysilk.com/images/newhome/day.png">
					</div>
					<div class="arrow-box">
						<img class="smallimg" src="https://www.lilysilk.com/images/newhome/night.png">
						<img class="arrow-on" src="https://www.lilysilk.com/images/newhome/left1.png">
						<img class="arrow-off" src="https://www.lilysilk.com/images/newhome/right0.png">              
					</div>
				</div>
				<div v-show="night">
					<div class="half-left">
						Night time
						<img src="https://www.lilysilk.com/images/newhome/night.png">
					</div>
					<div class="arrow-box">
						<img class="arrow-off" src="https://www.lilysilk.com/images/newhome/left0.png">
						<img class="arrow-on" src="https://www.lilysilk.com/images/newhome/right1.png">
						<img class="smallimg" src="https://www.lilysilk.com/images/newhome/day.png">
					</div>
				</div>
			</div>

			<div class="onelayer pc">
				<div class="categories-window" @mouseover="mouseOver" @mouseleave="mouseLeave" ref="categoriesWidth">
						<div class="arrow-box-left">
							<div class="owl-prev" v-show="arrow"></div>
						</div>
						<div class="arrow-box-right">
							<div class="owl-next" v-show="arrow"></div>
						</div>
					<div class="categories-list" :style="{left:isWidth + 'px'}">
						<li>
							<img src="https://www.lilysilk.com/images/newhome/homenightbanner1-ca.jpg">
							<p class="onelabel">Facial Beauty<br> Silk Pillowcases ></p> 
						</li><li>
							<img src="https://www.lilysilk.com/images/newhome/homenightbanner2-ca.jpg">
							<p class="onelabel">Ultimate Luxury<br> Silk Pajamas For Women ></p> 
						</li><li>
							<img src="https://www.lilysilk.com/images/newhome/homenightbanner3-ca.jpg">
							<p class="onelabel">Relax at Night<br> Silk Pajamas For Men ></p>
						</li><li>
							<img src="https://www.lilysilk.com/images/newhome/homedaybanner1-ca.jpg">
							<p class="onelabel">Office Lady<br> Basic Silk Shirts ></p> 
						</li><li>  
							<img src="https://www.lilysilk.com/images/newhome/homedaybanner2-ca.jpg">
							<p class="onelabel">Keep Elegant<br> Silk Dresses ></p>
						</li><li>                          
							<img src="https://www.lilysilk.com/images/newhome/homedaybanner3-ca.jpg">
							<p class="onelabel">Daily Wear<br>Cozy Silk Camisoles ></p>                          
						</li>
					</div>
				</div>
			</div>

			<div class="onelayer pc">
				<p class="title">Sale Collections</p>
				<p class="subtitle">Check out our on sale hot categories</p>
			</div>

			<div class="onelayer pc">
				<div class="collections-one">
					<div class="oneblock">
						<img class="mouse" src="https://www.lilysilk.com/images/newhome/mouse.gif">
						<img src="https://www.lilysilk.com/images/newhome/homecollection1-ca.png">
					</div>
					<div class="oneblock">
						<img src="https://www.lilysilk.com/images/newhome/homecollection2-ca.png">
					</div>
					<div class="oneblock">
						<img src="https://www.lilysilk.com/images/newhome/homecollection3-ca.png">
					</div>
				</div>
			</div>

			<div class="onelayer pc">
				<div class="collections-two">
					<div class="collections">
						<div class="oneblock">
								<img class="mouse" src="https://www.lilysilk.com/images/newhome/mouse.gif">
									<img src="https://www.lilysilk.com/images/newhome/homecollection4-ca.png">
						</div>
					</div><div class="collections">
						<div class="oneblock">
							
							<img src="https://www.lilysilk.com/images/newhome/homecollection5-ca.png">
						</div>
						<div class="oneblock">
							
							<img src="https://www.lilysilk.com/images/newhome/homecollection6-ca.png">
						</div>
					</div>
				</div>
			</div>

			<div class="onelayer pc">
				<p class="title">As seen in</p>
				<div class="imgLayer">
					<img src="https://www.lilysilk.com/media/home/defaultbottom01.jpg">
					<img src="https://www.lilysilk.com/media/home/defaultbottom02.jpg">
				</div>
			</div>
			
			<div class="onelayer relation_mb bottom">
				<div class="fourbox">
					<ul class="item-list padding0">
						<li class="item items"  style="background-image:url('https://www.lilysilk.com/images/newhome/homebottom1-ca.jpg');">
						Silk Knitted >
						</li><li class="item items"  style="background-image:url('https://www.lilysilk.com/images/newhome/homebottom2-ca.jpg');">
						Cashmere >
						</li><li class="item items"  style="background-image:url('https://www.lilysilk.com/images/newhome/homebottom3-ca.jpg');">
						Travel with Silk >
						</li><li class="item items"  style="background-image:url('https://www.lilysilk.com/images/newhome/homebottom4-ca.jpg');">
						Little Black Dresses >
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    data(){
        return {
            day:true,
            night:false,
            arrow:false,
            isActive: true,
            isWidth: ""
        }
    }
};
</script>

<style>
.all {
  width: 95%;
  margin: auto;
}
.content {
  /*主体*/
  width: 100%;
  margin: auto;
}
.onelayer {
  /*每层区块*/
  width: 100%;
  display: block;
  margin-bottom: 20px;
  text-align: center;
}
.onelayer:first-of-type {
  margin-top: 81.5px;
}
.halfblock {
  /*左右布局分两块*/
  width: 48%;
  display: inline-block;
  margin-right: 4%;
}
.halfblock:nth-child(2) {
  margin-right: 0;
}
.halfblock img {
  width: 100%;
}
.one-thirdblock {
  /*左右布局分三块*/
  width: 32%;
  height: auto;
  display: inline-block;
  margin-right: 2%;
}
.one-thirdblock:last-child {
  margin-right: 0;
}
.onelayer p {
  padding: 0;
  margin: 0;
}
.onelayer img {
  width: 100%;
  display: block;
}
.onelayer .title {
  font-size: 40px;
  font-family: dp01;
  color: #1a1a1a;
  padding-top: 30px;
  letter-spacing: 2px;
}
.onelayer .subtitle {
  font-size: 16px;
  font-family: dp04;
  font-weight: lighter;
  color: #6f6f6f;
  letter-spacing: 1px;
  line-height: 16px;
}
.onelayer .half-left {
  /*中间轮播左侧标识*/
  display: inline-block;
  width: calc(50% - 20px);
  font-size: 32px;
  text-align: left;
  vertical-align: middle;
}
.half-left img {
  display: inline-block;
  width: 30px;
}
.onelayer .arrow-box {
  /*右侧箭头位置*/
  display: inline-block;
  width: calc(50% - 20px);
  margin-right: 10px;
  text-align: right;
}
.onelayer .smallimg {
  display: inline-block;
  width: 30px;
}
.onelayer .arrow-on {
  display: inline-block;
  width: 60px;
  margin-left: 10px;
  cursor: pointer;
}
.onelayer .arrow-off {
  display: inline-block;
  width: 60px;
  margin-left: 10px;
}
.onelayer .categories-window {
  /*轮播窗口*/
  position: relative;
  margin: auto;
  overflow: hidden;
}
.categories-window .arrow-box-left .owl-prev {
  position: absolute;
  top: 40%;
  left: 0;
  z-index: 10;
  width: 40px;
  height: 40px;
  line-height: 40px;
  background: #fff;
  cursor: pointer;
}

.categories-window .arrow-box-left .owl-prev:before {
  content: "\e260";
  font-family: ThemeIcons;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  font-size: 18px;
}

.categories-window .arrow-box-left div:hover {
  background: #000;
  color: #fff;
}
.categories-window .arrow-box-right .owl-next {
  position: absolute;
  top: 40%;
  right: 0;
  z-index: 10;
  width: 40px;
  height: 40px;
  line-height: 40px;
  background: #fff;
  cursor: pointer;
}

.categories-window .arrow-box-right .owl-next:before {
  content: "\e263";
  font-family: ThemeIcons;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  font-size: 18px;
}
.categories-window .arrow-box-right div:hover {
  background: #000;
  color: #fff;
}
.categories-window .categories-list {
  position: relative;
  white-space: nowrap;
  top: 0;
  left: 0;
  transition: 1.5s;
}
.categories-list li {
  display: inline-block;
  width: 32%;
  margin-right: 2%;
  list-style-type: none;
}
.categories-list li:nth-of-type(3) {
  margin-right: 0;
}
.categories-list li img {
  width: 100%;
}
.categories-list li .onelabel {
  color: #333;
  display: block;
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  letter-spacing: 1px;
}
.onelayer .collections-one {
  /*Sale Collections部分一*/
  width: 100%;
  background-size: 100%;
  background-repeat: no-repeat;
  padding: 6% 0 5% 0;
  background-image: url("https://www.lilysilk.com/images/newhome/homeclothing-ca.jpg");
}
.collections-one .oneblock {
  position: relative;
  width: 40%;
  background: rgba(255, 255, 255, 0.35);
  padding: 0;
  margin-bottom: 2%;
  margin-left: 8%;
}
.oneblock .mouse {
  position: absolute;
  width: 35px;
  top: 45%;
  right: 5%;
}
.collections-one .oneblock:hover,
.oneblock:active {
  background: rgba(255, 255, 255, 0.2);
}
.onelayer .collections-two {
  /*Sale Collections部分二*/
  width: 100%;
  background-size: 100%;
  padding: 5% 0 10% 0;
  background-repeat: no-repeat;
  background-image: url("https://www.lilysilk.com/images/newhome/homebedding-ca.jpg");
  text-align: left;
}
.collections-two .collections {
  width: 47%;
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.collections .oneblock {
  background: rgba(255, 255, 255, 0.35);
  margin-left: 15%;
  margin-bottom: 45px;
}
.collections .mouse {
  position: absolute;
  width: 35px;
  top: 35%;
  right: 5%;
}
.oneblock img {
  width: 96%;
}
.collections .oneblock:hover,
.oneblock:active {
  background: rgba(255, 255, 255, 0.2);
}
.onelayer .imgLayer {
  /*赞助商标横幅*/
  display: block;
  width: 100%;
  border-top: 3px solid #f6f6f6;
  padding: 30px 0;
  margin-top: 20px;
}
.onelayer .imgLayer img {
  display: inline-block;
  width: 46%;
  margin-right: 4%;
}
.onelayer .imgLayer img:last-child {
  margin-right: 0;
}
.onelayer .rotationTitle {
  /*买家秀上方标题*/
  font-size: 30px;
  font-family: dp01;
  color: #1a1a1a;
  text-align: left;
}
.onelayer .rotationExplain {
  /*买家秀副标题*/
  font-size: 15px;
  font-family: dp04;
  font-weight: lighter;
  color: #6f6f6f;
  text-align: left;
}
.rotationExplain span {
  font-family: dp05;
  font-weight: bold;
}

.buying-show {
  /*买家秀*/
  position: relative;
  margin: 20px 0;
  overflow: hidden;
}
.buying-show .left-arrow {
  position: absolute;
  left: 0;
  top: calc(50% - 10px);
  padding: 10px;
  background: #fff;
  color: #000;
  font-weight: 700;
  z-index: 2;
  cursor: pointer;
}
.buying-show .right-arrow {
  position: absolute;
  right: 0;
  top: calc(50% - 10px);
  padding: 10px;
  background: #fff;
  color: #000;
  font-weight: 700;
  z-index: 2;
  cursor: pointer;
}
.buying-show .left-arrow:hover,
.right-arrow:hover {
  background: #c1a446;
}
.buying-List {
  position: relative;
  white-space: nowrap;
  top: 0;
  left: 0;
}
.buying-List li {
  display: inline-block;
  width: calc(25% + 5px);
  list-style: none;
}
.buying-List img {
  width: calc(100% - 20px);
  margin-right: 20px;
}
.onelayer a {
  display: inline-block;
  font-family: dp01;
  font-size: 15px;
  color: #333;
}

.padding0 {
  /*下方四个标签*/
  margin: 0;
  padding: 0;
}
.item-list .items {
  width: 18%;
  margin-right: 4%;
  background-size: 100%;
  background-repeat: no-repeat;
  display: inline-block;
  padding: 1.5% 0 1.5% 4%;
  font-family: dp01;
  font-weight: 400;
  font-size: 15px;
  color: #333;
  letter-spacing: 1px;
  cursor: pointer;
}

.item-list .items:last-of-type {
  margin-right: 0;
}

.home-best-sellers-box {
  text-align: center;
}
.middle-public {
  /*中间公共部分*/
  display: block;
  width: 100%;
  background: #f6f6f6;
  padding: 30px 0;
  margin-top: 80px;
  text-align: center;
}
.middle-public .onePublic {
  display: inline-block;
  width: 18%;
  padding-left: 4%;
  border-left: 1px #979797 solid;
  text-align: left;
}
.middle-public .onePublic:first-child {
  border: none;
}
.middle-public .onePublic img {
  padding-top: 1px;
  vertical-align: middle;
}
.middle-public .onePublic .publicExplain {
  display: inline-block;
  font-size: 15px;
  font-family: dp01;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  vertical-align: middle;
  margin-left: 5px;
}
.publicExplain p {
  padding: 0;
  margin: 0;
}
.well-worn {
  padding-bottom: 25px;
}
.bottom {
  margin-bottom: 40px;
}
.items {
  margin-top: -10px;
}
.mb {
  display: none;
}
@media only screen and (max-width: 768px) {
  .pc {
    display: none;
  }
  .mb {
    display: block;
  }
  .onelayer:first-of-type {
    margin-top: 6px;
  }
  .one-thirdblock {
    width: calc(33% - 13px);
    margin-right: 21px;
    margin-top: 14px;
  }
  .one-thirdblock:nth-child(3n) {
    margin-right: 0;
  }
  .one-thirdblock img {
    margin-bottom: 12px;
  }
  .text {
    font-size: 14px;
    font-family: dp01;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    white-space: nowrap;
    letter-spacing: 1px;
  }
  .marginleft {
    margin-left: -7px;
  }
  .halfblock:nth-child(2) {
    margin-right: 0;
  }
  .relation {
    position: relative;
  }
  .textfixed {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    padding: 11.5px 0;
  }
  .pink {
    background: rgba(241, 183, 161, 0.6);
  }
  .blue {
    background: rgba(132, 185, 207, 0.6);
  }
  .textfixed p {
    padding: 0;
    margin: 0;
    color: #fff;
    font-size: 13px;
    font-family: dp01;
    line-height: 14px;
  }
  .textfixed .bold {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 7.5px;
  }
  .border {
    border: 1.5px solid #d09866;
    padding: 13px 10.5px;
  }
  .border a {
    margin-bottom: 8px;
  }
  .border a:last-child {
    margin-bottom: 0;
  }
  .relation_mb {
    overflow: hidden;
    position: relative;
  }
  .padding0 {
    white-space: nowrap;
    transition: all 600ms ease;
  }
  .bottom {
    margin-bottom: 30px;
  }
  .item-list .items {
    margin-top: 0;
    width: 150px;
    margin-right: 10px;
    padding: 11px 0 11px 45px;
    font-size: 12px;
  }
}
</style>