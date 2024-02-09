// The if else statement

var speedlimit = 55;

// This function will be called to check if the user is speeding.
function amIspeeding() {
    var speed = prompt("Enter your speed"); // Prompt the user for their speed.
    speed = Number(speed); // Convert the speed from a string to a number.

    // Check if the speed is greater than or equal to the speed limit.
    if (speed >= speedlimit) {
        alert("Yes. You are speeding.");
    } else {
        alert("No. You are not speeding.");
    }
}

// You must call the function to execute its logic.
amIspeeding();
