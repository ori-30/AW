"use strict";

let a = 4;
let b = 7;
let c = 1;
/*
Mio

if(a > b){
    //A>B
    if(a>c){
        //A>B y C
        if(b>c){
            //A>B>C
            console.info("")
        } else{
            //A>C>B
        }
    } else{
        //C>A>B
    }
} else if (a>c){
    //B>A>C
} else{
    //B y C > A
    if (b>c) {
        //B>C>A
    } else{
        //C>B>A
    }
}

*/

//Del profe
if(a > b && a > c) console.log(`El mayor de ${a}, ${b} y ${c} es ${a}`);
else if(b > a && b > c) console.log(`El mayor de ${a}, ${b} y ${c} es ${b}`);
else if(c > a && c > b) console.log(`El mayor de ${a}, ${b} y ${c} es ${c}`);