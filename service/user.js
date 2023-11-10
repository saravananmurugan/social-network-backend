const mongoose = require( "mongoose" );
const { userModel } = require('../schema/user'); 
const bcrypt = require('bcrypt');

const create = async (data)=>{
    const userExists = await userModel.findOne({handle: data.handle});
    if (userExists){
        return {
            user: true
        }
    }
    const passHash = await bcrypt.hash(data.password, 10);
    const userData = new userModel({
        ...data,
        password: passHash,
        is_active: true
    });
    const response = await userData.save();
    return {
        user: false,
        userId: response._id
    }
}

const getUser = async(userId)=>{
    const ObjectId = mongoose.Types.ObjectId;
    return await userModel.find({_id: new ObjectId(userId)});
}

module.exports = {
    create,
    getUser
}