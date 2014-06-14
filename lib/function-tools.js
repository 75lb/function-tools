"use strict";

/**
Useful higher-order functions
@module 
@alias f
*/
exports.throttle = throttle;

/**
Guarantees a function a specified `restPeriod` in between invocations. 
@param {Function} - the function to throttle
@param {Object} - options
@returns {Function}
@alias module:function-tools.throttle
*/
function throttle(f, options){
    var timer = null;
    var lastRun = 0;
    
    return function throttled(){
        clearTimeout(timer);
        var fArgs = arguments;
        var timeSinceLastRun = Date.now() - lastRun;
        if (timeSinceLastRun > options.restPeriod){
            f.apply(f, fArgs);
            lastRun = Date.now();
        } else {
            timer = setTimeout(function(){
                f.apply(f, fArgs);
                lastRun = Date.now();
            }, options.restPeriod - timeSinceLastRun);
        }
    }
}
