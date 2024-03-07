// Task:03 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// Create a Variable
var personName = "Aasia Ahmed";
console.log(personName);
// in Lowercase
console.log("lower cases", personName.toLowerCase());
// in Uppercases
console.log("Upper cases", personName.toUpperCase());
// in Titlecase
console.log("Title cases", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
