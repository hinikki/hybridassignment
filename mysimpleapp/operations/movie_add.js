 var express = require('express');
 var jsonfile=require('jsonfile');

module.exports = function(req,res){



  //   var title = req.body.title;
  //   var year = req.body.year;
  //   var actors = req.body.actors;
  //    var director = req.body.director;
  //   var plot = req.body.plot;
  //    var language = req.body.language;
  //    var country = req.body.country;
  //    var released = req.body.released;
  //    var rating = req.body.imdbRating;
  //    var awards = req.body.awards;
  //    var poster = req.body.poster;
  //  console.log('data parsed'+title);
   var fileobj={};


   /*Reading data from the file */
     jsonfile.readFile('./json/jsondata.json', function(err, obj) {

             if (err) {//throw err;
             }


        //      fileobj.Title=title
        //  fileobj.Year=year;
        //  fileobj.Actors=actors;
        //   fileobj.Director=director;
        //   fileobj.Plot=plot;
        //   fileobj.Language=language;
        //   fileobj.Country=country;
        //   fileobj.Released=released;
        //   fileobj.imdbRating=rating;
        //   fileobj.Awards=awards;
        //   fileobj.Poster=poster;

   obj.push(req.body);
   /*Writing  data to the file */
   jsonfile.writeFile('./json/jsondata.json', obj, function(err) {
         if (err){// throw err;
         console.log("error writing file"+err);}


     });


       // res.render( '/');
        
     });

   res.redirect( '/' );


 }

// var addMovie=function(x,y){
//
// console.log('printing the multiplication'+x*y);
//
// }
