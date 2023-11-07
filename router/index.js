const router = require('express').Router({ mergeParams: true});
const user  = require('./user');
const post = require('./post');

router.use('/user', user);
router.use('/posts', post);

router.get('/health-check', (req, res, next)=>{
    res.status(200).json({ message: 'server is up and running'})
})


module.exports = router;