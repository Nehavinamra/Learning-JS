//Function Callback: wherein a function passes another function as an argument which is called after this function is executed
//eg
function firstCallback()
{
  displaynew("Hello");
}
function secondCallback()
{
  displaynew("Morning");
}

firstCallback(); //This will initially print Hello
secondCallback(); //this will then overwrite Hello and print morning, thus final output is morning

//eg2---------------

function addition(thing) {     //callback function

  document.getElementById("demo").innerHTML = thing;
}

function mycalci(num1, num2, theCallback) {
  let sum = num1 + num2;
  theCallback(sum);
}

mycalci(5, 5, addition);  //It is passed to mycalci() as an argument, prints 10


//JS promises: Alternative of callback functions
//consists of : "Producing code" is code that can take some time & "Consuming code" is code that must wait for the result



