const router = require('express').Router();
const userRoutes = require('./userroutes');
const commentRoutes = require('./commentroutes');
const postRoutes = require('./postroutes');

router.use('/user', userRoutes);
router.use('/comment', commentRoutes);
router.use('/post', postRoutes);

module.exports = router;