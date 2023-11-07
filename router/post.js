const router = require('express').Router();
const { createPost, getPosts } = require('../controller/post');


router.post('/create', createPost)
router.get('/', getPosts)

module.exports = router;