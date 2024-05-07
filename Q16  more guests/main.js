// Creating a Guest List Array
var guestList = ["Huzaifa", "Muteeba", "Saad", "Ayesha",];
// Making variable for those guest who cant come
var dontCome = guestList[0];
// Print the name of guest who cant come
console.log(dontCome, "Nai Ahh Sakta han");
// Add or Remove Values from Guest List Array
guestList.splice(0, 1, "Izhan");
// Message Print for Biggar Table
console.log("Good News ! We have Found a Biggar Table For Dinner.");
// Adding a new value at starting index of array
guestList.unshift("Fahad");
// Adding a new value at ending index of array
guestList.push("Zahid");
// Get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index og array
guestList.splice(middleIndex, 0, "Zaviyar");
// Print Message of Updated list
console.log("updated List of our Guest");
// Sending a invitation message to our guest one bye one with thier names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me")); });
