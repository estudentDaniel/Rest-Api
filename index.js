const mongoose = require('mongoose');
const express = require('express');
const router = require('./router/router')
const server = express();

server.use('/',router);

server.listen(3000, ()=>{
    console.log("Server is running on port 3000!");
});

mongoose.connect("mongodb://127.0.0.1:27017/cadastro").then(
    ()=>{console.log("MongoDB connected"); }
).catch(err=>{console.log(err+ "Erro ao conectar ")})