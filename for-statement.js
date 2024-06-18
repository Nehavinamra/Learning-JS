//The syntax for defining a For loop in JS is:
//for (initialization; condition; afterthought)

//Example 1

for (let i = 0; i < 9; i++) {
  console.log(i);
}
//This will print all the numbers between 0 and 9

//Example 2

let val = "";
for (let i = 0; i < 10; i++) {
  val = val + i;
}
console.log(val);
// This will print: "0123456789"
