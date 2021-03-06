/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you set extractStyles to true
// in config/webpack/loaders/vue.js) to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

// import Vue from 'vue'
// import App from './app.vue'
// document.addEventListener('DOMContentLoaded', () => {
//   document.body.appendChild(document.createElement('hello'))
//   const app = new Vue(App).$mount('hello')
//
//   console.log(app)
// })
//

// The above code uses Vue without the compiler, which means you cannot
// use Vue to target elements in your existing html templates. You would
// need to always use single file components.
// To be able to target elements in your existing html/erb templates,
// comment out the above code and uncomment the below
// Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// Then add this markup to your html template:
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>


import Vue from 'vue/dist/vue.esm'

document.addEventListener('DOMContentLoaded', () => {
    var app = new Vue({
        el: '#root',
        data: {
            message: 'Hello yall',
            tasks: [
                {description: 'groceries', completed: false},
                {description: 'archery', completed: true},
                {description: 'yoga', completed: false}
            ]
        },
        methods: {
            mark_completed(task) {
                task.completed = true;
            },
            mark_incomplete(task) {
                task.completed = false;
            }
        },
        computed: {
            reverse_message() {
                return this.message.split('').reverse().join('')
            },
            incomplete_tasks() {
                return this.tasks.filter(task => ! task.completed )
            },
            completed_tasks() {
                return this.tasks.filter(task => task.completed == true )
            }
        }

    });
})
