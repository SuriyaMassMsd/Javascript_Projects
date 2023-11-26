# Switch case (Javascript Challenge)
This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.


>## Task #2: Create a Switch case condition with all possible conditions

### Interactive Color Selector

This JavaScript code employs a traditional switch case to interactively prompt users for their favorite color. It recognizes a range of predefined colors, including red, orange, black, white, green, yellow, blue, brown, purple, pink, and grey. The selected color is then logged to the console, providing users with a quick and engaging way to showcase their favorite hues

## My Switch case challenge code


```
// Prompt the user to enter their favorite color, providing an example (ex: red)
const letChooseColor = prompt("Enter your favorite color", "ex: red");

// Convert the entered color to lowercase to make the comparison case-insensitive
switch (letChooseColor.toLowerCase()) {
  // Cases for recognized colors
  case "red":
  case "orange":
  case "black":
  case "white":
  case "green":
  case "yellow":
  case "blue":
  case "brown":
  case "purple":
  case "pink":
  case "grey":
    console.log(`Your Favorite Color is ${letChooseColor}`);
    break;

  // Default case for unrecognized colors
  default: {
    console.log(`Your Favorite Color ${letChooseColor} is not found!`);
  }
}

```


### Live link -> 
Deploy it and put the link here.




## Acknowledgement:
 // none


## References:

#### Video url :
 https://youtu.be/xG5IUyZvbDk

![xG5IUyZvbDk-HD](https://github.com/SuriyaMassMsd/My-Project/assets/53015384/678524d6-be1b-4ae4-b706-b5e80ba7421d)
