//Arrays are objects in JS, typeof returns "object"
//Syntax:

const cars = ["XUV", "BMW", "Dodge"];
const nums = [1, 22, 78, 90, 10];

//Arrays can also be defined as object by using "new Array" keyword:
const cities = new Array("BOM", "DEL", "GOA");

//converting an array to string can be done by using toString() function

//Looping array elements can be done by:
//1. using for loop
//2. Using forEach()
//3. using map()

//Splice() is an interesting method used as a combination of push and pop functions
//syntax: splice(position to be added, elements to remove, "new items");



//prototype Array it adds funcs

if (!Array.prototype.first) {
Array.prototype.first = function() {
return this[0];
};
}
const myArray = [10, 20, 30];
console.log(myArray.first()); // Outputs: 10
