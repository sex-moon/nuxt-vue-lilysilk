<template>
    <div class="embroidered-model">
        <div class="embroidered-title">
            <input type="checkbox" class="embroidered-checkbox">
            Monogramming + US$ 25.00
        </div>
        <div class="popup-background">
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
                            <div class="select-typeface-img" :for="(typeface,index) in typefaces">
                                <img :src="'xx'+typeface.img">
                            </div>
                            <p>Enter Monogram Name or Initials</p>
                            <div>
                                <p>Enter up to 10 initials to personalise this item.</p>
                                <p>please note: text will be monogrammed exactly as you type it below:</p>
                            </div>
                            <div class="embroidered-input-text">
                                <input type="text" class="input-text">
                                <span>{{EmbroideredNumber}}/10</span>
                            </div>
                        </div>
                        <div class="select-color">
                            <p class="monogram-title">2.Select Color :<span>{{EmbroideredColor}}</span></p>
                            <div class="select-color-img" :for="(color,index) in colors">
                                <img :src="'xx'+color.img">
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
                        <div class=""></div>
                        <div class=""></div>
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
            typefaces: [],
            colors: [],
            EmbroideredNumber: "0",
            EmbroideredColor: ""
        }
    }
}
</script>

<style>
.embroidered-checkbox {
    width: 24px;
    height: 24px;
    margin-right: 2px;
    vertical-align: bottom;
}
/*弹框*/
.popup-background {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
}
.popup-content {
    position: absolute;
    width: 800px;
    height: 90%;
    background-color: #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    box-sizing: border-box;
}
/*弹框内容*/
.embroidered {
    
}
.embroidered-content {
    border-bottom: 1px solid #e5e5e5;
}
</style>