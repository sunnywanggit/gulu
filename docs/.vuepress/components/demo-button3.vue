<template>
    <div>
        <s-button type="primary" size="large">Primary</s-button>
        <s-button icon="search" size="middle">Default</s-button>
        <s-button type="dashed" size="small">Dashed</s-button>
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
