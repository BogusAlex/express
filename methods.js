const express = require('express')

const app = express()

// all significa que este endpoint sirve con cualquier metodo
app.all('/list', (req, res) => {
    res.send('Lista')
})


app.get('/products', (req, res) => {
    res.sendFile('./assets/image.png', {
        root: __dirname
    })
})

app.get('/users', (req, res) => {
    res.json({
        name: "alex",
        lastname: "bogus",
    })
})

app.post('/products', (req, res) => {
    res.send('Creando productos')
})

app.put('/products', (req, res) => {
    res.send('Actualizando datos de producto')
})

app.patch('/products', (req, res) => {
    res.send('Actualizando una parte de los datos del producto')
})


app.listen(3000)