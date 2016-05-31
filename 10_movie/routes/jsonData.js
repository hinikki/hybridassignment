var express = require('express');
var router = express.Router();
var fs=require('fs');

router.get('/', function (req, res) {
  console.log("inside get request");
  var content=fs.readFileSync('./json/jsondata.json');
  res.json(content.toString());
  console.log("Res::"+res);
});

module.exports = router;
