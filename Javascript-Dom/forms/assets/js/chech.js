const formEl = document.querySelector("form");
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#password");
const valid = document.getElementById('valid')


formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(formEl);



  const email = formData.get('email')
//   const password = formData.get('password')

  check(email)
 
  
 

});



function check(email){
    if (!email) {
        alert('Validation failed or email is empty');
      }
           
              fetch(`http://localhost:3000/users?username=${email}`,{
                method : 'GET',
                headers : {
                  'Content-Type': 'application/json',      
                },
              })  
    
              .then((res)=>res.json())
              .then((data)=>{
                
                if(data.length > 0){
                    alert('user found')
                    console.log(data);
                    valid.innerText = `password: ${JSON.stringify(data[0].password)}`
                    // alert('!');

                    // window.location.href = 'http://localhost:5173/login.html'
                }else{
                    alert('not found')
                }
              }).catch(error => {
                console.error('Error:', error);
              })
            // 
            
}
         
// else {
//         console.log('Validation failed or email is empty');
//       }  
// }



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
//     return true;
//   } else {
//     screen.innerText =
//       "Password is invalid! (Password should be,1 uppercase,1 lowercase,1 symbol)";
//     screen.style.color = "red";
//     return false;
//   }
// }


