'use strict';

document.addEventListener('DOMContentLoaded', function loaded() {
    const counter = {
        days: 864e5,

        forty: 18823248e5,

        element: function element(name) {
            return document.querySelector(name);
        },

        getDays: function getDays() {
            return Math.ceil((this.forty - this.getToday()) / this.days);
        },

        getToday: function getToday() {
            return (new Date()).getTime();
        }
    };

    counter.element('.days-count').innerHTML = counter.getDays();
});
