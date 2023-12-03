#  Different Functions with Examples (Javascript Challenge)
This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.


>## Task #6: Create a Different Functions with Examples

## Simple Math Operations in JavaScript

This JavaScript script demonstrates various ways to perform basic math operations, including addition and subtraction, using different types of functions and expressions.

## Function Declarations
Demonstrates declaring a function to add two predefined numbers.
## Named Function Expression
Uses a named function expression to calculate the sum of two predefined numbers.
## Named Function Expression with Parameters
Illustrates a named function expression with parameters for user-defined addition.
## Anonymous Function Expression
Utilizes an anonymous function expression to add two predefined numbers.
## Anonymous Function Expression with Parameters
Uses an anonymous function expression with parameters to subtract two values and multiply the result by a new number.
I## mmediately Invoked Function Expression (IIFE)
Executes a function immediately with predefined parameters and displays the result.

## My Reference Array challenge code


```
const num1 = 12;
const num2 = 12;

// Function Declarations

function addNumbers() {
  console.log(num1 + num2);
}

addNumbers();

// function expression (named function)

const sumOfNumbers = function kootal() {
  return num1 + num2;
};

console.log(sumOfNumbers());

// // named function expression , (parameters with arguments)
const sumOfNumbers2 = function kootal(value1, value2) {
  return value1 + value2;
};

console.log(sumOfNumbers2(12, 3));

// // function expression (Anonymous function)

const sumOf = function () {
  return num1 + num2;
};

console.log(sumOf());

// //Anonymous function expression (parameters with arguments , )

const sumOf2 = function (value1, value2) {
  return value1 - value2;
};

const newNumber = 2;

console.log(sumOf2(13, 12) * newNumber);


// // Immediately Invoked Function Expression (parameters with arguments)

const result = (function(val1,val2){
         return val1+ val2
})(2,4);

console.log(result);


```


### Live link -> 
Deploy it and put the link here.



## Acknowledgement:
 // none


## References:

#### Video url :
https://www.youtube.com/watch?v=7woUGy9G9DU

![7woUGy9G9DU-HD](https://github.com/Mushkir/cyberdude-challenges/assets/53015384/a2da0cf1-b40d-4585-ab4a-c20472091274)

