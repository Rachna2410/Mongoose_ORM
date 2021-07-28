var Category = require('../models/category');


exports.showCategory = function(req,res,next){
	Category.find(function(err,categories_list){
		res.json(categories_list);
	});
	
};

exports.showCategoryById = function(req,res,next){
	console.log(req.params);
	Category.findById(req.params.id,function(err,category){
		res.json(category);
	});
	
};