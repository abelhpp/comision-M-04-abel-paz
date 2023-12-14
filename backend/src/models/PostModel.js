const { Schema, model} = require('mongoose');

const PostSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, maxlength: 500, required: true },
    imageURL: { type: String, maxlength: 255, required: true },
    state: { type: Boolean, default: true },
    author: { type: Schema.Types.ObjectId, ref: 'usuario', required: true }
});

const PostModel = model('post', PostSchema);

module.exports = PostModel;