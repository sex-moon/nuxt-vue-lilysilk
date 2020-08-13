<template>
    <div class="embroidered-model">
        <div class="embroidered-addition" @click="getShow">
            <input type="checkbox" class="embroidered-checkbox">
            <span>Monogramming + US$ 25.00</span>
        </div>
        <div class="popup-background" v-show="isShow">
            <div class="close-layer">
                <div class="close" @click="getClose"><img src="~/static/images/product/embroidered/close.webp"></div>
            </div>
            <div class="popup-content">
                <div class="embroidered">
                    <div class="embroidered-title">Monogramming Service</div>
                    <div class="embroidered-explain">
                        <p>Designed by LilySilk, personalised by you.</p>
                        <p>Creat a unique gift by adding their initials to our products.</p>
                    </div>
                    <div class="embroidered-content">
                        <div class="select-font">
                            <p class="monogram-title">1.  Select Font</p>
                            <div class="select-typeface-img" v-for="(typeface,index) in typefaces" :key="index">
                                <img :src="'/images/product/embroidered/'+ typeface.img">
                            </div>
                            <div class="monogram-box">
                                <p cass="monogram-title">Enter Monogram Name or Initials</p>
                                <div class="monogram-subtitle">
                                    <p>Enter up to 10 initials to personalise this item.</p>
                                    <p>please note: text will be monogrammed exactly as you type it below:</p>
                                </div>
                                <div class="embroidered-input-text">
                                    <input type="text" class="input-text">
                                    <span>{{EmbroideredNumber}}/10</span>
                                </div>
                            </div>
                        </div>
                        <div class="select-color">
                            <p class="monogram-title">2.Select Color :<span>{{EmbroideredColor}}</span></p>
                            <div class="select-color-img" v-for="(embroideredcolor,index) in embroideredcolors" :key="index">
                                <img :src="'/images/product/embroidered/'+ embroideredcolor.img">
                            </div>
                        </div>
                        <div class="default-location">
                            <p class="monogram-title">
                                3.The default location of monogram is shown in below picture.If you have any special need, please contact our customer service.
                            </p>
                            <div class="default-location-img">
                                <img src="~/static/images/product/embroidered/gram_position_01.png">
                                <img src="~/static/images/product/embroidered/gram_position_02.png">
                                <img src="~/static/images/product/embroidered/gram_position_03.png">
                            </div>
                        </div>
                    </div>
                    <div class="additional">
                        <div class="additional-message">
                            <p class="additional-message-title">Monogramming + US$ 25.00</p>
                            <div class="additional-message-content">
                                <p>Please add <span>4 additional business days</span> to your shipping time when you have requested a monogram.</p>
                                <p>Monogrammed silk products can not be exchanged or returned once sold.</p>
                                <p>Please contact us at support@lilysilk.zendesk.com for any specific demands on quantity or position of monogramed items.</p>
                                <p>
                                    For the silk pajamas and robe set, we only add the monogram to the robe at the default placement. 
                                    If you have any other need, please leave a message or contact the customer service.
                                </p>
                            </div>
                        </div>
                        <div class="embroidered-save-button">Save Monogramming</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            typefaces: [
                {name: '1',img: 'font-style01.jpg'},
                {name: '4',img: 'font-style04.jpg'},
                {name: '6',img: 'font-style06.jpg'},
                {name: '7',img: 'font-style07.jpg'},
                {name: '8',img: 'font-style08.jpg'}
            ],
            embroideredcolors: [
                {name: 'White',img: 'R-Weib.png'},
                {name: 'Black',img: 'R-Schwarz.png'},
                {name: 'Ivory',img: 'R-Elfenbein.png'},
                {name: 'Gold',img: 'R-Gold.png'},
                {name: 'Middle Gray',img: 'R-MiddleGray.png'},
                {name: 'Light Peach',img: 'R-LightPeach.png'},
            ],
            EmbroideredNumber: "0",
            EmbroideredColor: "",
            isShow: false,
        }
    },
    methods: {
        getShow() {
            this.isShow = true;
        },
        getClose() {
            this.isShow = false;
        }
    }
}
</script>

<style>
.embroidered-addition {
    display: inline-block;
    font-size: 14px;
}
.embroidered-addition span {
    vertical-align: middle;
}
.embroidered-checkbox {
    width: 22px;
    height: 22px;
    margin-right: 2px;
    vertical-align: middle;
}
/*弹框*/
.popup-background {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 3;
}
.popup-content {
    position: absolute;
    width: 70%;
    height: 90%;
    background-color: #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    box-sizing: border-box;
    overflow: auto;
    z-index: 3;
}
.close-layer {
    position: relative;
    left: 50%;
    top: 10%;
    width: 70%;
    height: 10%;
    transform: translate(-50%, -50%);
    z-index: 4;
}
.close {
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 4;
    cursor: pointer;
}
.close img {
    width: 36px;
    height: 36px;
}
/*弹框内容*/
.embroidered {
    margin: 10px 5px 10px 5px;
}
.embroidered-title {
    font-size: 24px;
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid #e5e5e5;
}
.embroidered-explain {
    font-size: 15px;
    margin-top: 5px;
}
.embroidered-content {
    margin-top: 15px;
    border-bottom: 1px solid #e5e5e5;
}
.monogram-title {
    font-size: 17px;
    margin: 5px 0;
}
.monogram-subtitle {
    font-size: 15px;
    color: #555;
}
.monogram-subtitle p {
    margin: 5px 0;
}
.select-typeface-img {
    display: inline-block;
    width: calc(20% - 8px);
    margin: 10px 8px 0 0;
    padding: 1px;
    border: 1px solid #e5e5e5;
    cursor: pointer;
}
.monogram-box {
    margin-top: 20px;
}
.embroidered-input-text {
    margin: 5px 0;
}
.embroidered-input-text .input-text {
    width: 30%;
    min-width: 200px;
    max-width: 300px;
    height: 36px;
    line-height: 36px;
    border: 1px solid #e5e5e5;
    padding-left: 8px;
    margin-top: 10px;
}
.select-color-img {
    display: inline-block;
    width: 50px;
    margin-top: 10px;
    margin-right: 8px;
    border: 1px solid #fff;
    padding: 1px;
    cursor: pointer;
}
.default-location {
    margin-top: 20px;
}
.default-location-img {
    display: flex;
    margin-bottom: 25px;
}
.default-location-img img {
    width: 33.33%;
}
.additional {
    display: flex;
    justify-content: space-between;
    margin: 10px 0 20px 0;
}
.additional-message {
    width: 60%;
}
.additional-message-title {
    color: #d64123;
    font-size: 17px;
    font-weight: 700;
}
.additional-message-content {
    font-size: 13px;
    margin: 5px 0;
}
.additional-message-content span {
    color: #d64123;
    font-weight: 700;
}
.embroidered-save-button {
    width: 220px;
    height: 45px;
    background: #f5f5f5;
    font-size: 17px;
    line-height: 45px;
    font-weight: 400;
    text-align: center;
    cursor: pointer;
}
.embroidered-save-button:hover {
    color: #fff;
    background: #c1a446;
}
</style>