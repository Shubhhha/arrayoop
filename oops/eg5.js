function Bulb(w){
var wattage = w ;
this.getWattage = function(){
return wattage ;
}
}

Bulb.prototype.getBrand = function(){
return "Bulb with wattage as " + Wattage + "is philips ";
}
var b1 = new Bulb(60);
var b2 = new Bulb(100);
console.log("wattage is :" , b1.getWattage());

console.log("wattage is :" , b2.getWattage());

//console.log(b1.wattage);
//console.log(wattage);
console.log(b1.getBrand());
console.log(b2.getBrand());
