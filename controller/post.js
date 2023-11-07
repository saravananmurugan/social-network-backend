const { create, list } = require('../service/post');


const createPost = async (req, res, next) =>{
    try {
        const { title, body, userId } = req.body;
        if(!title || !body || !userId){
            return res.status(400).json({ message: 'invalid request'});
        }
        if(title.length > 20){
            return res.status(400).json({ message: 'title should be less than 20 character'});
        }
        if(body.length > 300){
            return res.status(400).json({ message: 'body should be less than 300 character'});
        }
        const { postId, userNotExists } = await create({title, body, userId})
        if(userNotExists) return res.status(400).json({ message: 'Invalid user id'});
        
        return res.status(200).json({ message: 'post created sucessfully', postId});
    } catch (error) {
        next(error);
    }
}

const getPosts = async (req,res,next)=>{
    try {
        const userId = req.query.userId;
        if(!userId) return res.status(400).json({ message: 'invalid userId'});
        const output = await list(userId);
        res.status(200).json({ data: output || [], message: 'data fetched successfully'});
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createPost,
    getPosts
}