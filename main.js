// Task:15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// Create a Guest List Array
var guestList = ["Anas", "Bilal", "Hamza", "Haider"];
// Making Variable for those guest who cant come 
var dontcome = guestList[0];
// Print the name of guest who cant come 
console.log(dontcome, "Nahi Aha Skta");
// Add or Remove values from Guest List Array
guestList.splice(0, 1, "Hakeem");
// Message Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner.");
// Adding a new value at starting index of array
guestList.unshift("Kamran");
// Adding a New value at ending index of array
guestList.push("Talha");
//Making a variable for storing a middle index of our  guest list array
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest to Middle index of array
guestList.splice(middleIndex, 0, "Ali");
// Print Message of Updates List
console.log("Update List of our Guests");
// Sending a invitation Message to our guests one by one with their names  
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ",would you like to dinner with me")); });
