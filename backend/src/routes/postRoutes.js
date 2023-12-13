const postRouter = require('express').Router();

 const {
    verPosts,
    verPost,
    crearPost,

} = require('../controllers/PosteosController.js');


// Ver usuarios
postRouter.get('/post', verPosts);

// Ver usuario
postRouter.get('/post', verPost);

// Crear usuario
postRouter.post('/post', crearPost);



module.exports = postRouter;