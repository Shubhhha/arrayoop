function Rectangle(){
this.length = 0 ;
this.breadth = 0 ;
}

function Box(){
this.height = 0 ;
}

var b = new Box();

console.log(b.height);
b.length = 0 ;
b.breadth = 0 ;
console.log(b);