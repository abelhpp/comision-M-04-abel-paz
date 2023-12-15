const comentarioRoutes = require('express').Router();

 const {
    verCommits,
    verCommit,
    crearCommit,

} = require('../controllers/ComentarioController');


// Ver usuarios
comentarioRoutes.get('/comments', verCommits);

// Ver usuario
comentarioRoutes.get('/comment', verCommit);

// Crear usuario
comentarioRoutes.post('/comment', crearCommit);



module.exports = comentarioRoutes;