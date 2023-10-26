const { time } = require("console");
const mysql = require("mysql");

const pool = mysql.createPool({
    host:'localhos',
    user:'root',
    password:'',
    database:"nodejs"
})

function constructor(pool) {
    this.pool = pool
}

function insertarNuevoUsuario(usuario, callback){
    pool.getConnection(function (err, conexion){
        if(err){
            console.log("Error al obtener la conexión");
        } else {
            const sql = "Insert into usuarios (nombre, correo, telefono) values (?, ?, ?)";
            conexion.query(
                sql, 
                [usuario.nombre, usuario.correo, usuario.telefono], 
                function (error){
                    conexion.release();
                    callback(error);
                }
            )
        }
    });
}

function enviarNuevoMensaje(usuOrigen, usuDestino, mensaje, callback){
    pool.getConnection(function (err, conexion){
        if(err){
            console.log("Error al obtener la conexión");
        } else {
            const sql = "Insert into mensajes (idOrigen, idDestino, mensaje, hora, leido) values (?, ?, ?, ?, 0)";
            conexion.query(
                sql, 
                [usuOrigen.id, usuDestino.id, mensaje, new Date], 
                function (error){
                    conexion.release();
                    callback(error);
                }
            )
        }
    });
}

function bandejaEntrada(usuario, callback) {
    pool.getConnection(function (err, conexion){
        if(err){
            console.log("Error al obtener la conexión");
        } else {
            const sql = "select * from mensajes where idDestino = ? and leido = 0";
            conexion.query(
                sql, 
                [usuario.id], 
                function (error, retorno){
                    conexion.release();
                    callback(error, retorno);
                }
            )
        }
    });
}

function buscarUsuario(str, callback){
    pool.getConnection(function (err, conexion){
        if(err){
            console.log("Error al obtener la conexión");
        } else {
            const sql = "select * from usuarios where Contains(nombre, ?)";
            conexion.query(
                sql, 
                [str], 
                function (error, retorno){
                    conexion.release();
                    callback(error, retorno);
                }
            )
        }
    });
}

module.exports({
    constructor: constructor,
    insertarUsuario: insertarNuevoUsuario,
    enviarMensaje: enviarNuevoMensaje,
    bandejaEntrada: bandejaEntrada,
    buscarUsuario: buscarUsuario
})