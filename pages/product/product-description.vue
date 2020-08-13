<template>
    <div class="product-description">
        <div class="tab-title">
            <span @click="isDescription" :class="tabNumber == '1'?  'blod-border-bottom':''">DESCRIPTION</span>
            <span @click="isReturns" :class="tabNumber == '2'?  'blod-border-bottom':''">SHIPPING &amp; RETURNS</span>
            <span @click="isCare" :class="tabNumber == '3'?  'blod-border-bottom':''">CARE</span>
        </div>
        <div class="tab-content">
            <div class="description" v-if="tabNumber == '1'">
                <p>* The default price is for one pillowcase only *</p>
                <ul class="fabric-prove">
                    <li>Fabric: 100% Grade 6A 19 Momme pure Mulberry silk.</li>
                    <li>Thread Count: 400</li>
                    <li>International Certification: OEKO-TEX Standard 100, Eco-friendly and Non-toxic</li>
                    <li>
                        Closure: Envelope Closure At The Side
                        <nuxt-link to="/">(Click here to choose silk pillowcases with zipper closure).</nuxt-link>
                    </li>
                </ul>
                <p>
                    LILYSILK's 19 Momme pillowcase is the perfect choice to enter the world of silk. 
                    Inexpensive yet effective in treating common sleep-related facial/hair problems, 
                    our 19 Momme pillowcases are the ultimate, as well as the easiest way to turn your 
                    everyday sleep into a rejuvenating journey of comfort.
                </p>
                <p>
                    The Terse style features a simplistic flange-less design with a side-opened envelope closure 
                    for those who like to put their hands under their pillowcases when they sleep.
                </p>
                <p>
                    Say Goodbye To Birds-Nest Hair, Insomnia &amp; allergy with our 19mm Silk Pillowcase. 
                    Don’t wait to experience the exquisitely soft and smooth feel of our pillowcases - your face will thank you for it.
                </p>
            </div>
            <div class="returns" v-if="tabNumber == '2'">
                <p><img src=""><span>Free Shipping On Orders Over $50(No Taxes/2-4 Business Days US Shipping)</span></p>
                <p><img src=""><span>45-Day Free Returns</span></p>
                <p><img src=""><span>P.O. Boxes and Military Addresses (APO, FPO) cannot be delivered.</span></p>
            </div>
            <div class="care" v-if="tabNumber == '3'">
                <p>-Professional Dry Cleaning Recommended</p>
                <p>-Hand wash or Machine wash in lukewarm water (30°C) on the most gentle cycle available.</p>
                <p>- Minimize spin time.</p>
                <p>-Do Not Use Bleaches</p>
                <p>-Do Not Tumble Dry</p>
                <p>-Hang dry if possible, however, avoid direct sunlight exposure.</p>
                <p>
                    - Use neutral or special detergent for silk, such as Tenestar 
                    <nuxt-link to="/">(Click here to buy Tenestar at Lilysilk)</nuxt-link>
                </p>
                <p>- Keep out of touch of pets/sharp objects.</p>
                <p>
                    Learn More About How To Care Silk >
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tabNumber: "1",
        }
    },
    methods: {
        isDescription() {
            this.tabNumber = "1";
        },
        isReturns() {
            this.tabNumber = "2";
        },
        isCare() {
            this.tabNumber = "3";
        }
    }
}
</script>

<style>
.product-description {
    display: block;
    margin-top: 20px;
}
.tab-title {
    border-bottom: 1px solid #222;
    margin-bottom: 5px;
}
.tab-title span {
    display: inline-block;
    font-weight: 600;
    margin-right: 20px;
    padding-bottom: 5px;
    cursor: pointer;
}
.blod-border-bottom {
    border-bottom: 3px solid #000;
}
.tab-content {
    font-size: 14px;
}
.description,.returns,.care {
    color: #333333;
}
.fabric-prove li {
    list-style-type: disc;
    margin-left: 15px;
}
</style>