var test = require("tape");
var f = require("../");

test("first", function(t){
    t.plan(4);
    function testFunc(){
        t.pass();
    }

    var throttled = f.throttle(testFunc, { restPeriod: 100 });

    var i = 0;
    var interval = setInterval(function(){
        throttled();
        i++;
        if (i === 20) clearInterval(interval);
    }, 10);
    
});
