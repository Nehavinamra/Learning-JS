//Program to display "SARANGHAE" at an interval of 3 sec

//USING CALLBACK
setTimeout(function(){myFunction("SARANGHAE");},3000)
function myFunction(value)
{
  doc.getElementById("demo").innerHTML= value;
}

//USING PROMISE

let myProm = new Promise(function (resolve)
{
  setTimeout(function() {resolve("SARANGHAE");},3000);
});
myProm.then(function(value){
    doc.getElementById("demo").innerHTML= value;
});
