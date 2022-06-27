var a = {};
a[Symbol.iterator] = function* (){
yield 10 ;
yield 20 ;
yield 30 ;

}

for(var i of a){
console.log(i);
}

console.log("************************");

var jk = [...a];
console.log(jk);