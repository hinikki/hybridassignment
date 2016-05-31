var allArray=[];
var maleFemaleArray=[];

var fs = require('fs');

var fileContents = fs.createReadStream('Indicators.csv');

var rl=require('readline').createInterface({

    input:fileContents,

    terminal:false

});

var commaSeparted=[];

var index=0;

var keys=[];

var Indicators;

var countrys=["AFGHANISTAN","AZERBAIJAN", "JAPAN", "QATAR", "ARMENIA", "JORDAN", "SAUDI ARABIA", "BAHRAIN", "KAZAKHSTAN", "SINGAPORE", "BANGLADESH", "KUWAIT", "SOUTH KOREA", "BHUTAN", "KYRGYZSTAN", "SRI LANKA", "BRUNEI", "LAOS", "SYRIA", "BURMA" ,

"LEBANON", "TAIWAN", "CAMBODIA", "MALAYSIA", "TAJIKISTAN", "CHINA", "MALDIVES", "THAILAND", "TIMOR-LESTE", "MONGOLIA", "TURKEY", "INDIA", "NEPAL", "TURKMENISTAN", "INDONESIA", "NORTH KOREA", "UNITED ARAB EMIRATES", "IRAN", "OMAN", "UZBEKISTAN",

"MYANMAR","IRAQ", "PAKISTAN", "VIETNAM", "ISRAEL", "PHILIPPINES", "YEMEN"];

rl.on('line',function(line){

    var eachRecord={};

    commaSeparted=line.replace(/"[^"]+"/g, function (match) {

    return match.replace(/,/g, '|');

}).split(",");

    if(index==0){

        keys=commaSeparted;

        index++;

    }else{

        if((commaSeparted[3]==='SP.DYN.LE00.FE.IN' || commaSeparted[3]==='SP.DYN.LE00.MA.IN' || commaSeparted[3]==='SP.DYN.LE00.IN') && (countrys.indexOf(commaSeparted[0].toUpperCase())!=-1) ){

        for(i=0;i<keys.length;i++){

            eachRecord[keys[i]]=commaSeparted[i].replace(/"/g,"").replace("|",",");

        }

        if(commaSeparted[3]==='SP.DYN.LE00.FE.IN' || commaSeparted[3]==='SP.DYN.LE00.MA.IN'){


    maleFemaleArray.push(eachRecord);

    }

        if(commaSeparted[3]==='SP.DYN.LE00.IN'){

            allArray.push(eachRecord);

    }

}

}

});



rl.on('close',function(line){
  console.log("printing");
console.log(maleFemaleArray.length);
fs.writeFile("male_female.json", JSON.stringify(maleFemaleArray, null, 4), function(err) {

            if(err) {

                console.log(err);

            }

        });

fs.writeFile("total.json", JSON.stringify(allArray, null, 4), function(err) {

                        if(err) {

                            console.log(err);

                        }

});

});
