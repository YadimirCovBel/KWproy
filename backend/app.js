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

app.get('/', (req,res)=> {
    res.status(200).send(
        "<h1>Pagina de inicio <h1>"
    );
});

app.post('/test', (req,res)=> {
    console.log(req.params.cliente);

    res.status(200).send({
        message: "hola munedo desde mi API de NodeJS"
    });
});
//req son los datos que puedes estar enviando  desde el cliente o respuestas que haga 
//res es una respuesta que sera enviada

//exportar
module.exports =app;