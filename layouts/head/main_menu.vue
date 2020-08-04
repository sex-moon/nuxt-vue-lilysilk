<template>
    <nav>
        <ul class="main-menu">
            <li v-for="(menu, index) in menus" :key="index" class="pl-3 pr-3">
                <p>{{menu.name}}&nbsp;&nbsp;<i class="fa fa-angle-down" aria-hidden="true"></i></p>

                <div class="content">
                    <MenuContent :menuData="menu.content" v-if="menu.content"></MenuContent>
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
.content{
    border-top: 1px solid #ccc;
    position: absolute;
    left: 0;
    right: 0;
}
</style>

<script>
export default {
    components: {
        MenuContent: ()=>import('~/components/main_menu_content'),
    },
    data() {
        return {
            menus: [
                {
                    name: "NEW",
                    content: {
                        poster: require("~/static/menu/navipic-new.jpg"),
                        columns: [
                            [
                                {
                                    name: "New In Today",
                                    children: [
                                        {
                                            name: "07-20-2020",
                                        },
                                        {
                                            name: "06-24-2020",
                                        },
                                        {
                                            name: "06-18-2020",
                                        },
                                        {
                                            name: "06-11-2020",
                                        }
                                    ]
                                },
                                {
                                    name: "New Best Sellers",
                                },
                                {
                                    name: "Back In Stock",
                                }
                            ],
                            [
                                {
                                    name: "New In Women",
                                    children: [
                                        {
                                            name: "Tops"
                                        },
                                        {
                                            name: "Bottoms"
                                        },
                                        {
                                            name: "Dresses & Jumpsuits"
                                        },
                                    ]
                                },
                                {
                                    name: "New In Men",
                                },
                                {
                                    name: "New In Accessories"
                                }
                            ],
                            [
                                {
                                    name: "Explore",
                                    children: [
                                        {
                                            name: "Storewide Top 20"
                                        },
                                        {
                                            name: "Vip Membership"
                                        },
                                        {
                                            name: "LiLYSILK Reward Points"
                                        },
                                        {
                                            name: "GET $20"
                                        },
                                        {
                                            name: "LILYSTAR Program"
                                        }
                                    ]
                                }
                            ]
                        ]
                    }
                },
                {
                    name: "PILLOWCASE"
                },
                {
                    name: "BEDDING"
                },
                {
                    name: "SLEEPWEAR"
                },
                {
                    name: "CLOTHING"
                },
                {
                    name: "SHIRTS & BLOUSES"
                },
                {
                    name: "LINGERIE"
                },
                {
                    name: "ACCESSORIES"
                },
                {
                    name: "SALE"
                }
            ]
        }
    },
}
</script>