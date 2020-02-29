<template>
    <!--    把 iconPosition 当做 key 来求它的 value-->
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
<!--        <svg class="icon" v-if="icon">-->
<!--            <use :xlink:href="`#i-${icon}`"></use>-->
<!--        </svg>-->

        <g-icon v-if="icon" :name="icon"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        props:{
            icon:String,
            iconPosition:{
                type:String,
                default:'left',
                // 属性检查器
                validator: function (value) {
                    return value != 'left' && value != 'right' ? false : true;
                }
            }

        },
    }
</script>

<style lang="scss">
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1.12em;
        border-radius: var(--button-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        /*这就是经验，下面一句代码解决了三个button不再同一水平线上的css问题*/
        vertical-align: middle;

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }

        > .icon {
            width: 1em;
            height: 1em;
            order: 1;
            margin-right: .3em;
        }
        > .content{
            order: 2;
        }

        &.icon-right {
            > .icon {
                order: 2;
                margin-left: .3em;
                margin-right: 0;
            }
            > .content{
                order: 1;
            }
        }

    }

</style>