const formEl = document.querySelector("form");
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#password");
const api = document.getElementById('msd')


formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(formEl);



  const email = formData.get('email')
  const password = formData.get('password')

  check(email,password)
 
  
 

});



function check(email,password){
    // if (!email && !password) {
    //     alert('Validation failed or email is empty');
    //   }
      
  
        // if(validation(password)){

          // const user =  {
              
          //   username : email,
          //   password : password
        
          // // }
          
          // const userid = prompt('enter your userID');


            // if(!isNaN(userid) && parseInt(userid)>0){
              fetch(`http://localhost:3000/users?username=${email}&password=${password}`,{
                method : 'GET',
                headers : {
                  'Content-Type': 'application/json',      
                },
                // body : JSON.stringify({"users":[user]})
              })  
    
              .then((res)=>res.json())
              .then((data)=>{
                // api.innerText = data.data
                console.log(data);

                if(data.length > 0){
                    
                    alert('Account logged in successfully!');
                    window.location.href = 'http://localhost:5173/webapp.html'
                
                }
                else{
                    alert('user not found')
                }
              }).catch(error => {
                console.error('Error:', error);
              })
             

            // else{
            //   alert("invalid userId")
            //   return false;
            // }

            
        


            // localStorage.setItem('username', email)
            // localStorage.setItem('password', password)

           
            // console.log(users);
         
           }
      

      // else {
      //   console.log('Validation failed or email is empty');
      // }  
// }



function validation(password) {

  const upperCase = /[A-Z]/;
  const lowerCase = /[a-z]/;
  const symbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

  const isUppercasse = upperCase.test(password);
  const islowerCase = lowerCase.test(password);
  const issymbols = symbols.test(password);

  const screen = document.querySelector("#screen");
  if (isUppercasse && islowerCase && issymbols) {
    screen.innerText = "Password is valid!";
    screen.style.color = "green";
    return true;
  } else {
    screen.innerText =
      "Password is invalid! (Password should be,1 uppercase,1 lowercase,1 symbol)";
    screen.style.color = "red";
    return false;
  }
}


