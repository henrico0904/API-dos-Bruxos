import express from "express";

import dados from "./src/data/dados.js"

const {bruxos, casas, varinhas, animais,pocoes} = dados;

const app = express();
const portServer = 3000;

app.get("/", (req, res) => {
    res.send("Minha API do Potter está ativa")
});

app.get("/bruxos", (req, res) =>{
    if(bruxos.length > 0){
        res.status(200).json(bruxos);
    } else{
        res.status(404).json({
            mensagem: "Nenhum bruxo encontrado"
        })
    }
});


app.get("/casas", (req, res) => {
    if(casas.length > 0){
        res.status(200).json(casas)
    } else{
        res.status(404).json({
            mensagem: "Nenhuma casa encontrada"
        })
    }
});

app.get("/varinhas", (req, res) => {
    if(varinhas.length > 0){
        res.status(200).json(varinhas)
    } else{
        res.status(404).json({
            mensagem: "Nenhuma Varinha encontrada"
        })
    }
});



app.get("/animais", (req, res) => {
    if(animais.length > 0){
        res.status(200).json(animais)
    } else {
        res.status(404).json({
            mensagem: "Nenhum animal encontrado"
        })
    }
});


app.get("/pocoes", (req, res) => {
    if(pocoes.length > 0){
        res.status(200).json(pocoes)
    } else {
        res.status(404).json({
            mensagem: "Nenhuma Poção encontrada"
        })
    }
});






app.listen(3000, () => {
    console.log("API dos Bruxos ta no ar!")
})