<template>
    <!--    这种 class 的写法记下来-->
    <div class="col" :class="colClass" :style="colStyle">
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
        data() {
            return {
                gap: 0
            }
        },
        computed: {
            colStyle() {
                return {
                    marginLeft: this.gap / 2 + 'px',
                    marginRight: this.gap / 2 + 'px'
                }
            },
            colClass() {
                //解构赋值，这个要好好学学
                let {span, offset} = this
                return [span && 'span' + span, offset && 'offset' + offset]
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
