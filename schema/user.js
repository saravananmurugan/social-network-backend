const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: { type: String, length: 20},
    handle: { type: String},
    dob: { type: Date },
    password: { type: String },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    is_active: { type: Boolean }
})

const userModel = mongoose.model('user', userSchema);

module.exports = {
    userModel
}


