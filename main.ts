// Task:35 Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// Modify your program to print a statement about each animal, such as A dog would make a great pet. 
// Add a line at the end of your program stating what these animals have in common. 
// You could print a sentence such as Any of these animals would make a great pet!
 
// Create a Array:
let animals : string [] = ["Cat","Lion","Dog"] // Create a index array:

for (let animal of animals) {
    console.log(animal) // Print a value
}
console.log("\n")

for (let animal of animals) {
    console.log(` A ${animal} has a tail`) // Print a value
}

console.log("\n all of these are great pets! but I Love cat more") // Print Message