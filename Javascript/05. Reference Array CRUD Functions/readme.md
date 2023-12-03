#  Reference Array CRUD Functions (Javascript Challenge)
This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.


>## Task #5: Create a Reference Array CRUD Functions

## User Management System

This JavaScript application allows users to add new profiles with a username and password. It also provides a feature to view the stored user profiles.

## Usage

1.Enter a username and password.

2.Click the "Add User" button to store the profile.

3.Click the "View Users" button to display the stored user profiles.

## My Reference Array challenge code


```
// const profile = [];

const btnDiplay = document.getElementById("view");
const update = document.getElementById("update");

const btn = document.getElementById("btn").addEventListener("click", function () {
    const userName = document.getElementById("input").value;
    const passWord = document.getElementById("password").value;

    if (userName && passWord) {
      
      const profie = JSON.parse(localStorage.getItem("user")) || [];

      const newUser = { userName: userName, passWord: passWord };
      profie.push(newUser);

      localStorage.setItem("user", JSON.stringify(profie));
      alert("added user Succesfuly");
    } else {
      alert("invalid!");
    }
  });

btnDiplay.addEventListener("click", function () {
  const read = localStorage.getItem("user");

  console.log(read);
});



// console.log(profile);
```


### Live link -> 
Deploy it and put the link here.


## Future Improvements
1. Implement user authentication and login functionality.
2. Enhance user interface for a better user experience.

## Acknowledgement:
 // none


## References:

#### Video url :
https://www.youtube.com/watch?v=xPLa25ZDlI4

![xPLa25ZDlI4-HD](https://github.com/Mushkir/cyberdude-challenges/assets/53015384/058f4ddc-9a14-4667-8c98-a13e7af8fa3a)

