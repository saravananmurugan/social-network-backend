const { postModel } = require('../schema/post'); 
const { getUser } = require('./user');

const create = async (data)=>{
    const userData = await getUser(data.userId);
    if(userData.length <= 0){
        return {
            userNotExists: true
        }
    }
    const postData = new postModel({
        ...data,
        is_active: true
    })
    const resonse = await postData.save();
    return {
        postId: resonse._id
    }
}

const list = async (userId)=>{
    const response = await postModel.find({userId: userId, is_active: true},{}, {created_at: -1});
    return response;
}

module.exports = {
    create,
    list
}