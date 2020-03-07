<template>
    <!--    这种 class 的写法记下来-->
    <div class="col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>

</template>
<script>
    let validator = (value) => {
        let keys = Object.keys(value)
        let valid = true
        keys.forEach((key) => {
            if (!['span', 'offset'].includes(key)) {

                valid = false
            }
        })
        return valid
    }

    export default {
        name: 's-col',
        props: {
            span: { type: [Number, String] },
            offset: { type: [Number, String] },
            ipad: { type: Object, validator },
            narrow: { type: Object, validator },
            pc: { type: Object, validator },
            wide: { type: Object, validator }
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
                let {span, offset, ipad, narrow, pc,wide} = this
                let ipadClass= []
                let narrowClass = []
                let pcClass = []
                let wideClass = []

                if(ipad){
                   ipadClass= [`ipad-span-${ipad.span}`, `ipad-offset-${ipad.offset}`]
                }
                if(narrow){
                    narrowClass= [`narrow-span-${narrow.span}`, `narrow-offset-${narrow.offset}`]
                }
                if(pc){
                    pcClass = [`pc-span-${pc.span}`, `pc-offset-${pc.offset}`]
                }
                if(wide){
                    wideClass= [`wide-span-${wide.span}`, `wide-offset-${wide.offset}`]

                }


                return [
                    span && 'span' + span,
                    offset && 'offset' + offset,
                    ...ipadClass,
                    ...narrowClass,
                    ...pcClass,
                    ...wideClass
                ]
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

    @media(max-width: 576px) {
        @for $n from 1 through 24 {
            .phone-span-#{$n} {
                width: ($n/24) * 100%;
                background: blue;
            }
            .phone-offset-#{$n} {
                margin-right: ($n/24) * 100%;
            }
        }
    }

    @media(min-width: 577px) and (max-width: 768px) {
        @for $n from 1 through 24 {
            .ipad-span-#{$n} {
                width: ($n/24) * 100%;
                background: blue;
            }
            .ipad-offset-#{$n} {
                margin-right: ($n/24) * 100%;
            }
        }
    }

    @media(min-width: 769px) and (max-width: 992px) {
        @for $n from 1 through 24 {
            .narrow-span-#{$n} {
                width: ($n/24) * 100%;
                background:orange;
            }
            .narrow-offset-#{$n} {
                margin-right: ($n/24) * 100%;
            }
        }
    }

    @media(min-width: 993px) and (max-width: 1200px) {
        @for $n from 1 through 24 {
            .pc-span-#{$n} {
                width: ($n/24) * 100%;
                background: blue;
            }
            .pc-offset-#{$n} {
                margin-right: ($n/24) * 100%;
            }
        }
    }

    @media(min-width: 1201px) {
        @for $n from 1 through 24 {
            .wide-span-#{$n} {
                width: ($n/24) * 100%;
                background:grey;
            }
            .wide-offset-#{$n} {
                margin-right: ($n/24) * 100%;
            }
        }
    }
</style>
