<template>
    <div>
        <s-input v-model="value"></s-input>
        <div>
            value: {{value}}
        </div>
    </div>
</template>
<script>
    import Input from '../../../src/input'

    export default {
        components: {
            's-input': Input
        },
        data() {
            return {
                value: '1'
            }
        }
    }
</script>