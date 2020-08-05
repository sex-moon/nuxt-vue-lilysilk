<template>
    <div class="menu-content">
        <ul>
            <li v-for="(column, column_index) in menuData.columns" :key="column_index" class="">
                <div v-for="(row, row_index) in column" :key="row_index">
                    <span>{{row.name}}</span>
                </div>
            </li>
        </ul>
        <div class="poster"><img :src="menuData.poster"></div>
    </div>
</template>

<script>
export default {
    props: {
        menuData: {
            type: Object,
            default: ()=>{}
        }
    },
    mounted() {
        console.log(this.menuData);   
    }
}
</script>

<style scoped>
.menu-content{
    display: flex;
    justify-content: center;
    background-color: rosybrown;
}
.menu-content ul{
    display: flex;
}
.poster img{
    width: 100%;
    max-width: 350px;
}
</style>