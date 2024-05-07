let guestList = ["Huzaifa", "Muteeba", "Saad", "Ayesha"];

let dontCome = guestList[0];

console.log(dontCome, "Nai Ahh skta");

guestList.splice(0, 1, "Izhan");

guestList.forEach(guest => console.log(`Salam ${guest}, would u like to Dinner with me?`));