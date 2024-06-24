//JS Datatypes
//JS has 8 datatypes:
//String, Number, Bigint, Boolean, Undefined, Null, Symbol and object(non primitive)
//In Object we have following: Object, Array, and date
//JavaScript has six primitive data types:
//Number, String, Boolean, Null, Undefined, and Symbol. It also has two compound data types: Object and Array

//var has function scope, while let has block scope.
//Use let for better scoping and avoid issues related to hoisting.

//In JS, declaring a variable can be done by four diff ways:

//First: Automatic Declaration

x = 5;
y = 9;
z = x + y;

//Second: Using Var

var a = 10;
//Few imp points:
//1. Var has a global scope, therefore variable declared even inside of scope can be used outside of it
//2. Var variables can be redeclared and reassigned
//3. Var is Hoisted

//Third: Using Let

let a = 10;
//Few imp points:
//1. Variables cannot be redeclared within same scope
//2. variables can be reassigned
//3. It is not hoisted

// Fourth: Using Const

const b = 20;
//Few imp points:
//1. Variables cannot be redeclared
//2. Variables cannot be reassigned
//3. It is not hoisted
