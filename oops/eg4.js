function Bulb(w){
var wattage = w ;
this.getWattage = function(){
return wattage ;
}
}

var b1 = new Bulb(60);
var b2 = new Bulb(100);
console.log(b1.getWattage());
console.log(b1.wattage); // undefined becaz var wattage is private scope
console.log(wattage); // not defined error becaz var wattage is private scope .
console.log("wattage is " , b2.getWattage());