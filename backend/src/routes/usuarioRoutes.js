const usuarioRouter = require('express').Router();

 const {
    verUsuarios,
    verUsuario,
    crearUsuario,
    editarUsuario,
    eliminarUsuario,
    iniciarSesion,
} = require('./../controllers/UsuariosController.js');


// Ver usuarios
usuarioRouter.get('/usuarios', verUsuarios);

// Ver usuario
usuarioRouter.get('/usuario', verUsuario);

// Crear usuario
usuarioRouter.post('/usuario', crearUsuario);

// Login
usuarioRouter.post('/login', iniciarSesion);

// Editar usuario
usuarioRouter.put('/usuario', editarUsuario);

// Eliminar usuario
usuarioRouter.delete('/usuario', eliminarUsuario);


module.exports = usuarioRouter;