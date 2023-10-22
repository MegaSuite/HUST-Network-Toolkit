// ==UserScript==
// @name         Click Stimulator
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  stimulate clicking login button in the login page of HUST Network
// @author       Konrad Gerrens
// @match        http://192.168.50.3:8080/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=csdn.net
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    function clickAna(){
    let button = document.getElementById("loginLink");
    button.click()
    }

    setTimeout(clickAna,1000);
})();