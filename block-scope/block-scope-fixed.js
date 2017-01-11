var x = 2;
var fns = [];

(function(){
    let x = 5;

    for (let i=0; i<x; i++) {
        fns[i] = function () {
            return i;
        };
    }
})();

console.log(
    (x * 2) === fns[x*2]()
);
// true