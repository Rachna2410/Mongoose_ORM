var Author = require('../models/author');

//get all authors
exports.getAuthors = function(req,res,next){
	Author.find(function(err,authors_list){
		res.json(authors_list);
	});
	
};

//get a single author
exports.getAuthor = function(req,res,next){
	console.log(req.params);
	Author.findById(req.params.id,function(err,author){
		res.json(author);
	});
	
};