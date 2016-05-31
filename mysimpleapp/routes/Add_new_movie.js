var express = require('express');
var jsonfile = require('jsonfile');
var movieAdd=require('../operations/movie_add.js')
var updatemovie=require('../operations/update.js');
var deleteMovie=require('../operations/deleteMovie');
var router = express.Router();


router.post('/', function (req, res) {

movieAdd(req,res);
})
/*
movie addition module ended here
*/

router.post('/update_details', function (req, res) {

updatemovie(req,res);
  })

/*
movie deletion code here
*/

router.get('/deleteMovie', function(req,res){

deleteMovie(req,res);
})


module.exports = router;
