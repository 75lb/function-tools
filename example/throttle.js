var f = require("../");

/* testFunc should be called maximum every 100ms */
var lastRun = Date.now();
function testFunc(n){
    console.log("%d: %d", n, Date.now() - lastRun);
    lastRun = Date.now();
}

var throttled = f.throttle(testFunc, { restPeriod: 100 });

/* call the throttled testFunc 20 times */
var i = 0;
var interval = setInterval(function(){
    throttled(++i);
    if (i === 20) clearInterval(interval);
}, 10);
