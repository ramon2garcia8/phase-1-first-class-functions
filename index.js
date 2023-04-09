function receivesAFunction(callBackFuncion) {
    return callBackFuncion() + " I am cool!";
}

function returnsANamedFunction () {
    return function namedFunction () {
        console.log("Returned named function");
    };
} 

function returnsAnAnonymousFunction() { 
    return function () {
        console.log("Returned anonymous function");
    };
}