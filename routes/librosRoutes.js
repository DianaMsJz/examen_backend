const LibrosController = require('../controllers/librosController');

module.exports = (app) => {
    app.get('/api/libros/getAll', LibrosController.getAll); //crear nueva ruta, cuando el usuario lance una peticion a esta 
                                                          //ruta ejecute el metodo getAll que devuelve todos los libros
    app.post('/api/libros/create', LibrosController.register);

}