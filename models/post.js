const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postShema = new Schema({
    text: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },

}, {timestamps: true});

const Post = mongoose.model('Post', postShema);

module.exports = Post;