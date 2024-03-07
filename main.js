// Task:24
// Define Variables
var apple = "apple";
var uppercaseApple = "Apple";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "Orange"];
// Test for equality and inequality with string
console.log("Is apple is equal to apple?");
console.log(apple == "apple");
console.log("\nIS apple is not equal to apple?");
console.log(apple != "apple");
// Test using Lowercase Function
console.log("\nIs Apple is equal to apple after converting Lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nIs Apple is not equal to apple after converting Lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
// Numerical Tests
// Equal to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);
// Not Equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);
// Greater than zero tests
console.log("\n Is ten is greater than zero?");
console.log(ten > 0);
// Less than
console.log("\nIs twenty is less than 10?");
console.log(twenty < 10);
// Greater than or equal to
console.log("\nIs ten is greater than or equal to zero?");
console.log(ten >= 5);
// Less than or equal to
console.log("\nIs twenty is less than is equal to 10?");
console.log(twenty <= 10);
// Test using "and" & "or" Operators
// Using && (and)
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
// Using || (OR)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
//  Test whether an item is include in array
console.log("\nIs Orange include in my Fruits array");
console.log(fruits.includes("Orange"));
console.log("\nIs Orange not include in my Fruits array");
console.log(!fruits.includes("Orange"));
