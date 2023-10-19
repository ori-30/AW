"use strict";

function sequence1(vectorFunciones, x) {
    vectorFunciones.forEach(element => {
        x = element(x);
    });
}

function sequence2(vectorFunciones, x) {
    vectorFunciones.forEach(element => {
        x = element(x);
        if (typeof(x) == "undefined") {
            return undefined;
        }
    });
}

function sequence3(vectorFunciones, x, right=false) {
    if(right){
        for (let index = vectorFunciones.length-1; index >= 0; index--) {
            x = vectorFunciones[index](x);
            if (typeof(x) == "undefined") {
                return undefined;
            }
        }
    } else {
        vectorFunciones.forEach(element => {
            x = element(x);
            if (typeof(x) == "undefined") {
                return undefined;
            }
        });
    }
}