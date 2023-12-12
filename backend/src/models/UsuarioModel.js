const { Schema, model } = require('mongoose');


const UsuarioSchema = new Schema({
    //Validar
    email: { type: String, required: true },
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    age: { type: Number, required: true },
    password: { type: String, required: true },
    state: { type: Boolean, default: true }
});

const UsuarioModel = model('usuario', UsuarioSchema);

module.exports = UsuarioModel;
