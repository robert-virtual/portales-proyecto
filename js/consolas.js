import { solicitarDatos } from "./funciones.js";

solicitarDatos("https://gamestop-api.herokuapp.com/consolas");
/*
    api = servicio web
    permite cominuicarse con una base de datos
    o informacion en un servidor web
*/

/**
 las imagenes las estamos consultando de un servicio web
 el servicio es  una api
 la api retorna un lista de objetos cada objeto tiene 
    - una imagen 
    - titlulo
    - precio

    y las insertamos en el documento a traves de js
    
 */
