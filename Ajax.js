//AJAX: Asynchronous javascript and XML
//Sends XMLHTTPS request to server and displays the data in JS and HTML

//The XMLHttpRequest object can be used to exchange data with a web server behind the scenes. 
//This means that it is possible to update parts of a web page, without reloading the whole page.

//Steps involved: Creating the request, defining callback function, open the XMLHTTP obj, send the XMLHTTP obj

const xhttp = new XMLHttpRequest(); //creating request
xhttp.onload = function() { //Defining callback function
  //whatever to do when response is ready
}
xhttp.open("GET", "yourlink_"); //open the request
xhttp.send(); //send the request to the server


//onload: define callback function to be excecuted when request receives an answer
//To send request to server: Use open and send
//OPEN SYNTAX: open(method, URL, async)
