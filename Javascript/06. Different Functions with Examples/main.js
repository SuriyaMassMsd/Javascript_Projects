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

