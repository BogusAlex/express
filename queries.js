const express = require("express");

const app = express();

// Las queries son una informacion extra que el navegador puede enviar al backend para que pueda utilizar en el backend
// cuando se ingresa a por ejemplo http://localhost:3000/user/alex?suscribe=1 se pasa el valor de suscribe : 1
// esto es lo que le llega al backend { suscribe: '1' }
// para concatenar varias variables lo hacemos con &
// un uso muy comundo de queries es tener por ejemplo http://localhost:3000/user/alex?page=1 es mandar por queries el numero de pagina
// que queremos seleccionar y asi hacer un sistema de navegacion por paginas

app.get("/user/:username", (req, res) => {
  console.log(req.query);
  res.send(`Hello ${req.params.username}`);
});

app.listen(3000);
