<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>
<script>


    export default {
        name: 's-toast'
    }

</script>

<style scoped lang="scss">
    .toast{  position: fixed; top: 0; left: 50%; transform: translateX(-50%); font-style: 14px; line-height: 1.8; height: 40px; text-align: center; display:flex; align-items: center;
        border-radius: 4px;
        box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.5);
        background:rgba(0,0,0,0.75);
        color: white;
        padding: 0 16px;
    }

</style>