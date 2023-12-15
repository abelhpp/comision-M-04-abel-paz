const PostModel = require('../models/PostModel');
const ComentarioModel = require('../models/ComentarioModel')
const PosteosController = {}


// Ver usuarios
PosteosController.verPosts = async (req, res) => {
    try {
        const lista = await PostModel.find().populate('author');
        const posts = await Promise.all(lista.map(async (post) => {
            const comentarios = await ComentarioModel.find({ post: post._id }).select('comentario');
            return {
                _id: post._id,
                title: post.title,
                description: post.description,
                imageURL: post.imageURL,
                state: post.state,
                authorid: post.author._id,
                nombre: post.author.name,
                comentarios: comentarios.map(com => com.comentario)
            };
        }));

        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error.message
        });
    }
};

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
        const {author} = req.body;

        const { title, description, imageURL} = req.body;

        const nuevo = new PostModel({
            title: title,
            description: description,
            imageURL: imageURL,
            author: author,
            state: true,  // Guardar el hash en lugar de la contraseña origina
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

const tpy = [{"_id":"657a5d9fa609f5e317e31240","title":"uno","description":"es el post uno","imageURL":"as.js","state":true,"authorid":"65752e6e98e8a90c71af1811","nombre":"ABEL HUMBERTO"},
{"_id":"657a74bb999f0a4fd459ce39","title":"dos","description":"Descripcion Dos","imageURL":"dos.git","state":true,"authorid":"65752e6e98e8a90c71af1811","nombre":"ABEL HUMBERTO"},
{"_id":"657a7a83999f0a4fd459ce40","title":"tres","description":"descripcion tres","imageURL":"https://docmed.ar/wp-content/uploads/2023/07/DOCMED-IMAGEN-PARALIMPICOS-CARRERA-519-X-370.png","state":true,"authorid":"65752e6e98e8a90c71af1811","nombre":"ABEL HUMBERTO"},
{"_id":"657a7a9b999f0a4fd459ce42","title":"tres","description":"descripcion tres","imageURL":"https://docmed.ar/wp-content/uploads/2023/07/DOCMED-IMAGEN-PARALIMPICOS-CARRERA-519-X-370.png","state":true,"authorid":"65752e6e98e8a90c71af1811","nombre":"ABEL HUMBERTO"}
]

module.exports = PosteosController;
