exports.getHomepage = (req,res,next)=>{
    res.render('home',{
        pageTitle: 'Home'
    });
};

exports.getLanding = (req, res, next)=>{
    res.render('landing')
};