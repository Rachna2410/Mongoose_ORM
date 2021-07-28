var express = require("express");
var router = express.Router();

var authorController = require('../controllers/author');

router.get('/', authorController.getAuthors);
router.get('/:id', authorController.getAuthor);
module.exports = router;