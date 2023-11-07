const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    title: { type: String},
    body: { type: String},
    user_id: { type: String},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    is_active: { type: Boolean }
})

const postModel = mongoose.model('post', postSchema);

module.exports = {
    postModel
}


