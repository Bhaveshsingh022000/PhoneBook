exports.getHomepage = (req,res,next)=>{
    if(!req.session.isLoggedIn){
        return res.redirect('/');
    }
    res.render('home',{
        pageTitle: 'Home'
    });
};

exports.getLanding = (req, res, next)=>{
    res.render('landing')
};