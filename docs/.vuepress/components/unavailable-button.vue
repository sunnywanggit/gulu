<template>
    <div>
        <s-button type="primary">Primary</s-button>
        <s-button type="primary" disabled>Primary(disabled)</s-button>
        <br>
        <br>
        <s-button type="default">Default</s-button>
        <s-button type="dashed" disabled>Default(disabled)</s-button>
        <br>
        <br>
        <s-button type="dashed" >Dashed</s-button>
        <s-button type="dashed" disabled >Dashed(disabled)</s-button>
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
