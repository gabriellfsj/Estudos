const porta = 3003

const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('./body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res,next)=>{
    res.send(bancoDeDados.getProdutosls
        ()) // converter para JSON
})

app.get('/produtos/:id', (req, res,next)=>{
    res.send(bancoDeDados.getProduto(req.params.id)) // converter para JSON
})

app.post('/produtos', (req, res, next)=>{
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)//JSON
})

app.listen(porta,()=>{
    console.log(`servidor está e
    xecutando na porta ${porta}`)
})

