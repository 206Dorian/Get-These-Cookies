

const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const postRoutes = require('./postRoutes');
// const userRoutes = require('./userroutes');
// const commentRoutes = require('./commentroutes');
// const postRoutes = require('./postroutes');

router.use('/user', userRoutes);
router.use('/comment', commentRoutes);
router.use('/post', postRoutes);

module.exports = router;