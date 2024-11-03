const express = require('express');
const router = express.Router();

const notesRoutes = require('./notes');
const usersRoutes = require('./users');
const categoriesRoutes = require('./category');

router.use('/notes', notesRoutes);
router.use('/users', usersRoutes);
router.use('/categories', categoriesRoutes);

module.exports = router;