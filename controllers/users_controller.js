const User = require('../models/user');

module.exports.users = function(req,res){
    res.render('users',{
        title: "users"
    });
}

module.exports.signUp = function(req,res){
    res.render('user_sign_up',{
        title: "Signup"
    });
}

module.exports.signIn = function(req,res){
    res.render('user_sign_in',{
        title: "SignIn"
    });
}


//get the sign up data
module.exports.create = function(req, res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){
            console.log('error in finding user in signing up');
            return;
        }
        if(!user){
            User.create(req.body, function(err,user){
                if(err){
                    console.log('error in creating user while signing up');
                    return;
                }
                return res.redirect('/users/signin');
            })
        }else{
            return res.redirect('back');
        }
    })
}

//Sign in and create a session for the user
module.exports.createSession = function(req, res){
    //TODO later
}
