<template>
    <div>
        <button @click="showToast1">向上弹出</button>
    </div>
</template>
<script>
    import Toast from '../../../src/toast/toast.vue'
    export default {
        components:{
            's-toast':Toast
        },
        methods:{
            showToast1(){
                this.showToast('top')
            },
            showToast2(){
                this.showToast('middle')
            },
            showToast3(){
                this.showToast('bottom')
            },
            showToast(site) {
                this.$toast(
                    `${Math.random()*100}`,
                    {
                        closeButton: {
                            text: '知道了',
                            callback() {
                                console.log('用户说他知道了');
                            }
                        },
                        position:site
                    }
                )
            }
        }
    }
</script>
