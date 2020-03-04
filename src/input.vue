<template>
    <div class="wrapper" :class="{error}">
        <input type="text" :value="value" :readonly="readonly" :disabled="disabled">
        <!--        这里直接使用template进行包裹，真实一个不错的方法-->
        <template v-if="error">
            <g-icon name="error" class="icon-error"></g-icon>
            <span class="error-message">{{error}}</span>
        </template>
    </div>
</template>
<script>
    import Icon from './components/icon'

    export default {
        components: {
            'g-icon': Icon
        },
        name: "s-input",
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            }
        }

    }

</script>
<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $font-size: 12px;
    $box-shadow-color: rgb(0, 0, 0, 0.1);
    $red: #F1453D;

    .wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;

        > * {
            margin-right: .5em;

            &:last-child {
                margin-right: 0;
            }
        }

        &.error {
            > input {
                border-color: $red;

                &:focus {
                    box-shadow: inset 0 1px 1px $red;
                    color: $red;
                }

            }

            .icon-error {
                fill: $red;
            }

            .error-message {
                color: $red;
            }
        }

        > input {
            height: $height;
            border: 1px solid $border-color;
            border-radius: 4px;
            padding: 0 8px;

            &:hover {
                border: 1px solid $border-color-hover;
            }

            &:focus {
                box-shadow: inset 0 1px 1px $box-shadow-color;
                outline: none;
            }

            //这个地方我真的还是第一次用，给元素的属性加样式，调调的
            &[disabled], &[readonly] {
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
            }
        }


    }


</style>