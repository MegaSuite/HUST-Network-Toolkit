// ==UserScript==
// @name         Click Stimulator
// @namespace    https://github.com/MegaSuite/HUST-Network-Toolkit
// @version      0.1
// @description  stimulate clicking login button in the login page of HUST Network
// @author       Konrad Gerrens
// @match        http://192.168.50.3:8080/*
// @icon         https://github.com/MegaSuite/HUST-Network-Toolkit/blob/main/HUST-logo.png?raw=true
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