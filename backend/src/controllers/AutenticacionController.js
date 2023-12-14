const jwt = require('jsonwebtoken');
const UsuarioModel = require('./../models/UsuarioModel');
const AutenticacionController = {}

const JWT_KEY = process.env.JWT_KEY;

const usuarios = [
    { id: 1, usuario: 'Lord', contrasenia: '123456' },
    { id: 2, usuario: 'Lady', contrasenia: 'abcdef' },
];

AutenticacionController.autenticar = async(req, res) => {
    try{
        const {email, password} = req.body.usuario;
        // Simular autenticación
        const authToken = await UsuarioModel.findOne({ where: {email, password} })

        if(!authToken) {
            return res.status(403).json({ mensaje: 'El usuario no fue encontrado.' })
        }

        const datos = {
            id: authToken._id,
            email: authToken.email,
            name: authToken.name,
            lastname: authToken.lastname,
            ege: authToken.ege,
        }
        let token = jwt.sign(datos, JWT_KEY);

        res.json({ token: token, datos });
    } catch (error){
        return res.status(500).json({mensaje: 'Se produjo un error INTERNO'})
    }
}

AutenticacionController.registrar = (req, res) => {
    // Simular regitro...
}

AutenticacionController.verificarToken = (req, res) => {
    const token = req.body.token;

    try {
        let desencriptado = jwt.verify(token, JWT_KEY);

        res.status(200).json({ datos: desencriptado });
    } catch (error) {
        res.status(500).json({
            mensaje: 'Se ha generado un error',
            error: error,
        });
    }
}


module.exports = AutenticacionController;