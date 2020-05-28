const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home');
const isAuth = require('../middleware/is-auth');

router.get('/', homeController.getLanding);

router.get('/home',isAuth,homeController.getHomepage);

router.get('/addContact',isAuth,homeController.getAddContact);

router.post('/addContact',isAuth,homeController.postAddContact);

router.get('/editContact/:id',isAuth,homeController.getEditContact);

router.post('/editContact',isAuth,homeController.postEditContact);

router.delete('/contact/:id',isAuth,homeController.deleteContact);

// router.get('/contacts',homeController.getContacts);

module.exports = router;