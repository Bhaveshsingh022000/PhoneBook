const Contact = require('../models/contact');
exports.getHomepage = (req, res, next) => {
    Contact.find({user:req.session.user})
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

exports.getEditContact = (req,res,next)=>{
    const id = req.params.id;
    // console.log(id);
    Contact.findById(id)
    .then(result => {
        res.status(201).json({
            message: 'Contact fetched',
            contact: result
        })
    })
    .catch(err =>{
        console.log(err);
    })
};

exports.postEditContact = (req, res, next)=>{
    const result = JSON.parse(req.body.data);
    const id = req.body.id;
    const image = req.file;
    if(!image){
        Contact.findById(id)
        .then(contact =>{
            contact.name = result.name;
            contact.listemail = result.email;
            contact.listphoneno = result.phone;
            contact.dateofbirth = result.dob;
            return contact.save();
        })
        .then(result =>{
            console.log("contact updated");
            res.redirect('/home');
        })
        .catch(err =>{
            console.log(err);
        })
    }
    else{
        Contact.findById(id)
        .then(contact =>{
            contact.name = result.name;
            contact.listemail = result.email;
            contact.listphoneno = result.phone;
            contact.dateofbirth = result.dob;
            contact.imageUrl = image.path;
            return contact.save();
        })
        .then(result =>{
            console.log("contact updated");
            res.redirect('/home');
        })
        .catch(err =>{
            console.log(err);
        })
    }
    
}

exports.deleteContact = (req,res,next)=>{
    const id = req.params.id;
    Contact.findByIdAndRemove(id)
    .then(result =>{
        console.log("Delete success");
        // res.status(202).json({message:'Delete Success'});
        res.redirect('/home');
    })
    .catch(err => {
        console.log(err);
    })
}