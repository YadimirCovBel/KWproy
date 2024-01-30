'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar archivos rutas

//middlewares
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
// con app.use(bodyParser.json()); hacemos que toda peticion sera convertida en json


//CORS

//rutas

//exportar
module.exports =app;