// reduce method................

function someFunc(a,b,c,d){
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log("------------------");
return a+b ;
}


var x = [10,20,30,40,50];
var y = x.reduce(someFunc,0);
console.log("Total is"+ y );