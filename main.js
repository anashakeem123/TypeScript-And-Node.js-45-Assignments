// Task:17
// Create a Guest List Array
var guestList = ["Anas", "Bilal", "Hamza", "Haider"];
// Making Variable for those guest who cant come 
var dontcome = guestList[0];
// Print the name of guest who cant come 
console.log(dontcome, "Nahi Aha Skta"); // Print Message:
// Add or Remove values from Guest List Array
guestList.splice(0, 1, "Hakeem");
// Message Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner."); // Print Message
// Adding a new value at starting index of array
guestList.unshift("Kamran");
// Adding a New value at ending index of array
guestList.push("Talha");
//Making a variable for storing a middle index of our  guest list array
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest to Middle index of array
guestList.splice(middleIndex, 0, "Ali");
// Print Message of Updates List
console.log("Update List of our Guests"); // Print Message:
// Sending a invitation Message to our guests one by one with their names  
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ",would you like to dinner with me")); });
// INform that only two guest can be invited for dinner
console.log("unforunately, the new dinner table wont arrive on time, so I can only invite two Guests to dinner With me"); // Print Message:
// using while-loop to remove guests from the array until 
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, " I can invite you to dinner")); // Print Message:
}
// Sending a invitations to the last two guest on the list 
console.log("Invitation to the last 2 Guests"); // Print Message:
guestList.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ",you are still invited to dinner")); });
// Removing last two Guest from the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList); // Print Message:
