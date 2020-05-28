const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home');

router.get('/', homeController.getLanding);
router.get('/home',homeController.getHomepage);

module.exports = router;