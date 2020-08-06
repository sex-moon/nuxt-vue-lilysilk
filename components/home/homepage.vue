<template>
<div class="all">
	<div class="content">
		<div class="onelayer pc">
			<div class="halfblock">
				<img src="~/static/images/home/homebanner1.jpg">
			</div><div class="halfblock">
				<img src="~/static/images/home/homebanner2.jpg">
			</div>
		</div>
		<div class="onelayer pc">
			<div class="one-thirdblock">
				<img src="~/static/images/home/homesmallbanner1.png">
			</div><div class="one-thirdblock">
				<img src="~/static/images/home/homesmallbanner2.png">
			</div><div class="one-thirdblock">
				<img src="~/static/images/home/homesmallbanner3.png">
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
					<img src="~/static/images/home/day.webp">
				</div>
				<div class="arrow-box">
					<img class="smallimg" src="~/static/images/home/night.webp">
					<img class="arrow-on" src="~/static/images/home/left1.webp">
					<img class="arrow-off" src="~/static/images/home/right0.webp">              
				</div>
			</div>
			<div v-show="night">
				<div class="half-left">
					Night time
					<img src="~/static/images/home/night.webp">
				</div>
				<div class="arrow-box">
					<img class="arrow-off" src="~/static/images/home/left0.webp">
					<img class="arrow-on" src="~/static/images/home/right1.png">
					<img class="smallimg" src="~/static/images/home/day.webp">
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
						<img src="~/static/images/home/homenightbanner1-ca.png">
						<p class="onelabel">Facial Beauty<br> Silk Pillowcases ></p> 
					</li><li>
						<img src="~/static/images/home/homenightbanner2-ca.png">
						<p class="onelabel">Ultimate Luxury<br> Silk Pajamas For Women ></p> 
					</li><li>
						<img src="~/static/images/home/homenightbanner3-ca.png">
						<p class="onelabel">Relax at Night<br> Silk Pajamas For Men ></p>
					</li><li>
						<img src="~/static/images/home/homedaybanner1.jpg">
						<p class="onelabel">Office Lady<br> Basic Silk Shirts ></p> 
					</li><li>  
						<img src="~/static/images/home/homedaybanner2.jpg">
						<p class="onelabel">Keep Elegant<br> Silk Dresses ></p>
					</li><li>                          
						<img src="~/static/images/home/homedaybanner3.jpg">
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
			<div class="collections-one" style="background-image:url('images/home/homeclothing-ca.png');">
				<div class="oneblock">
					<img class="mouse" src="~/static/images/home/mouse.gif">
					<img src="~/static/images/home/homecollection1.webp">
				</div>
				<div class="oneblock">
					<img src="~/static/images/home/homecollection2.png">
				</div>
				<div class="oneblock">
					<img src="~/static/images/home/homecollection3.png">
				</div>
			</div>
		</div>
		<div class="onelayer pc">
			<div class="collections-two"  style="background-image:url('images/home/homebedding-ca.png');">
				<div class="collections">
					<div class="oneblock">
						<img class="mouse" src="~/static/images/home/mouse.gif">
						<img src="~/static/images/home/homecollection4.png">
					</div>
				</div><div class="collections">
					<div class="oneblock">
						<img src="~/static/images/home/homecollection5.png">
					</div>
					<div class="oneblock">
						<img src="~/static/images/home/homecollection6.png">
					</div>
				</div>
			</div>
		</div>
		<div class="onelayer relation_mb bottom">
			<div class="fourbox">
			<ul class="item-list padding0">
				<li class="item items"  style="background-image:url('images/home/homebottom1.webp')">
				Silk Knitted >
				</li><li class="item items"  style="background-image:url('images/home/homebottom2.webp');">
				Cashmere >
				</li><li class="item items"  style="background-image:url('images/home/homebottom3.webp');">
				Travel with Silk >
				</li><li class="item items"  style="background-image:url('images/home/homebottom4.webp');">
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
    },
    methods: {},
    mounted() {}
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
</style>