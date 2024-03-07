// Task:34 Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
// create a Array:
var favourite_Pizza = ["Pepperoni ", "Chicken", "veg"]; // Create a index List:
for (var _i = 0, favourite_Pizza_1 = favourite_Pizza; _i < favourite_Pizza_1.length; _i++) {
    var pizza = favourite_Pizza_1[_i];
    console.log(pizza); // Print Message:
}
console.log("\n"); // Line space:
for (var _a = 0, favourite_Pizza_2 = favourite_Pizza; _a < favourite_Pizza_2.length; _a++) {
    var pizza = favourite_Pizza_2[_a];
    console.log("I really Like ".concat(pizza, " pizza!")); // Print Message:
}
console.log("\nI really Love pizza"); // Print Message:
