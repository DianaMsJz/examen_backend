//Await: espera hasta que se ejecute la consulta para seguir con otra instrucción
const Libro = require('../models/libro'); //Para acceder al modelo libro

module.exports = { //se exporta todo el objeto
    async getAll(req, res, next) { // método asincrono
        try{
            const data = await Libro.getAll(); //en data se retornan todos los libros de la tabla
            console.log(`Libros: ${data}`);
            return res.status(201).json(data); //201 que ha tenido exito y se ha creado un nuevo recurso. 
                                               // Se pasan los datos
        }
        catch (error){
            console.log(`Error: ${error}`);
            return res.status(501).json({
                succes: false,
                message: 'Error al obtener los libros'
            }); // 501 el método no es soportado por el servidor
            
        }
    },

    async register(req, res, next) {
        try {
            const libro = req.body;//se capturan los datos del libro que envía el cliente
            const data = await Libro.create(libro);

            return res.status(201).json({ // respuesta para el cliente
                success: true,
                message: 'El registro se realizo correctamente',
                data: data.id,// se retorna el id
            });
        } 
        catch (error) {
            console.log(`Error: ${error}`);
            return res.status(501).json({
                success: false,
                message: 'Hubo un error con el registro del libro',
                error: error,
            });
        }
    }
}