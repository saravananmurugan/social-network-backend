const { create } = require('../service/user');
const { createFollower } = require('../service/follower')

const createUser = async(req, res, next) =>{
    try {
        const { name, handle, dob, password } = req.body;
        if(!name || !handle || !dob || !password){
            return res.status(400).json({ message: 'invalid request'})
        }
        const age = ageCalculation(dob);
        if(!age){
            return res.status(400).json({ message: 'not eligible'})
        }
        if(name.length > 20){
            return res.status(400).json({ message: 'name should be less than 20'})
        }
        const {user, userId} = await create({ name,handle, dob, password });
        if(user){
            return res.status(400).json({ message: 'userId already exists'})
        }
        res.status(200).json({ userId, message: 'user created success fully'})
    } catch (error) {
        next(error);
    }
}


function ageCalculation(dob){
    const currentDate = new Date();
    const date = new Date(dob);
    const yearDiff = currentDate.getFullYear() -  date.getFullYear();
    const monthDiff = currentDate.getMonth()  - currentDate.getMonth();
    const day = currentDate.getDay()  - currentDate.getDay();
    if( yearDiff > 17){
        return true
    }else if(yearDiff === 17){
        if(monthDiff > 0){
            return true;
        }else if(monthDiff === 0 && day >= 0){
            return true
        }
    }
    return false;
}

const createFlowers = async (req, res, next)=>{
    try {
        const userId = req.params.userId;
        const followerId = req.query.userId;
        const resonse = await createFollower({userId, followerId});
        res.status(200).json({ message: 'followers created'});
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createUser,
    createFlowers
}