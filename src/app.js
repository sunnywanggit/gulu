import Vue from 'vue'
import Button from './button'
import Icon from './components/icon'
import buttonGroup from './button-group.vue'
import Input from './input.vue'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', buttonGroup)
Vue.component('s-input', Input)
new Vue({
    el: '#app',
    data: {
        loading1: false
    },
    methods:{
        inputChange (e) {
            console.log(e.target.value);
        },
        onInput(e){
            console.log(e);
        }
    }
})






















