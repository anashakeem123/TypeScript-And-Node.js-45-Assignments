// Task:39 Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function cityCountry(city, country) {
    return "".concat(city, ", ").concat(country);
}
var c1 = cityCountry('lahore', 'pakistan');
var c2 = cityCountry('tokyo', 'japan');
var c3 = cityCountry('paris', 'france');
console.log(c1); // Print Message:
console.log(c2); // Print Message:
console.log(c3); // Print Message:
