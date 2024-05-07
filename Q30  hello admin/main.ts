// Creating a Array
let userNames = ["Huzaifa", "Muteeba", "Saad", "Ayesha", "Izhan"];

// Using Foreach Loop on Array
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
    console.log(`Hellon ${oneUser}, would you like to see a status report?`)
}else{
    console.log(`Hello ${oneUser}, thanks you for logging in again.?`)
   }
})