// Task:42 Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names.
//  Because the original array will be unchanged, return the new array and store it in a separate array.
//  Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians3(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
function show_magicians2(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
function make_great2(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' the Great');
    }
    return greatMagicians;
}
var magicians3 = ["usman", "haseeb", "wajahat"];
var greatMagicians2 = make_great2(magicians3);
show_magicians3(magicians3);
show_magicians2(greatMagicians2);
