<template>
    <div class="sider">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 's-sider',
    }

</script>
<style scoped lang="scss">
    .sider {
        display: flex;
        position: relative;
        flex-grow: 1;

    }
</style>