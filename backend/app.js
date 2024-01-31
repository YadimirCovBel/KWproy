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

app.post('/test/:id', (req,res)=> {
    console.log(req.body.Nombre);
    //request.body: Contiene los parámetros que le pasemos por el cuerpo de la petición.
    console.log(req.query.web);
    //request.query: Contiene los parámetros que le pasemos por la URL desde desde NodeJS.
    console.log(req.params.id);
    //request.params: Contiene los parámetros que le pasemos por la URL.


    res.status(200).send({
        message: "hola munedo desde mi API de NodeJS"
    });
});
//req son los datos que puedes estar enviando  desde el cliente o respuestas que haga 
//res es una respuesta que sera enviada

//exportar
module.exports =app;