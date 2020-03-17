
const expect = chai.expect;
import Vue from 'vue'
import Toast from "../src/toast/toast";

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.be.ok
    })

    describe('props', () => {
        const Constructor = Vue.extend(Toast)
        let vm

        afterEach(() => {
            vm.$destroy()

        })

        it('接受aotuClose', (done) => {
            let div = document.createElement('div')
            document.body.appendChild(div)
            vm = new Constructor({
                autoClose:true,
                autoCloseDelay: 1000
            }).$mount(div)
            setTimeout(()=>{
                expect(document.body.contains(vm.$el)).to.eq(false)
            },1500)
            done()
        })
    })

    describe('测试事件', () => {
        const Constructor = Vue.extend(Input)
        let vm

        afterEach(() => {
            vm.$destroy()
        })

        it('支持change/input/focus/blur事件', () => {
            ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
                vm = new Constructor({}).$mount()
                const callback = sinon.fake()
                vm.$on(eventName, callback)
                let event = new Event(eventName)
                Object.defineProperty(
                    event,
                    'target',
                    {
                        value:{value:'hi'},
                        enumerable:true
                    }
                )
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith('hi')
            })
        })
    })

})