const { Schema, model } = require('mongoose');

const ComentarioSchema = new Schema({
    comentario: { type: String, maxlength: 500, required: true },
    post: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
    author: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true }
});

const ComentarioModel = model('comentario', ComentarioSchema);

module.exports = ComentarioModel;