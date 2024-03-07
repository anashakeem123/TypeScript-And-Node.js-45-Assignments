var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Task:18
// Making a Array of countries and Print its Orginal Order
var countriesToVisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Orginal Order:", countriesToVisit);
// Print the Array in Alphabetical Order without modifying the Actual Array List
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
// show that the array is still in its Orginal Order
console.log("still in Orginal Order:", countriesToVisit);
// Print the Array is Reverse Order without the Actualy Array List
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
// show that the array is still in its Orginal Order
console.log("still in Orginal Order:", countriesToVisit);
// We have Changed the Orginal Array Order Now 
console.log("Orginal Array Reverse:", countriesToVisit.reverse());
// Print the array to show that it's back to it's orginal order
console.log("Back to Orginal Order:", countriesToVisit.reverse());
// Print the array to show that it's order has been changed in Alphabetical order now
console.log("sorted in Alphabetical Order:", countriesToVisit.sort());
// We have Changed again the Orginal Array Order Now in reverse order again
console.log("Orginal Array Reverse Again:", countriesToVisit.reverse());
