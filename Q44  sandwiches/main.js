// Define a function with a rest parameter that accept items arrugments representing our sandwich
function makeSAndwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following itmes:\n");
    items.forEach(function (singleItem) { return console.log("-" + singleItem); });
    console.log("\nNow Enjoy Sandwich");
}
// Call the function 3 times with 3 different number of arguments
makeSAndwich("Chicken", "Cheese", "Mayo", "Egg");
makeSAndwich("Bread", "Butter");
makeSAndwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato", "Onion");
