const { Schema, model } = require('mongoose');

const ComentarioSchema = new Schema({
    comentario: { type: String, maxlength: 500, required: true },
    state: { type: Boolean, default: true },
    post: { type: Schema.Types.ObjectId, ref: 'post', required: true },
    author: { type: Schema.Types.ObjectId, ref: 'usuario', required: true }
});

const ComentarioModel = model('comentario', ComentarioSchema);

module.exports = ComentarioModel;