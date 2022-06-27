function Rectangle(length ,breadth){
this.length = length ;
this.breadth = breadth ;
}

function Box(length , breadth , height){
this.height = height ;
Rectangle.apply(this,arguments);
}

var b = new Box(10,20,100);

console.log(b);