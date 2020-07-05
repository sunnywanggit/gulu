<template>
    <div>
        <s-button type="primary">Primary Button</s-button>
        <s-button>Default Button</s-button>
        <s-button type="dashed">Dashed Button</s-button>
        <s-button type="text">Dashed Button</s-button>
        <s-button type="link">Dashed Button</s-button>
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
