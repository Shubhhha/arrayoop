function Bulb(w){
this.w = w ;
this.setWattage = function(w){
this.w=w;
}
this.getWattage = function(){
return w ;
}
}

Bulb.prototype.getBrand = function(){
return "Bulb with wattage :" + this.w + " is of brand philips" ;
}

var b = new Bulb(60);
console.log(b);
