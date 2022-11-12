const express = require("express")
const app = express()
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor ON ${PORT}`)
})
const Contenedor = require('../Desafio2.js')
const contenedor = new Contenedor('../productos.txt')

app.get('/productos', async (req, res) => {
    res.send(await contenedor.getAll())
    
})

app.get('/productoRandom', async (req, res) => {
    res.send(await contenedor.getRandom())
})


server.on('error', (err) => { console.log(` ===>  ERROR: ${err}`) })