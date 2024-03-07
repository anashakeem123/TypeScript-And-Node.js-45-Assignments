// Task:16
// Create a Guest List Array
let guestList = ["Anas","Bilal","Hamza","Haider"];

// Making Variable for those guest who cant come 
let dontcome = guestList[0];

// Print the name of guest who cant come 
console.log(dontcome, "Nahi Aha Skta"); // Print Message:

// Add or Remove values from Guest List Array
guestList.splice(0,1,"Hakeem"); // Print Message:
 
// Message Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner."); // Print Message:


// Adding a new value at starting index of array
guestList.unshift("Kamran");

// Adding a New value at ending index of array
guestList.push("Talha");

//Making a variable for storing a middle index of our  guest list array
let middleIndex:number=Math.floor(guestList.length / 2);

//Adding a new guest to Middle index of array
guestList.splice(middleIndex, 0, "Ali");
// Print Message of Updates List
console.log("Update List of our Guests");

// Sending a invitation Message to our guests one by one with their names  
guestList.forEach(oneguest => console.log(`Salam ${oneguest},would you like to dinner with me`));

