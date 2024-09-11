function add(a, b) {
    return a + b;
}


function show(message) {
    console.log("Message:", message);
}


function isPositive(number) {
    if (number > 0) {
        return true;
    } else {
        return false;
    }
}


let num1 = 25;
let num2 = 25;
let sum = add(num1, num2);
show("The sum is: " + sum);

let checkNumber = -5;
if (isPositive(checkNumber)) {
    show("The number is positive.");
} else {
    show("The number is not positive.");
}