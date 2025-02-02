// Making a Function
function make_shirt (size: string = "Large", printMessage: string = "I Love Typescript"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

// Calling a Function with by-defualt values
make_shirt();

// Calling a function now with a Medium size and defualt message
make_shirt("Medium")

// Calling a function now with a Small size and also Different Print Message
make_shirt("Small", "I Love Javascript")