const ComentarioModel = require('../models/ComentarioModel');
const PostModel = require('../models/PostModel');
const ComentarioController = {}


// Ver usuarios
ComentarioController.verCommits = async (req, res) => {
    console.log("author");
    try {
        const lista = await ComentarioModel.find().populate('author');

        const posts = lista.map(post => ({
            _id: post._id,
            title: post.title,
            description: post.description,
            imageURL: post.imageURL,
            state: post.state,
            authorid: post.author._id,
            nombre: post.author.name
                
        }));
        
        return res.status(200).json({posts: "hola"});
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error.message
        });
    }
};

// Ver usuario
ComentarioController.verCommit = async (req, res) => {
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
ComentarioController.crearCommit = async (req, res) => {
    console.log("author");
    try {
        const {author}= req.body;
        const {post}= req.body;
        const {comentario} = req.body;
        
        const nuevo = new ComentarioModel({
            comentario: comentario,
            author: author,
            post: post,
            state: true,
        });

        await nuevo.save();
        return res.status(200).json({ mensaje: 'Publicacion creado con éxito' });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno al intentar crear la Publicacion',
            error: error.message
        });
    }
}



// Editar usuario
ComentarioController.editarCommit = async (req, res) => {
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
ComentarioController.eliminarCommit = async (req, res) => {
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


module.exports = ComentarioController;