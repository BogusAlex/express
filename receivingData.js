const { json, urlencoded } = require('express')
const express = require('express')

const app = express()

// Se deben poner antes de la peticion
// En los headers nos sale el tipo de datos que se esta enviando
// para obtener datos de tipo texto
app.use(express.text())
// Para obtener datos de tipo json
app.use(express.json())
// entender para que express entienda los datos de formulario
app.use(urlencoded({extended: false}))

app.post('/user', (req, res) => {
    console.log(req.body)
    res.send('Nuevo usuario creado')
})

app.post('/product', (req, res) => {
    console.log(req.body)
    res.send('Nuevo usuario creado')
})


// params
app.get('/user/:username', (req, res) => {
    console.log(req.params.username)
    res.send(`Hello ${params.username}`)
})

app.listen(3000)