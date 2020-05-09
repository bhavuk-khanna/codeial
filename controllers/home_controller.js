module.exports.home= function(req,res){
    return res.end('<h1>We are in the home controller</h1>');
}

module.exports.profile= function(req,res){
    return res.end('<h1>We are in the profile controller in home_controller.js</h1>');
}