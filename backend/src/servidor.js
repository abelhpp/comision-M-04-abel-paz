require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors')
//const { database } = require('./config/SequelizeConfig.js');
const conectarMongo = require('./config/MongooseConfig.js');

const usuarioRouter = require('./routes/usuarioRoutes.js');
const autenticacionRouter = require('./routes/autenticacionRoutes.js');
const postRouter = require('./routes/postRoutes.js');
const comentarioRoutes = require('./routes/comentarioRoutes.js')
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload());

// Rutas
app.use(usuarioRouter);
app.use(autenticacionRouter);
app.use(postRouter);
app.use(comentarioRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    //database();
    conectarMongo();
});
