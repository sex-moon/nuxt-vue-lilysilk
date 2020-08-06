<template>
    <div class="content">
      
        <div class="onelayer pc">
            <p class="title">Featured Categories</p>
            <p class="subtitle">Be stylish whenever and wherever.</p>
        </div>

        <div class="onelayer pc">
            <p class="title">Sale Collections</p>
            <p class="subtitle">Check out our on sale hot categories</p>
        </div>

        <div class="onelayer pc">
            <div class="collections-one">
                <div class="oneblock">
                    <img class="mouse" src="https://www.lilysilk.com/images/newhome/mouse.gif" />
                    <img src="https://www.lilysilk.com/images/newhome/homecollection1-ca.png" />
                </div>
                <div class="oneblock">
                    <img src="https://www.lilysilk.com/images/newhome/homecollection2-ca.png" />
                </div>
                <div class="oneblock">
                    <img src="https://www.lilysilk.com/images/newhome/homecollection3-ca.png" />
                </div>
            </div>
        </div>
        <div class="onelayer pc">
        <div class="collections-two">
            <div class="collections">
            <div class="oneblock">
                <img class="mouse" src="https://www.lilysilk.com/images/newhome/mouse.gif" />
                <img src="https://www.lilysilk.com/images/newhome/homecollection4-ca.png" />
            </div>
            </div>
            <div class="collections">
            <div class="oneblock">
                <img src="https://www.lilysilk.com/images/newhome/homecollection5-ca.png" />
            </div>
            <div class="oneblock">
                <img src="https://www.lilysilk.com/images/newhome/homecollection6-ca.png" />
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style>
.content {
  width: 95%;
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

</style>