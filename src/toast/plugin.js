import Toast from './toast'

let onOff = false

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, toastProps) {

            let Constructor = Vue.extend(Toast)
            let toast = new Constructor({
                propsData: toastProps
            })
            toast.$slots.default = [message]
            toast.$mount()
            if(onOff){
                toast.$el.remove()
                document.body.appendChild(toast.$el)
            }else{
                document.body.appendChild(toast.$el)
                onOff = true
            }

        }
    }
}