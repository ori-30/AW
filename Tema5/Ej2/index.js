const DAO = require("./dao");
const daoMensajeria = new DAO("localhost", "root", "", "mensajeria");
// Creación de usuarios
let usuario1 = { 
    nombre: "marco",
    correo: "mpolo@gc.c",
    telefono: "666666667"
};
let usuario2 = {
    nombre: "marco",
    correo: "mpolo@gc.c",
    telefono: "666666667"
};
// Definición de las funciones callback
// LLamadas a los métodos de DAO para insertar usuarios, enviar mensajes, etc