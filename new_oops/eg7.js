function abcd(){
this.something = "good";

}

var a = {
something :"great"
}

var v = new abcd();
console.log(v);
console.log(a);


console.log(v instanceof Object);
console.log(a instanceof Object)