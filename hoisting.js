//JS declarations are hoisted: A variable can be used before it has been declared, default behaviour of JS, moving all declarations to the top of current scope
//IMP: JS only hoists declarations and not initializations
//eg

var x =5; //var y hoisted here
element = document.getElementById("demo");
element.innerHTML = x + " " + y;
var y = 7; //declaring y at bottom

//OUTPUT = 5, this is because only "var y" declaration is hoisted and not the value 7 (initialization)
