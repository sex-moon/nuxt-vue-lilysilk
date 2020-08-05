<template>
    <div>
        站点{{name}}
        <div><img src="~/static/homeslide2-us.jpg"></div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState("category", ["name"])  
    }
}
</script>