var User = require('../models/user');

exports.showUser = function(req,res,next){
	User.find(function(err,users_list){
		res.json(users_list);
	});
	
};

exports.showUserById = function(req,res,next){
	console.log(req.params);
	User.findById(req.params.id,function(err,user){
		res.json(user);
	});
	
};