const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home');
const isAuth = require('../middleware/is-auth');

router.get('/', homeController.getLanding);

router.get('/home',isAuth,homeController.getHomepage);

router.get('/addContact',homeController.getAddContact);

router.post('/addContact',homeController.postAddContact);

router.get('/editContact/:id',homeController.getEditContact);

router.post('/editContact',homeController.postEditContact);

router.delete('/contact/:id',homeController.deleteContact);

// router.get('/contacts',homeController.getContacts);

module.exports = router;