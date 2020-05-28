const Contact = require('../models/contact');
exports.getHomepage = (req, res, next) => {
    Contact.find()
    .then(contacts => {
        // console.log(contacts);
        res.render('home',{
            pageTitle:'Home',
            contacts: contacts
        });
    })
    .catch(err => {
        console.log(err);
    })
};

exports.getLanding = (req, res, next) => {
    res.render('landing');
};

exports.getAddContact = (req, res, next) => {
    res.render('addContact');
};

exports.postAddContact = (req, res, next) => {
    const result = JSON.parse(req.body.data);
    console.log(result);
    const image = req.file;
    
    if(!image){
        res.redirect('/addContact');
    }
    const imageUrl = image.path;
    console.log(imageUrl);
    const contact = new Contact({
        name: result.name,
        listemail: result.email,
        dateofbirth: result.dob,
        listphoneno: result.phone,
        user: req.session.user,
        imageUrl: imageUrl
    });
    contact.save()
    .then(output => {
        res.redirect('/home');
    })
    .catch(error =>{
        console.log(error);
    })
};

// exports.getContacts = (req,res,next)=>{
//     Contact.find()
//     .then(contacts => {
//         console.log(contacts);
//         res.render('home',{
//             contacts: contacts
//         });
//     })
//     .catch(err => {
//         console.log(err);
//     })
// }