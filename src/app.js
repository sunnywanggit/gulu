import Vue from 'vue'
import Button from './button'
import Icon from './components/icon'
import buttonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row'
import Col from './col'
import Layout from './layout/layout'
import Header from './layout/header'
import Content from './layout/content'
import Footer from './layout/footer'
import Sider from './layout/sider'
import Toast from './toast/toast'
import Plugin from './toast/plugin'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', buttonGroup)
Vue.component('s-input', Input)
Vue.component('s-row', Row)
Vue.component('s-col', Col)
Vue.component('s-layout', Layout)
Vue.component('s-header', Header)
Vue.component('s-content', Content)
Vue.component('s-footer', Footer)
Vue.component('s-sider', Sider)
Vue.component('s-toast', Toast)

Vue.use(Plugin)

new Vue({
    el: '#app',
    data: {
        loading1: false,
        message: 'h1'
    },
    created() {

    },
    methods: {
        showToast() {
            this.$toast(
                `${Math.random()*100}`,
                {
                    closeButton: {
                        text: '知道了',
                        callback() {
                            console.log('用户说他知道了');
                        }
                    },
                    position:'bottom'
                }
            )
        }
    }
})






















