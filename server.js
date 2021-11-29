
const express = require('express'); // se requiere el modulo express
const app = express(); // se ejecuta express para inicializar la aplicación
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan'); // sirve para debuggear errores 
const cors = require('cors');

// Aqui se hará la instancia de las rutas
const libros = require('./routes/librosRoutes');


const port = process.env.PORT || 3000; //definición del puerto

app.use(logger('dev')); //usar el logger para desarrollador para debuggear errores
app.use(express.json()); //Para parsear las respuestas recibidas en .json
app.use(express.urlencoded({ //Es un método incorporado en express para reconocer el objeto de solicitud entrante como cadenas o matrices. Este método se llama como middleware
    extended: true
}));
app.use(cors());


app.disable('x-powered-by'); //seguridad

app.set('port', port);

//Llamando a las rutas
libros(app);

server.listen(3000, '192.168.56.1' || 'localhost', function() {
    console.log('Aplicación con NodeJS ' + port + ' Iniciada...')//prueba
});


//MANEJO DE ERRORES
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});

module.exports = {
    app: app,
    server: server
}