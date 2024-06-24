//Promises are better alternative for Async functions
//JS promises can be of: 
//pending: result undefined, fulfilled: result is value, rejected:result is error
//syntax:
let myProm = new Promise(function(myResult, myRejected)
                         { //producing code
                           myResult(//whatever to print if successful);
                           myRejected(//whatever to print if rejected); 
                         });
myPromise.then( //this is consuming code
  function(value) {//if successful}
    function (error) {//if rejected}
      );

//resolve and reject are reserved keywords used in promises



const pro = () => {
return new Promise((resolve, reject) => {
addEventListener("click", () => {
resolve("Hello")
})
})
}
pro().then(e => console.log(e))
