<template>
    <div :class="[`layout`,`${sider ? sider : ''}`]">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                sider:undefined
            }
        },
        mounted() {
            console.log('mounted');
            this.$children.forEach((child)=>{
                if(child.$options._componentTag === 's-sider'){
                    this.sider = 'sider'
                    console.log(child._vnode.data.staticClass);
                }
            })
        }

    }
</script>
<style scoped lang="scss">
    .layout {
        display: flex;
        border: 1px solid red;
        flex-grow: 1;
        flex-direction: column;
        &.sider{
            flex-direction: row;
        }
    }
</style>