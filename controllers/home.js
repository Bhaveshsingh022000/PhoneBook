exports.getHomepage = (req,res,next)=>{
    res.render('home',{
        pageTitle: 'Home'
    });
};