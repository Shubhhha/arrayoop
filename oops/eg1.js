function Bulb(w){
this.w = w ;
this.setWattage = function(w){
this.w = w ;
}
this.getWattage = function(){
return w ;
}
}

var b = new Bulb(60);
console.log(b);