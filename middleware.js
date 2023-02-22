// Es comun en el backend tener que cuando llegue info al backend no baya directamente a lbackend si no que primero pasa por un logger 
// que va a registrar los datos que llegan y estos datos son almacenados en un archivo.
// otro midddleware que podemos implementar es de isAuthenticated que si el usuario no esta logeado, el servidor no le devuelva nada,
// pero si esta logeado le devuelva lo que requiere

const express = require('express')

const app = express()

// Cualquier ruta que llega al backend primero pasa por esta funcion
// next es un parametro que nos sirve para dar continuacion al endpoint, sino el cliente se queda esperando de forma indefinida
app.use((req, res, next) => {
    console.log(`Este es el Logger, la URL de la peticion es: ${req.url} y el metodo: ${req.method}`)
    next()
})

app.use((req, res, next) => {
    if(req.query.auth === 'ejemplo@gmail.com'){
        next()
    }
    else{
        res.send('No Autorizado')
    }
    
})

app.get('/products', (req, res) => {
    res.send('Lista de productos')
})



app.listen(3000)