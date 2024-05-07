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
// Inform that only two guest can be invited for dinner
console.log("Unfortunatelt, the new dinner table wont arrive on time, so I can only invite two Guest to dinner with me");
// Using while-loop to remove guest from the array until only two name remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("sorry, ".concat(removedGuest, " I cant invite you to dinner"));
}
// Sending a invitations to the last two guest on the list
console.log("Invitation to the last 2 Guests");
guestList.forEach(function (lasttwo) { return console.log("Luckly ".concat(lasttwo, ", you are still invited to dinner")); });
// Removing last two Guest from the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
