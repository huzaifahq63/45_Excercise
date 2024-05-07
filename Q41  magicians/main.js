// Define a function to print each magician name from an array
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// Define an array constaining magicians name
var magician_name = ["Harry Portor", "Huzaifa", "Muteeba"];
// Call the function to print each magician name
show_magicians(magician_name);
