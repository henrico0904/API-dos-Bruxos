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
app.get("/bruxos/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const bruxo = bruxos.find(b => b.id === id);

    if(bruxo){
        res.status(200).json(bruxo)
    } else{
        res.status(404).json({
            mensagem: "Nenhum Bruxo encontrado"
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
app.get("/casas/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const casa = casas.find(c => c.id === id);

    if(casa){
        res.status(200).json(casa)
    } else{
        res.status(404).json({
            mensagem: "Nenhuma Casa encontrada"
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
app.get("/varinhas/:id", (req, res) => {
        const id = parseInt(req.params.id);
    
        const varinha = varinhas.find(v => v.id === id);
    
        if(varinha){
            res.status(200).json(varinha)
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
app.get("/animais/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const animal = animais.find(a => a.id === id);

    if(animal){
        res.status(200).json(animal)
    } else{
        res.status(404).json({
            mensagem: "Nenhuma Animal encontrado"
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
app.get("/pocoes/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const pocao = pocoes.find(p => p.id === id);

    if(pocao){
        res.status(200).json(pocao)
    } else{
        res.status(404).json({
            mensagem: "Nenhuma Varinha encontrada"
        })
    }
});


app.listen(3000, () => {
    console.log("API dos Bruxos ta no ar!")
})