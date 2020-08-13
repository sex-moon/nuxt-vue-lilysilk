<template>
    <div class="header-advantage">
        <ul>
            <li>
                <div class="icon"><img src="~/assets/image/common/return.png"></div>
                <div class="message">
                    <p>Return & Exchange</p>
                    <p>Within 45 Days</p>
                </div>
            </li>
            <li>
                <div class="icon"><img src="~/assets/image/common/freeshipping.png"></div>
                <div class="message">
                    <p>Free Shipping</p>
                    <p> Order Over $50</p>
                </div>
            </li>
            <li>
                <div class="icon"><img src="~/assets/image/common/pinglun.png"></div>
                <div class="message">
                    <p>Trusted Store Top Rating</p>
                    <p>6000+ Customer's Feedback</p>
                </div>
            </li>
            <li>
                <div class="icon"><img src="~/assets/image/common/oeko.png"></div>
                <div class="message">
                    <p>OEKO Certified</p>
                    <p>Non-toxic Dyes</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.header-advantage{
    background-color: #f8f8f8;
    height: 40px;
}
ul{
    max-width: 1150px;
    margin: 0 auto;
    display: flex;
    height: 100%;
}
li{
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #e5e5e5;
}
li:last-child{
    border-right: none;
}
.icon{
    width: 32px;
    margin-right: 5px;
}
.message{
    text-align: center;
}
.message p:nth-child(1){
    font-size: 14px;
    color: #c1a446;
    line-height: 1em;
}
.message p:nth-child(2){
    font-size: 12px;
    line-height: 1em;
    margin-top: 4px;
}
</style>