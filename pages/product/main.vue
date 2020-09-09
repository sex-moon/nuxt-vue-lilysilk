<template>
    <div class="product-main">
        <div class="product-main-container">
            <Row>
                <Col span="14"><ProductLeft></ProductLeft></Col>
                <Col span="10">col-12</Col>
            </Row>
            
        </div>
    </div>
</template>

<script>
export default {
    components: {
        ProductLeft: ()=>import('~/pages/product/product-left.vue'),
        // ProductRight: ()=>import('~/pages/product/product-right.vue')
    }
}
</script>