window.jQuery = require("jquery");
window.Tether = require("tether");
var bootstrap = require('bootstrap');
var shop = require('./functions/shop.js');
window.$ = window.jQuery;

$(document).ready(function(){
    shop.createShop();
});