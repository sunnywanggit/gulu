import  Vue from 'vue'
import  Button from './button'
import  Icon from './components/icon'
import buttonGroup from './button-group.vue'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',buttonGroup)
new Vue({
    el:'#app',
    data:{
        loading1:false
    }


})
