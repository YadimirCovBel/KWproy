'use strict'

var controller = {
    home: function(req,res){
        return res.status(200).send({
            message:'soy home'
        });
    },

    test: function(req,res){
        returnres.status(200).send({
            message:'soy el test dentro del controlador project'
        });

    }
};

module.exports = controller;