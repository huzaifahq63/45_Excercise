// Creating a Array
var userNames = ["Huzaifa", "Muteeba", "Saad", "Ayesha", "Izhan"];
// Using Foreach Loop on Array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hellon ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thanks you for logging in again.?"));
    }
});
