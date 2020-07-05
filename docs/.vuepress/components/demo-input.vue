<template>
    <div>
        <s-input value="中文"></s-input>
        <s-input value="中文" disabled></s-input>
        <s-input value="中文" error="错误"></s-input>
    </div>
</template>
<script>
    import Input from '../../../src/input.vue'
    export default {
        components:{
            's-input':Input
        }
    }
</script>
