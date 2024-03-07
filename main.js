// Task:19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// Create a Array list
var guestList = ["Anas", "Bilal", "Hamza", "Haider"]; // Create a index list:
guestList.forEach(function (onGuest) { return console.log("Salam ".concat(onGuest, ", would you Like to dinner with me?")); }); // items list:
var lenghtGuests = guestList.length;
console.log("We are Inviting total ".concat(lenghtGuests, " guest.")); // Print Message:
