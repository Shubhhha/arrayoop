function Bulb(w){
var wattage ;

if(w){
if((typeof w)=="number"){
if(w>=0 && w<=240) wattage = w ; else wattage = 0 ;
}else{
wattage = 0 ;
}
}else{
wattage = 0 ;
}

this.getWattage = function(){
return wattage ;
}
this.setWattage = function(w){
if(w){
if((typeof w)=="number"){
if(w>=0 && w<=240) wattage = w ; else wattage = 0 ;
}else{
wattage = 0 ;
}
}else{
wattage = 0 ;
}

}

}


var b1 = new Bulb();
console.log(b1.getWattage());
var b2 = new Bulb(60);
console.log(b2.getWattage());
var b3 = new Bulb(-30);
console.log(b3.getWattage());
var b4 = new Bulb("guddu");
console.log(b4.getWattage());
b4.setWattage(100);
console.log(b4.getWattage());
b3.setWattage("rahul");
console.log(b3.getWattage());



