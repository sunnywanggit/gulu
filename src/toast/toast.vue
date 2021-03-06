<template>
    <div :class="[`wrapper`,`${position}`]">
        <div :class="[`toast`]" ref="toast" >
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
            <span v-if="closeButton" class="close" @click="onClickClose" ref="line">{{closeButton.text}}</span>
        </div>
    </div>
</template>
<script>


    export default {
        name: 's-toast',
        props: {
            autoClose: { type: Boolean, default: true },
            autoCloseDelay: { type: Number, default: 10 },
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
            enableHtml: { type: Boolean, default: false },
            position: {
                type: String,
                default: 'top',
                validator: function (value) { return ['top', 'bottom', 'middle'].indexOf(value) !== -1 }
            }
        }
        ,
        mounted() {
            this.execAutoClose()
            this.updateStyles()
        }
        ,
        methods: {
            updateStyles() {
                this.$nextTick(() => {
                    //一般来说JS得出的结果和你预想的结果不一样，一般都是异步的问题
                    this.$refs.line.style.height = this.$refs.toast.getBoundingClientRect().height + 'px'
                })
            }
            ,
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoCloseDelay * 1000)
                }
            }
            ,
            close() {
                this.$el.remove()
                this.$destroy()
            }
            ,
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
    @keyframes fade-up{ 0% { opacity: 0; transform:translateY(100%); } 100%{ opacity: 1; transform:translateY(0%); } }
    @keyframes fade-down{ 0% { opacity: 0; transform:translateY(-100%); } 100%{ opacity: 1; transform:translateY(0%); } }
    @keyframes fade-out{ 0% { opacity: 0; } 100%{ opacity: 1; } }
    .wrapper{
        position: fixed;
        left: 50%;
        transform: translateX(-50%);

        &.bottom {
            bottom: 0;
            border-radius: 0;
            .toast{
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                animation:fade-up 1s;
            }
        }
        &.top {
            top: 0;
            .toast{
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                -webkit-animation: fade-down 1s;
                -o-animation: fade-down 1s;
                animation: fade-down 1s;
            }
        }

        &.middle {
            top: 50%;
            transform: translateY(-50%) translateX(-50%);
            .toast{
                -webkit-animation: fade-out .5s;
                -o-animation: fade-out .5s;
                animation: fade-out .5s;
            }
        }
    }

    .toast {
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

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
</style>
