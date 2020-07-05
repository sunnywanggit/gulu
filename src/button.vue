<template>
    <!--    把 iconPosition 当做 key 来求它的 value-->
    <button class="g-button"
            :class="{[`icon-${iconPosition}`]:true,[`${type}`]:true}"
            @click="$emit('click')">
        <g-icon v-if="icon || loading" :name="loading ? 'loading' : icon" :class="loading ? 'loading' : ''"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Icon from './components/icon'

    export default {
        name: 's-button',
        components: {'g-icon': Icon},
        props: {
            icon: String,
            loading: {type: Boolean, default: false},
            iconPosition: {
                type: String,
                default: 'left',
                validator: function (value) { return value != 'left' && value != 'right' ? false : true }
            },
            //按钮类型属性
            type: {type: String, default: ''}
        },
    }
</script>

<style lang="scss" scoped>

    $button-height: 32px;
    $font-size: 14px;
    $button-bg: white;
    $button-active-bg: #eee;
    $button-radius: 4px;
    $color: #333;
    $border-color: #999;
    $border-color-hover: #666;

    @keyframes spin {
        0% { -webkit-transform: rotate(0deg); -moz-transform: rotate(0deg); -ms-transform: rotate(0deg); -o-transform: rotate(0deg); transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); -moz-transform: rotate(360deg); -ms-transform: rotate(360deg); -o-transform: rotate(360deg); transform: rotate(360deg); }
        }

    .g-button {
        font-size: $font-size;
        height: $button-height;
        padding: 0 1.12em;
        border-radius: $button-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        /*这就是经验，下面一句代码解决了三个button不再同一水平线上的css问题*/
        vertical-align: middle;
        cursor: pointer;

        &:hover { border-color: $border-color-hover; }

        &:active { background-color: $button-active-bg; }

        &:focus { outline: none; }

        > .icon { width: 1em; height: 1em; order: 1; margin-right: .3em; }

        > .content { order: 2; }

        &.icon-right {
            > .icon { order: 2; margin-left: .3em; margin-right: 0; }

            > .content { order: 1; }
            }

        &.primary {
            border: none;
            background-color: #0085fa;
            color: white;
            > .icon {color: white;}
            }
        &.dashed{  border: 1px dashed #999; background: white;}
        &.text{border: none;}
        &.link{border: none;color: #0085fa;}

        > .loading { -webkit-animation: spin 3s infinite linear; -o-animation: spin 3s infinite linear; animation: spin 3s infinite linear; }

        }

</style>
