const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./postRoutes');

router.use('/users', userRoutes);
router.use('/projects', postRoutes);
router.use('/projects', commentRoutes);

module.exports = router;
