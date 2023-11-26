
const chooseYourNumber = prompt("enter your favorite number", "ex:2");

if (isNaN(chooseYourNumber)) {
  alert("please enter a valid number");
} else if (chooseYourNumber % 2 === 0) {
  console.log(`your enteredNumber is ${chooseYourNumber} even`);
} else {
  console.log(`your enteredNumber is ${chooseYourNumber} odd`);
}
