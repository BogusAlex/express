const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.use('/', (req, res) => {
    res.status(404).send('Ingresaste en una pagina que no existe')
})

app.listen(3000)
console.log(`listening on port ${3000}`)