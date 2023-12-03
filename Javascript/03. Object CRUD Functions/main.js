const customerName = document.getElementById("name");
const dateOfBirth = document.getElementById("dob");
const mobileNumber = document.getElementById("mobileNumber");
const billNumber = document.getElementById("billno");


const customerDetiles = {
  customerName : customerName.value,
  dateOfBirth : dateOfBirth.value,
  mobileNumber : mobileNumber.value,
  billNumber : billNumber.value,

  fullprofile(){
    console.log(`my name is ${this.customerName} and date of birth ${this.dateOfBirth} and mobile number ${this.mobileNumber} bill number ${this.billNumber}`);
  }
}



// console.log(customerDetiles);

const btn = document.getElementById("btn").addEventListener("click", function () {

  
  
    const border = document.getElementById("bor");
    border.style.border = "Solid";
    border.style.borderColor = "red";

    // customerDetiles

    const screenName = document.getElementById("screenName");
    const screenDob = document.getElementById("screenDob");
    const screenMobNum = document.getElementById("screenMobileNo");
    const screenBillno = document.getElementById("screenbillno");

    // ScreeningcustomerDetiles
    screenName.innerText = `CustomerName : ${customerName.value}`,
    screenDob.innerText = `DateOfBirth : ${dateOfBirth.value}`,
    screenMobNum.innerText = `MobileNumber : ${mobileNumber.value}`,
    screenBillno.innerText = `BillNo : ${billNumber.value}`

    // return customerDetiles.customerName
  
    // return customerDetiles.fullprofile();

    return customerDetiles.fullprofile();
   

  });

 

// delete customerDetiles.billNumber

// console.log(customerDetiles);

  //  customerDetiles.billNumber = 1233;




// // customerDetiles.customerName

// // read
// customerDetiles.fullProfile();

// // // update
// // customerDetiles.billNumber = 2111111;

// // customerDetiles.fullProfile();

// // // add

// // customerDetiles.Price = 120;

// // console.log(customerDetiles.customerName);

// // // delete

// // delete customerDetiles.Price;

// // console.log(customerDetiles);



// const mySelf = {
//      myName: "suriya",
//      age: 22,
//      myFavoriteGames : {
//          schoolTimes : "koo - koo",
//          collegeTimes : "Kabaddi",
//          now : "volleyball"
//      }  ,  
//     moblieNumber : 127373232,

//     fullProfile(){
//        return `my name is ${this.myName} , i am ${this.age} years old , my Mobile Number is ${this.moblieNumber}`
//     }  

// }

// console.log(mySelf.fullProfile());

// update
// mySelf.age ="32";

// console.log(mySelf);

// add 
// mySelf.phonenumber = 1214131;

// console.log(mySelf);

// delete

// delete mySelf.age;

// console.log(mySelf);

