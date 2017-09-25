
import Vue from 'vue/dist/vue.esm'
Vue.component('task-list', {
    props: ['message'],
    template: `
            <ul>
                <task v-for='task in tasks' >{{ task.name }} - {{ task.complete }}</task>
             </ul>`,
    data() {
        return {
            tasks: [
                {name: 'groceries', complete: true},
                {name: 'gym', complete: false},
                {name: 'bank', complete: false},
            ]
        }
    }
});

Vue.component('task', {
    template: "<li style='color: red;'><slot></slot></li>",
});


document.addEventListener('DOMContentLoaded', () => {

    var app = new Vue({
        el: '#root',

    });
});
