let userName = ["Huzaifa", "Muteeba", "Saad", "Ayesha", "Izhan"];

userName =[]

if (userName.length === 0){
   console.log("your Array in Empty we need to find some users!")
}else{
    // Using For Each Loop on Array 
    userName.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
    console.log(`Hello ${oneUser}, thanks you for logging in again.`)
    }
})
}