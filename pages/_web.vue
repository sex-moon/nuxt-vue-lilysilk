<template>
    <div>站点{{name}}</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState("category", ["name"])  
    }
}
</script>