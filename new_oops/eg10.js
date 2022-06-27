function Rectangle(){
this.length = 0 ;
this.breadth = 0 ;
}

function Box(){
this.height = 0;
Rectangle.apply(this);
}

var b = new Box();
console.log(b);

