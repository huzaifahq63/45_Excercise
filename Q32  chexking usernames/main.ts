// Array of Current Users
let current_users = ["Huzaifa", "Muteeba", "Saad", "Ayesha", "izhan"]

// Array of New Users
let new_users = ["Hamza", "Zaviyar", "Zahid", "Hifza", "Haris"]

// Loop through new_users to check for usernames availability
new_users.forEach(new_one_users => {

    // Making a candition for username already exist and save in our_condition variable
    let our_condition =current_users.some(current_one_users => current_one_users.toLowerCase() == new_one_users.toLowerCase())

    //Print Different message using If-else statements
    if(our_condition){
       console.log(`Sorry ${new_one_users} is already taken!`)
    }else{
       console.log(`This Username ${new_one_users} is available`)
    }
})