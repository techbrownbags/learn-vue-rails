import Vue from 'vue/dist/vue.esm'
import Axios from 'axios/dist/axios.js'

new Vue({
    el: '#root',
    data : { skills: []},
    mounted() {
        // make ajax call to get skills - /axios/basic

        // polyfill?
        // JQUERY $.getJson()
        // AXIOS
        Axios.get('/axios/skills').then(response => this.skills = response.data);

    }
});


// document.addEventListener('DOMContentLoaded', () => {
//
//     var app = new Vue({
//         el: '#root',
//
//     });
// });
