// Task:35 Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// Modify your program to print a statement about each animal, such as A dog would make a great pet. 
// Add a line at the end of your program stating what these animals have in common. 
// You could print a sentence such as Any of these animals would make a great pet!
// Create a Array:
var animals = ["Cat", "Lion", "Dog"]; // Create a index array:
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal); // Print a value
}
console.log("\n");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log(" A ".concat(animal, " has a tail")); // Print a value
}
console.log("\n all of these are great pets! but I Love cat more"); // Print Message
