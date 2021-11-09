const express = require('express');
const moment = require('moment')
const app = express();

const PORT = 8080

const Contenedor = require('./ClassContenedor');

const contenedor = new Contenedor();

const server = app.listen(PORT, () => {
    console.log(`Server escuchando en ${server.address().port}`)
})

server.on('error', (error) => console.log(`Error en el servidor: ${error}`))

app.get('/', (req, res) => {
    res.send('<h1 style="color: blue">Bienvenidos al servidor express de Stefi</h1>')
})

app.get('/productos', (req, res) => {
    res.send(contenedor.getAll());
})

app.get('/fyh', (req, res) => {
    let fechaYHora = moment().format('DD/M/YYYY hh:mm:ss')
    res.send({fyh: fechaYHora});
})