class Rectangle{
constructor(length,breadth){
this.length = length ;
this.breadth = breadth ;
}
}

class Box extends Rectangle{
constructor(length,breadth,height){
super(length ,breadth);
this.height = height;

}
}

var b = new Box(10,20,30);
console.log(b);


