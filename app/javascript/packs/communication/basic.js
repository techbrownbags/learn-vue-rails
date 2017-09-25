import Vue from 'vue/dist/vue.esm'

Vue.component('coupon', {
    template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied" >',
    methods: {
        onCouponApplied() {
            this.$emit('applied');
        }
    }
});

new Vue({
    el: '#root',
    data: {
        applied: false
    },
    methods: {
        onCouponApplied() {
            alert('It was applied');
            this.applied = true;
        }
    }
});


// document.addEventListener('DOMContentLoaded', () => {
//
//     var app = new Vue({
//         el: '#root',
//
//     });
// });
