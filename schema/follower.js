const mongoose = require('mongoose');


const followerSchema = new mongoose.Schema({
    user_id: { type: String},
    follower_id: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    is_active: { type: Boolean }
})

const followerModel = mongoose.model('user', followerSchema);

module.exports = {
    followerModel
}


