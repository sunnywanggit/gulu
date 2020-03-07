const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row.vue'
import Col from '../src/col.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.be.ok
        expect(Col).to.be.ok
    })

    describe('props', () => {
        const Constructor = Vue.extend(Row)
        let vm

        afterEach(() => {
            vm.$destroy()

        })
        //如果你这里不加done，我默认你的代码全部都是同步的,我不会去等你执行异步的代码
        it('接受gap属性', (done) => {
            Vue.component('s-row', Row)
            Vue.component('s-col', Col)

            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `
                <s-row gap="20">
                    <s-col span="20"></s-col>
                    <s-col span="20"></s-col>
                </s-row>
            `

            const vm = new Vue({
                el:div
            })

            setTimeout(()=>{
                // const row = vm.$el.querySelector('.row')
                // expect(getComputedStyle(row).marginLeft).to.eq('-10px')
                // expect(getComputedStyle(row).marginRight).to.eq('-10px')

                const cols = vm.$el.querySelectorAll('.col')
                expect(getComputedStyle(cols[0]).marginRight).to.eq('10px')
                done()
                vm.$el.remove()
                vm.$destroy()
            },0)
        })

        it('接受align属性',()=>{
            const div = document.createElement('div')
            document.appendChild(div)
            const Constructor = Vue.extend(Row)
            const vm = new Constructor({
                propsData:{
                    align:'center'
                }
            })
            const element = vm.$el
            expect(getComputedStyle(element).justifyContent).to.eq('center')
            div.remove()
        })
    })

})