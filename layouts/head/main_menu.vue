<template>
    <nav>
        <ul class="main-menu">
            <li v-for="(menu, index) in menus" :key="index" class="pl-3 pr-3">
                <p>{{menu.name}}&nbsp;&nbsp;<i class="fa fa-angle-down" aria-hidden="true"></i></p>

                <div class="content" v-if="menu.content">
                    <MenuContent :menuData="menu.content"></MenuContent>
                </div>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.main-menu{
    display: flex;
    justify-content: center;
    height: 50px;
    line-height: 50px;
}
.main-menu li > p{
    cursor: pointer;
    transition: color 300ms ease-in-out;
}
.main-menu li > p:hover{
    color: #c1a446;
}
.main-menu li:hover .content{
    display: block;
}
.content{
    display: none;
    border-top: 1px solid #ccc;
    box-shadow: 0 4px 5px -3px #888;
    position: absolute;
    left: 0;
    right: 0;
}
.content:hover{
    display: block;
}
</style>

<script>
import menus from "~/static/data/main_menu.js";

export default {
    data() {
        return {
            menus: []
        }
    },
    components: {
        MenuContent: ()=>import('~/components/head/main_menu_content'),
    },
    created () {
        this.menus = menus;
    }
}
</script>