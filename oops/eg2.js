function Bulb(w){
this.w = w ;
this.setWattage = function(w){
this.w = w ;
}
this.getWattage = function(){
return w ;
}
this.getBrand = function(){
return "Buld with wattage : "+ this.w + " is of brand philips" ;
}
}

var b = new Bulb(60);
console.log(b);
console.log(b.getBrand());