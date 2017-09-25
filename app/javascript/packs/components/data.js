
import Vue from 'vue/dist/vue.esm'

Vue.component('task', {
    template: '<li>{{ message }}</li>',
    data: function () {
        return { message: 'FOO BAR' }
    }
});


document.addEventListener('DOMContentLoaded', () => {

    var app = new Vue({
        el: '#root',

    });
});
