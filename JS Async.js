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
