<template>
  <div class="success" v-if="successLogon">
    <div class="success-small">
      <div class="success-div">
        <p class="success-p">THANKS FOR SUBSCRIPTION!</p>
        <p class="success-off">Your 10% OFF Promo Code is:</p>
        <p class="success-main">FIRST10OFF</p>
        <p class="success-also">It's also in your inbox!</p>
        <img @click="closeBtton" class="emailclose" src="~/static/subscribeColse.png">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:["successLogon"],
  methods: {
    closeBtton(){
      this.successLogon = false;
      this.$emit("footData",false);
    }
  },
};
</script>
<style scoped>
.success {
  position: relative;
}

.success-small {
  position: relative;  box-sizing: border-box;
  background-color: #fff;
  width: 100%;
  height: 100%;
}

.success-div {
  position: fixed;
    width: 80%;
    margin: auto;
    background: #fff;
    color: #000;
    padding: 30px 25px;
    max-width: 450px;
    box-shadow: 6px 6px 12px rgba(0,0,0,.3);
    text-align: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.success-div p
{
  margin:10px 0;
  padding:0;
  font-family: Questrial-Regular;
}
.success-p {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
}

.success-off {
  font-size: 18px;
  margin-bottom: 10px;
}

.success-main {
  font-size: 40px;
  color: #d64123;
  font-weight: 700;
}

.success-also {
  font-size: 18px;
}

.close {
  position: absolute;
  top: -12px;
  right: -6px;
  background-color: #000;
  border-radius: 50%;
  font-size: 13px;
  cursor: pointer;
  color:#fff;
  padding:8px 10px;
}
.emailclose{
  position: absolute;
  right: -15px;
  top: -15px;
  cursor: pointer;
  width: 36px;
}
</style>
