
import Vue from 'vue/dist/vue.esm'

Vue.component('task', {
    template: '<li><slot></slot></li>'
});


document.addEventListener('DOMContentLoaded', () => {

    var app = new Vue({
        el: '#root',

    });
});
