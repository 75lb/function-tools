"use strict";

function throttle(f, options){
    var resting = false;
    var args = null;
    var y = 0
    var lastRun = 0;

    return function throttled(){
        args = arguments;
        // console.log("%s: run %d, n=%d", resting, ++y, args[0]);
        if (!resting){
            var timeSinceLastRun = Date.now() - lastRun;
            if (timeSinceLastRun > options.interval){
                f.apply(this, args);
                lastRun = Date.now();
            } else {
                f.apply(this, args);
                lastRun = Date.now();
                resting = true;
                setTimeout(function(){
                    resting = false;
                    if (args) throttled.apply(null, args);
                    args = null
                }, options.interval || 1000);
            }
        }
    }
    
}

function printNumber(n){
    console.log("%s: %s", new Date().toLocaleTimeString(), n);
}

var throttledPrint = throttle(printNumber, { interval: 500 });


var i = 0;
var interval = setInterval(function(){
    throttledPrint(++i);
    if (i === 27) clearInterval(interval);
}, 100);
