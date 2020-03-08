<template>
    <div class="toast" ref="toast">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
        <span v-if="closeButton" class="close" @click="onClickClose" ref="line">{{closeButton.text}}</span>
    </div>
</template>
<script>


    export default {
        name: 's-toast',
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 500
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        text: '关闭',
                        callback: (toast) => {
                            toast.close()
                        }
                    }
                }

            },
            enableHtml: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            this.execAutoClose()
            this.updateStyles()
        },
        methods: {
            updateStyles() {
                this.$nextTick(() => {
                    //一般来说JS得出的结果和你预想的结果不一样，一般都是异步的问题
                    this.$refs.line.style.height = this.$refs.toast.getBoundingClientRect().height + 'px'
                })
            },
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoCloseDelay * 1000)
                }
            },
            close() {
                this.$el.remove()
                this.$destroy()
            },
            onClickClose() {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback()
                }

            }
        }
    }

</script>

<style scoped lang="scss">
    .toast {
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        font-style: 14px;
        text-align: center;
        display: flex;
        align-items: center;
        border-radius: 4px;
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
        background: rgba(0, 0, 0, 0.75);
        color: white;
        padding: 4px 16px;


        .close {
            height: 100%;
            line-height: 100%;
            display: block;
            padding-left: 8px;
            border-left: 1px solid #666;
            margin-left: 8px;
            display: flex;
            flex-shrink: 0;
            align-items: center;
        }
    }


</style>