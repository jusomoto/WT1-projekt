window.jQuery = require("jquery");
window.Tether = require("tether");
window.$ = window.jQuery;
var shop = require('./functions/shop.js');
//var bootstrap = require('bootstrap');

$(document).ready(function(){
    shop.createShop();
});