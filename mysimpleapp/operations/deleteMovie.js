var express = require('express');
var jsonfile=require('jsonfile');
module.exports=function(req,res){

  /*
Reading Data from the file
  */
jsonfile.readFile('./json/jsondata.json',function(err,data){
  var objdata=data;
  for(var index=0;index<objdata.length;index++){
    if(objdata[index].Title === req.param('title')){
      objdata.splice(index,1);
      break;
    }
  }
  /*
writing back data to the file
  */
  jsonfile.writeFile('./json/jsondata.json', objdata, function(err) {
    
        if (err) throw err;

    });

res.redirect( '/' );

})

//res.redirect( '/' );
}
