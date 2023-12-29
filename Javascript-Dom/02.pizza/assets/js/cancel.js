
const cancel = document.getElementById("edit")
const update = document.getElementById("update")



cancel.addEventListener('click',function(){

    
    const yourFirstName = prompt("enter your yourFirstName")
    
const validateName = localStorage.key(yourFirstName)


    if(yourFirstName === validateName){
    localStorage.removeItem(yourFirstName)
        
    alert('Your Order Is Cancelled')
        

    }
    else{
        alert('user not found')
    }

})

update.addEventListener('click',function(){
    const yourFirstName = prompt("enter your yourFirstName")
    
const validateName = localStorage.key(yourFirstName)


    if(yourFirstName === validateName){

        window.location.href = './update.html'
        

    }
    else{
        alert('user not found')
    }

})



//   cancelOrder()