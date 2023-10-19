"use strict";

let frase = "esternocleidomastoideo es una de las palabras que puede asustar a alguien que sufra de hipopotomonstrosesquipedaliofobia, que es gente a la que le dan pánico las palabras largas"

let letra = "e";
let contador = 0;

for (let index = 0; index < frase.length; index++) {
    if (frase[index] === letra) {
        contador++;
    }
}

console.info(`la letra ${letra} aparece ${contador} vez/veces`);