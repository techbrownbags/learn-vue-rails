import Vue from 'vue/dist/vue.esm'
import Axios from 'axios/dist/axios.js'

class Form {
    constructor(data) {
        this.original_data = data;
        this.errors = new Errors();
        for( let field in data) {
            this[field] = data[field];
        }
    }
    data(){
        let data = {};
        for ( let property in this.original_data ){
            data[property] = this[property];

        }
        return data;
    }
    reset(){
        this.errors.clear();
        for (let field in this.original_data){
            // BETTER TO SET TO NULL?
            this[field] = '';
        }
    }
    post(url){
        return this.submit('post', url);
    }
    delete(url){
        return this.submit('delete', url);
    }
    submit(request_type, url){
        return new Promise((resolve, reject) => {
            Axios[request_type](url, this.data())

                .then(response => {

                    this.onSuccess(response.data);

                    resolve(response.data);
                })
                .catch( error => {

                    this.onFail(error.response.data);

                    reject(error.response.data);

                });
        });
    }
    onSuccess(data){
        this.reset();
    }
    onFail(errors) {
        this.errors.record(errors)
    }
}
class Errors {
    constructor() {
        this.errors = {};
    }
    get(field){
        if( this.errors[field]) {
            return this.errors[field][0];
        }
    }
    record(errors){
        this.errors = errors;
    }
    clear(field){
        if(field) {
            delete this.errors[field];
        } else {
            this.errors = {};
        }
    }
    has(field){
        return this.errors.hasOwnProperty(field);
    }
    any() {
        return Object.keys(this.errors).length > 0;
    }

}
new Vue({
    el: '#project',
    data : {
        form: new Form({
            name: '',
            description: ''
            })
    },
    methods: {
        onSubmit() {

            this.form.post('projects/new.json')

                    .then(data => {
                        console.log(data)
                        Axios['get']('projects.json')

                            .then(response => {
                                console.log(response);
                                for (let row of response.data){
                                    console.log(row);
                                }
                            })
                            .catch( error => {

                                console.log(error);

                            });

                    })

                    .catch(errors => console.log(errors));
        }
    }
});

