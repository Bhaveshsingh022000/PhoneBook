const User = require('../models/user');

exports.postSignup = (req,res,next)=>{
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    console.log(email);
    console.log(email);
    User.findOne({email: email})
    .then(userDoc =>{
        if(userDoc){
            return res.redirect('/signup');
        }
        const user = new User({
            email:email,
            name:name,
            password:password,
            contacts: []
        });
        return user.save();
    })
    .then(result => {
        res.redirect('/home');
    })
    .catch(err => {
        console.log(err);
    })

};