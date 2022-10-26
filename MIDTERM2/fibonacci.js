
/*
    Fibonacci Sequence - Enter a number and have the program
    generate the Fibonacci sequence to that number or to the Nth number.
*/
// This array will keep memory of the previous fibonacci numbers
var memo = {};
function fibonacci() {
    "use strict";
    var number = document.getElementById("num").value;
    var val = f(number);
    document.getElementById("fibonacciLbl").textContent = val;
    //return f;
}

var memo = {};
function fibonacci() {
    "use strict";
    var number = document.getElementById("num").value;
    var val = f(number);
    document.getElementById("fibonacciLbl").textContent = val;
    //return f;
}

function f(number) {

    var value;

    if (memo.hasOwnProperty(number)) {
        value = memo[number];
    } else {
        if (number === 0 || number === 1) {
            value = number;
        } else {
            value = f(number - 1) + f(number - 2);
        }

        memo[number] = value;
    }

    return value;
}
//console.log(fibonacci(15));