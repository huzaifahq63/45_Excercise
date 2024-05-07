// Array of Current Users
var current_users = ["Huzaifa", "Muteeba", "Saad", "Ayesha", "izhan"];
// Array of New Users
var new_users = ["Hamza", "Zaviyar", "Zahid", "Hifza", "Haris"];
// Loop through new_users to check for usernames availability
new_users.forEach(function (new_one_users) {
    // Making a candition for username already exist and save in our_condition variable
    var our_condition = current_users.some(function (current_one_users) { return current_one_users.toLowerCase() == new_one_users.toLowerCase(); });
    //Print Different message using If-else statements
    if (our_condition) {
        console.log("Sorry ".concat(new_one_users, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_users, " is available"));
    }
});
