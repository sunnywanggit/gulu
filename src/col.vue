<template>
    <!--    这种 class 的写法记下来-->
    <div class="col" :class="[span && 'span'+span,offset && 'offset'+offset]"
         :style="{marginLeft:gap/2+'px',marginRight:gap/2+'px'}"

    >
        <slot></slot>
    </div>

</template>
<script>
    export default {
        name: 's-col',
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },

        },
        data(){
            return{
                gap:0
            }
        }
    }
</script>
<style scoped lang="scss">
    .col {
        width: 50%;
        background: red;
    }

    @for $n from 1 through 24 {
        .span#{$n} {
            width: ($n/24) * 100%;
            background: red;
        }
        .offset#{$n} {
            margin-right: ($n/24) * 100%;
        }
    }


</style>
