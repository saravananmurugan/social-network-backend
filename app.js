const constants = require('./config/constants');
const express = require('express');
const router = require('./router');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

mongoose.connect(constants.MONGO_URL).then(async ()=>{
    console.log('mongodb connected successfully')
}).catch((err)=>{
    throw err;
})

app.use('/api', router);

process.on('uncaughtException', (err)=>{
    console.log(err)
})

process.on('unhandledRejection', (err)=>{
    console.log(err)
})

process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
});

app.listen(3000, ()=>{
    console.log('server is running on port 3000')
})
