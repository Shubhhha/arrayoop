function Bulb(){
this._wattage = 0 ;
}

Object.defineProperty(Bulb.prototype,'wattage',{
get:function(){
console.log("getter got called ");
return this._wattage ;
},
set:function(w){
console.log("setter got called");
}

this._wattage  = w ;
}
});

var b = new Bulb();
b.wattage = 60 ;
console.log(b.wattage);

var b2 = new Bulb();
b2.wattage = 100 ;
console.log(b2.wattage);