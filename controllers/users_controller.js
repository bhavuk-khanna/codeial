const User = require('../models/user');

module.exports.users = function(req,res){
    res.render('users',{
        title: "users"
    });
}


module.exports.profile = function(req,res){
    
    //check whether the user is autheticated by reading th cookies
    if(req.cookies.user_id){
        
        User.findById(req.cookies.user_id,function(err,user){
            
            if(err){
                console.log("Error while trying to find the user");
                res.render('user_sign_in',{
                    title: "sigin"
                });
            }
            
            if(user){
                res.render('user_profile',{
                    title: "profile",
                    email: user.email,
                    name: user.name
                })
            }
            else{
                console.log("user not found with the given user_id");
                res.render('user_sign_in',{
                    title: "sigin"
                });
            }
        });


    }
    else{
        res.render('user_sign_in',{
            title: "sigin"
        });
    }

    // if the they are show profile page having the email address and name of the user

    //if not redirect the user to the sign in page 

    
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
    
    
    //steps to authenticate 
    //find the user
    User.findOne({email: req.body.email}, function(err, user){
        if(err){
            console.log('error in finding the user in signing in');
            return;
        }
        //handle user found
        if(user){
            //handle mismatch of password
            if(user.password != req.body.password){
                return res.redirect('back');
            }
            //handle session creation
            res.cookie('user_id',user.id);
            return res.redirect('/users/profile');
                
        }else{
            //handle user not found
            return res.redirect('back');
        }

    });
    


}
