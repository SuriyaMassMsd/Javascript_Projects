// Traditional Switch Case

const letChooseColor = prompt("enter your fav color", "ex: red");

switch (letChooseColor.toLowerCase()) {
  case "red":
  case "Orange":
  case "black":
  case "white":
  case "green":
  case "yellow":
  case "blue":
  case "brown":
  case "purple":
  case "pink":
  case "grey":
    console.log(`Your Favourite Color is ${letChooseColor}`);
    break;

  default: {
    console.log(`Your Favorite Color ${letChooseColor} is not found!`);
  }
}
