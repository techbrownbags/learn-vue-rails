
import Vue from 'vue/dist/vue.esm'

Vue.component('task', {
    props: ['message'],
    template: "<li style='color: red;'>{{ message }}</li>",
});


document.addEventListener('DOMContentLoaded', () => {

    var app = new Vue({
        el: '#root',

    });
});
