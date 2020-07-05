<template>
    <div>
        <s-button type="primary" icon="search">Search</s-button>
        <s-button icon="search">Search</s-button>
        <s-button type="dashed" icon="search">Search</s-button>
    </div>
</template>
<script>
    import Button from '../../../src/button.vue'
    export default {
        components:{
            's-button':Button
        }
    }
</script>
