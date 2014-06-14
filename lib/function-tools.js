"use strict";

var throttled = false;
var arg = null;
var lastRun = 0;

function throttledPrint(n){
    arg = n;
    if (!throttled){
        printNumber(arg);
        throttled = true;
        setTimeout(function(){
            throttled = false;
            if (arg) throttledPrint(arg);
            arg = null
        }, 1000);
    }
}

function printNumber(n){
    console.log("%s: %s", new Date().toLocaleTimeString(), n);
}

var i = 0;
var interval = setInterval(function(){
    throttledPrint(i++);
    if (i === 1000) clearInterval(interval);
}, 10);
