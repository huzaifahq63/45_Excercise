// Define Vari
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];

// Test for equality  and inequality with string
console.log("is apple is equal to apple?");
console.log(apple == "apple");

console.log("\nIs apple is not equal tp apple?");
console.log(apple != "apple");

// Test using Lowercase funtion
console.log("Is APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

// Numarical test
console.log("\nIs APPLe is not equal to apple after converting to lowecase?");
console.log(uppercaseApple.toLowerCase() != "apple");

// Equal to
console.log("\n is ten equal to twent?");
console.log(ten == twenty);

// Not Equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);

// Greater than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);

// Less than
console.log("\nIs twenty is less than 10?");
console.log(twenty < 10);

// Greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);

// Less than or eqaul to
console.log("\nIs twenty is less than or equal to 10?");
console.log(twenty <= 10);

// Test using "and" & "or" Operators

// Using &&
console.log("\n twenty is not equal to 10 and twnty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\n twent is not equal to 10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty > 30);

// Using || (OR)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);

// Test whether an item is include in array
console.log("\nis orange include in my fruits array");
console.log(fruits.includes("orange"));

// Not include
console.log("\n orange not include in my Fruits array");
console.log(!fruits.includes("orange"));