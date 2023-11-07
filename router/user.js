const router = require('express').Router();
const { createUser, createFlowers } = require('../controller/user');


router.post('/create', createUser)
router.post('/follow/:userId', createFlowers)

module.exports = router;