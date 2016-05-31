var express=require('express');
var jsonfile=require('jsonfile');
module.exports=function(req,res){
//
// var title = req.body.title;
// var year = req.body.year;
// var actors = req.body.actors;
// var director = req.body.director;
// var plot = req.body.plot;
// var language = req.body.language;
// var country = req.body.country;
// var released = req.body.released;
// var rating = req.body.imdbRating;
// var awards = req.body.awards;
// var poster = req.body.poster;

/*Reading data from the file */
jsonfile.readFile('./json/jsondata.json', function(err, obj) {

     var fileObj = obj;
     console.log('data in obj'+obj[0].Title);
console.log(req.body);
    for(var i=0;i<obj.length;i++){
      if(obj[i].Title===req.body.Title){
        // obj[i].Year=req.body.year;
        // obj[i].Actors=req.body.actors;
        // obj[i].Director=req.body.director;
        // obj[i].Plot=req.body.plot;
        // obj[i].Language=req.body.language;
        // obj[i].Country=req.body.country;
        // obj[i].Released=req.body.released;
        // obj[i].imdbRating=req.body.imdbRating;
        // obj[i].Awards=req.body.awards;
        // obj[i].Poster=req.body.poster;
        //


        // fileObj[i]=obj[i];
        fileObj[i]=req.body;

        break;
      }
    }
/*writing  data to the file */
    jsonfile.writeFile('./json/jsondata.json', fileObj, function(err) {
          if (err) throw err;

      });

  })




res.redirect( '/' );

}
