<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        mounted() {
            //为了防止用户在 g-button 的外层再嵌套其他元素所进行的判断
            for (let node of this.$el.children) {
                let name = node.nodeName.toLowerCase()
                if (name !== 'button') {
                    console.warn(`g-button-group 的子元素应该全是 g-button,但是你写的是${name}`)
                }
            }
        }
    }

</script>

<style lang="scss" scoped>
    .g-button-group {
        display: inline-flex;
        vertical-align: middle;

        > .g-button {
            border-radius: 0;

            &:not(:first-child) {
                margin-left: -1px;
            }

            &:first-child {
                border-top-left-radius: var(--button-radius);
                border-bottom-left-radius: var(--button-radius);
            }

            &:last-child {
                border-top-right-radius: var(--button-radius);
                border-bottom-right-radius: var(--button-radius);
            }

            &:hover {
                position: relative;
                z-index: 1;
            }

        }
    }


</style>
