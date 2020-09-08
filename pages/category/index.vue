<template>
    <div class="category">
        <div class="category-poster">
            <img src="https://www.lilysilk.com/media/catalog/category/pillowcase-us.jpg" :alt="category.name">
        </div>

        <div class="category-content">
            <div class="category-content-left-container">
                <CategoryLeft></CategoryLeft>
            </div>

            <div class="category-content-right-container">
                <CategoryRight></CategoryRight>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState("category", ["category"])  
    },
    components: {
        CategoryLeft: ()=>import("~/pages/category/category-left"),
        CategoryRight: ()=>import("~/pages/category/category-right")
    }
}
</script>

<style scoped>
.category{
    width: 96%;
    max-width: 1500px;
    margin: 15px auto;
}
.category-content{
    margin-top: 20px;
    display: flex;
}
.category-content-left-container{
    min-width: 170px;
}
.category-content-right-container{
    flex-grow: 1;
    margin: 20px 0 0 20px;
}
</style>