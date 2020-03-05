<template>
    <div class="col" :class="'span'+span">
        <slot></slot>
    </div>
    
</template>
<script>
    export default {
        name:'s-col',
        props:{
            span:{
                type:[Number,String]
            }
        }
    }
</script>
<style scoped lang="scss">
    .col{
        width:50%;
        background: red;
    }

    @for $n from 1 through 24{
        .span#{$n} {
            width: ($n/24) * 100%;
            background: red;
        }
    }

    
    
    
</style>
