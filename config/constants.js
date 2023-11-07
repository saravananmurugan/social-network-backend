require('dotenv').config();


const required = (field)=>{
    if(!process.env[field]){
        throw new Error(`${field} env field is missing`)
    }
    return process.env[field]
}

const config = {
    MONGO_URL: required('MONGO_URL'),
}



module.exports = config;

