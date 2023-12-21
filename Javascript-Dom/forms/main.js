// const formEl = document.querySelector("form");
// const emailEl = formEl.querySelector("#email");
// const passwordEl = formEl.querySelector("#password");

// formEl.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const formData = new FormData(formEl);

//   const isEmailvaild = emailEl.value.includes("@");
//   const isValidPassword = validation(passwordEl.value);

//   if (isEmailvaild && isValidPassword) {
//     localStorage.setItem("username", JSON.stringify(emailEl.value));
//     localStorage.setItem("password",JSON.stringify(passwordEl.value));

//     const getUserName = JSON.parse(localStorage.getItem('username'))
//     const getPassWord = JSON.parse(localStorage.getItem('password')) 
    
//     console.log(getUserName, getPassWord);

//   }

//   //   for(let values of formData){
//   //     console.log(values);
//   //   }
// });

// function validation(password) {
//   const upperCase = /[A-Z]/;
//   const lowerCase = /[a-z]/;
//   const symbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

//   const isUppercasse = upperCase.test(password);
//   const islowerCase = lowerCase.test(password);
//   const issymbols = symbols.test(password);

//   const screen = document.querySelector("#screen");
//   if (isUppercasse && islowerCase && issymbols) {
//     screen.innerText = "Password is valid!";
//     screen.style.color = "green";
//   } else {
//     screen.innerText =
//       "Password is invalid! (Password should be,1 uppercase,1 lowercase,1 symbol)";
//     screen.style.color = "red";
//   }
// }
