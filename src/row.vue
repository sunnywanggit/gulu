<template>
    <div class="row" :style="rowStyle">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 's-row',
        props: {
            gap: {
                type: [Number, String]
            }
        },
        mounted() {
            console.log(this.$children);
            this.$children.forEach((vm) => {
                vm.gap = this.gap
            })
        },
        computed: {
            rowStyle() {
                let {gap} = this
                return {
                    marginLeft: -gap / 2 + 'px',
                    marginRight: -gap / 2 + 'px'
                }

            }
        }
    }

</script>

<style scoped lang="scss">
    .row {
        display: flex;
    }

</style>