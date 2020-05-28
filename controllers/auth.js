const bcrypt = require('bcryptjs');

const User = require('../models/user');


exports.postSignup = (req,res,next)=>{
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    console.log(confirmPassword);
    console.log(password);
    User.findOne({email: email})
    .then(userDoc =>{
        if(userDoc){
            return res.redirect('/');
        }
        return bcrypt.hash(password, 12)
        .then(hashedPassword => {
            const user = new User({
                email:email,
                name:name,
                password:hashedPassword,
                contacts: []
            });
            return user.save();
        })
        .then(result => {
            res.redirect('/');
        })
    })
    .catch(err => {
        console.log(err);
    })
};

exports.postLogin = (req, res ,next)=>{
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email:email})
    .then(user =>{
        if(!user){
            return res.redirect('/');
        }
        bcrypt.compare(password, user.password)
            .then(result => {
                if(result){
                    return res.redirect('/home');
                }
                return res.redirect('/');
            })
            .catch(err => {
                res.redirect('/');
            })
    })
    
};