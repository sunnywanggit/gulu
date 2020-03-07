<template>
    <div class="content">
        <slot></slot>
    </div>
</template>
<script>
    export default {}

</script>
<style scoped lang="scss">
    .content{ display: flex;  outline: 1px solid green;
        flex-grow: 1;}
</style>