
function reduceToMax(initialOrLastGeneratedValue,currentValue,index,arr){
console.log("reduceToMax got called with :" , initialOrLastGeneratedValue , currentValue ,index);
if(currentValue > initialOrLastGeneratedValue) return currentValue 
else return initialOrLastGeneratedValue ;

}

var x = [10,3,67,34,67,8,44,666,23];
var largest  = x.reduceRight(reduceToMax);
console.log("collection  reduce to max value");
console.log(largest);