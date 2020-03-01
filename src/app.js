import Vue from 'vue'
import Button from './button'
import Icon from './components/icon'
import buttonGroup from './button-group.vue'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', buttonGroup)
new Vue({
    el: '#app',
    data: {
        loading1: false
    }
})

import chai from 'chai'

const expect = chai.expect

import spies from 'chai-spies'

chai.use(spies)

//测试 settings
{
    //创建构造函数构造测试用例
    const Constructor = Vue.extend(Button)
    //创建测试用例
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    vm.$mount('#test')
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings')
}

//测试loading
{
    //创建构造函数构造测试用例
    const Constructor = Vue.extend(Button)
    //创建测试用例
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
}
//测试order
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    //创建构造函数构造测试用例
    const Constructor = Vue.extend(Button)
    //创建测试用例
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    // 断言完之后清楚内存
    vm.$el.remove()
    vm.$destroy()
}
//测试order
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    //创建构造函数构造测试用例
    const Constructor = Vue.extend(Button)
    //创建测试用例
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()

}
//测试click
{
    //创建构造函数构造测试用例
    const Constructor = Vue.extend(Button)
    //创建测试用例
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
        }
    })
    vm.$mount()
    let spy = chai.spy(function () {})
    vm.$on('click',spy )
    let button = vm.$el
    button.click()
    //这就叫做函数 mock
    expect(spy).to.have.been.called()

}
























