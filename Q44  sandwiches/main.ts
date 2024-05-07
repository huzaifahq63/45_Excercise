// Define a function with a rest parameter that accept items arrugments representing our sandwich
function makeSAndwich(...items: string[]){
    console.log("\nMaking a sandwich with the following itmes:\n");

    items.forEach(singleItem => console.log("-" + singleItem));

    console.log("\nNow Enjoy Sandwich");
}

// Call the function 3 times with 3 different number of arguments
makeSAndwich("Chicken", "Cheese", "Mayo", "Egg");

makeSAndwich("Bread", "Butter");

makeSAndwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato", "Onion");