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
            this.$children.forEach((child)=>{
                if(child._vnode.data.staticClass === 'sider'){
                    this.sider = 'sider'
                }
            })
        }

    }
</script>
<style scoped lang="scss">
    .layout { display: flex;  border: 1px solid red; flex-grow: 1;
        flex-direction: column;
    
        &.sider{
            flex-direction: row;
        }
    }
</style>