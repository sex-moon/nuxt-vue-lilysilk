<template>
    <div class="menu-content">
        <ul class="menu-content-left m-2">
            <li v-for="(column, column_index) in menuData.columns" :key="column_index" class="ml-2 mr-2 column">
                <div v-for="(row, row_index) in column" :key="row_index">
                    <span class="submenu-1 f16">{{row.name}}</span>
                    <ul v-if="row.children" class="submenu-2-ul">
                        <li v-for="(item, item_index) in row.children" :key="item_index"><span class="submenu-2 f14">{{item.name}}</span></li>
                    </ul>
                </div>
            </li>
        </ul>

        <div class="menu-content-right poster m-2"><img v-lazy="menuData.poster"></div>
    </div>
</template>

<script>
export default {
    props: {
        menuData: {
            type: Object,
            default: ()=>{}
        }
    }
}
</script>

<style scoped>
.menu-content{
    display: flex;
    justify-content: center;
    background-color: #fff;
    padding: 20px 0;
}
.menu-content-left{
    display: flex;
}
.column{
    min-width: 180px;
}
.column > div{
    line-height: 38px;
}
.submenu-1, .submenu-2{
    transition: ease-in-out 300ms color, ease-in-out 100ms padding-left;
}
.submenu-1:hover, .submenu-2:hover{
    color: #c1a446;
    cursor: pointer;
    padding-left: 5px;
}
.submenu-2-ul{
    display: flex;
    flex-direction: column;
}
.submenu-2-ul li{
    line-height: 24px;
}
.submenu-2{
    color: #888;
}
.poster img{
    width: 100%;
    max-width: 350px;
}
</style>