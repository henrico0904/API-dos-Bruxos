import express from "express";
import bruxos from "./src/data/bruxos";

const app = express();
const portServer = 3000;

app.get("/", (req, res) => {
    res.send("Minha API do Potter está ativa")
});

app.get("/bruxos", (req, res) =>{
    res.json(bruxos)
})

app.listen(3000, () => {
    console.log("API dos Bruxos ta no ar!")
})