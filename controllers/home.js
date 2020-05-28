const Contact = require('../models/contact');
exports.getHomepage = (req, res, next) => {
    res.render('home', {
        pageTitle: 'Home'
    });
};

exports.getLanding = (req, res, next) => {
    res.render('landing');
};

exports.getContact = (req, res, next) => {
    res.render('addContact');
};

exports.postContact = (req, res, next) => {
    const result = JSON.parse(req.body.data);
    console.log(result);
    const contact = new Contact({
        name: result.name,
        listemail: result.email,
        dateofbirth: result.dob,
        listphoneno: result.phone
    })
    contact.save()
    .then(output => {
        res.redirect('/home');
    })
    .catch(error =>{
        console.log(error);
    })
};