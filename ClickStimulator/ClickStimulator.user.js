// ==UserScript==
// @name         Click Stimulator
// @namespace    https://github.com/MegaSuite/HUST-Network-Toolkit
// @version      0.2
// @description  stimulate clicking login button in the login page of HUST Network
// @author       Konrad Gerrens
// @match        http://192.168.50.3:8080/*
// @icon         https://raw.githubusercontent.com/MegaSuite/HUST-Network-Toolkit/main/ClickStimulator/HUST-logo.png
// ==/UserScript==

(function(){
    'use strict';
    function clickAna()
    {
        let button = document.getElementById("loginLink");
        button.click()
    }

    function closeWindow()
    {
        let userAgent = navigator.userAgent
        if (userAgent.indexOf('Firefox') !== -1 || userAgent.indexOf('Chrome') !== -1)
        {
            window.location.replace('about:blank')
        }
        else
        {
            window.opener = null
            window.open('', '_self')
        }
        window.close()
    }

    setTimeout(clickAna,1500);
    setTimeout(closeWindow,3000);
})();
