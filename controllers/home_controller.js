const Post = require('../models/posts');

module.exports.home= function(req,res){
    // console.log(req.cookies);
    // res.cookie('user_id',25);

    // Post.find({},function(err,posts){
    //     res.render('home',{
    //         title: "Codeial | Home",
    //         posts: posts
    //     });
    // });
//

//populate the user of each post
   Post.find({}).populate('user').exec(function(err,posts){
    res.render('home',{
        title: "Codeial | Home",
        posts: posts
    });
});
}

