const express = require('express');
const app = express();
const petRotas = require('./routes/pet');

app.use(petRotas); //aqui é para falar quais as rotas que o app vai usar

app.listen(3000, () =>{
    console.log("Olá");
})

