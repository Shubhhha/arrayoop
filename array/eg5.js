function isAnybodyIndian(obj){
console.log("isAnybodIndian got called with " , obj );
return obj.country.toUpperCase()==='INDIAN' ;
}

var x = [
{"name" : "sunny" , "country" : "usa"},
{"name" : "pascal" , "country" : "france"},
{"name" : "huhub" , "country" : "brazil"},
{"name" : "max" , "country" : "germany"},
{"name" : "simran" , "country" : "indian"},
{"name" : "john" , "country" : "usa"},
{"name" : "manu" , "country" : "usa"},
]

var b = x.some(isAnybodyIndian);
if(b) console.log("yes indian exist");
else console.log("no ,sadly indian doesnot exist");
