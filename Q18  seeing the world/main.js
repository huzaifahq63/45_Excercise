var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a Array of Countries  and Print its Orginal Order
var countriesToVisit = ["China", "Denmark", "Brazil", "Argentina",];
console.log("Original Order:", countriesToVisit);
// Print the Array in Alphabetical order without modifying the Actual Array List
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
// Show that the array is still in its Original order
console.log("Still in Original Order:", countriesToVisit);
// Print the Array in Reversed Order without modifying the Actual Array List
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
// Show that the array is still in its Original order
console.log("Still in Original Order:", countriesToVisit);
// We have Change the Original Array Order Now
console.log("Original Array Reversed:", countriesToVisit.reverse());
// Print the array to show that its's back to its original order
console.log("Back to Original Order:", countriesToVisit.reverse());
// Print the array to show that its order has been changed in Alphabetical order now
console.log("Soeted in Alphabetical Order:", countriesToVisit.sort());
// We have Changed again the Original Array Order Now in reverse order again
console.log("Original Array reversed Again:", countriesToVisit.reverse());
