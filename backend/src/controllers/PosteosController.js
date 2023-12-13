const bcrypt = require('bcrypt');

const PostModel = require('../models/PostModel');
const jwt = require('jsonwebtoken');
const PosteosController = {}

const JWT_KEY = process.env.JWT_KEY;

// Ver usuarios
PosteosController.verPosts = async (req, res) => {
    try {
        const lista = await PostModel.find();
        
        return res.json(lista);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error
        });
    }
}

// Ver usuario
PosteosController.verPost = async (req, res) => {
    try {
        const { id } = req.params;

        const Encontrado = await PostModel.findById(id);

        return res.json(Encontrado);
    } catch (error) {
        let mensaje = 'Ocurrió un error interno al intentar obtener el usuario';

        if (error.kind === 'ObjectId') {
            mensaje = 'No se pudo obtener el Publicacion';
        }

        return res.status(500).json({
            mensaje: mensaje,
            error: error
        });
    }
}


// Crear Nuevo usuario
PosteosController.crearPost = async (req, res) => {
    try {
        const { title, description, imageURL, author} = req.body;


        const nuevo = new UsuarioModel({
            title: title,
            description: description,
            imageURL: imageURL,
            author: author,
            state: true,  // Guardar el hash en lugar de la contraseña origina
        });

        await PostModel.save();

        return res.json({ mensaje: 'Publicacion creado con éxito' });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno al intentar crear la Publicacion',
            error: error.message
        });
    }
}



// Editar usuario
PosteosController.editarPost = async (req, res) => {
    try {
        const { id, nombres, apellidos } = req.body;

        await PostModel.findByIdAndUpdate(
            id,
            { nombres: nombres, apellidos: apellidos }
        );

        return res.json({ mensaje: 'Usuario actualizado con éxito' });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno al intentar editar el usuario',
            error: error
        });
    }
}

// Eliminar usuario
PosteosController.eliminarPost = async (req, res) => {
    try {
        const { id } = req.body;

        await PostModel.findByIdAndUpdate(id, { estate: false });

        return res.json({ mensaje: 'Usuario eliminado con éxito' });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno al intentar eliminar el usuario',
            error: error
        });
    }
};


module.exports = PosteosController;
