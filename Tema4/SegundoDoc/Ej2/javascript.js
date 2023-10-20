"use strict";

function sequence1(vectorFunciones, x) {
    for (let index = 0; index < vectorFunciones.length; index++) {
        x = vectorFunciones[index](x);
    }
    return x;
}

function sequence2(vectorFunciones, x) {
    for (let index = 0; index < vectorFunciones.length; index++) {
        x = vectorFunciones[index](x);
        if (x == undefined) {
            return undefined;
        }
    }
    return x;
}

function sequence3(vectorFunciones, x, right=false) {
    if(right){
        for (let index = vectorFunciones.length-1; index >= 0; index--) {
            x = vectorFunciones[index](x);
            if (x == undefined) {
                return undefined;
            }
        }
    } else {
        for (let index = 0; index < vectorFunciones.length; index++) {
            x = vectorFunciones[index](x);
            if (x == undefined) {
                return undefined;
            }
        }
    }
    return x;
}

function f1(x){
    console.info(`Funcion Numero ${x}`);
    x++;
    return x;
}

function fUndef(x){
    console.info(`Funcion Undef ${x}`);
    return undefined;
}

function fFin(x){
    console.info(`Funcion Fin Numero ${x}`);
    x++;
    return x;
}

var listaFunc1 = [f1, f1, f1, fFin];
var listaFuncYundef = [f1, f1, fUndef, f1];

var result;
console.info("---------------");
//Primera ejecución
result = sequence1(listaFunc1, 1);
console.info(result);
console.info("---------------");
//Segunda ejecución
result = sequence2(listaFunc1, 1);
console.info(result);
result = sequence2(listaFuncYundef, 1);
console.info(result);
console.info("---------------");
//Tercera ejecución
result = sequence3(listaFunc1, 1);
console.info(result);
result = sequence3(listaFunc1, 1, true);
console.info(result);
console.info("---------------");