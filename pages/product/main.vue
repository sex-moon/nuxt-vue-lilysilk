<template>
    <div class="product-main">
        <div class="product-main-container">
            <Row>
                <Col span="13"><ProductLeft></ProductLeft></Col>
                <Col span="10" offset="1"><ProductRight></ProductRight></Col>
            </Row>
            
        </div>
    </div>
</template>

<script>
export default {
    components: {
        ProductLeft: ()=>import('~/pages/product/product-main-left.vue'),
        ProductRight: ()=>import('~/pages/product/product-main-right.vue')
    }
}
</script>