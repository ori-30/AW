"use strict";

function producto (x, y){
    let result = "EXCEPCION";
    if(typeof(x) == "number"){
        if (typeof(y) == "object") {
            y.forEach(element => {
                element = element*x;
            });
            result = y
        } else if (typeof(y) == "number"){
            result = x*y;
        }
    } else if (typeof(x) == typeof (y) && typeof(x) == "object" && x.lenght == y.lenght) {
        result = 0;
        for (let index = 0; index < x.length; index++) {
            result += x[index] * y[index];
        }
    }
}