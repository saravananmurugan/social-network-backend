const { followerModel } = require('../schema/follower');


const createFollower = async({userId, followerId})=>{
    const response = new followerModel({
        user_id: userId,
        follower_id: followerId
    })
    return response;
}

module.exports = {
    createFollower
}