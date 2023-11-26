const customerName = document.getElementById("name");
const dateOfBirth = document.getElementById("dob");
const mobileNumber = document.getElementById("mobileNumber");
const billNumber = document.getElementById("billno");

const btn = document.getElementById("btn").addEventListener("click", function () {
  
    const border = document.getElementById("bor");
    border.style.border = "Solid";
    border.style.borderColor = "red";

    // customerDetiles

    const screenName = document.getElementById("screenName");
    const screenDob = document.getElementById("screenDob");
    const screenMobNum = document.getElementById("screenMobileNo");
    const screenBillno = document.getElementById("screenbillno");

    (screenName.innerText = `CustomerName : ${customerName.value}`),
      (screenDob.innerText = `DateOfBirth : ${dateOfBirth.value}`);
    screenMobNum.innerText = `MobileNumber : ${mobileNumber.value}`;
    screenBillno.innerText = `BillNo : ${billNumber.value}`;
  
  return customerDetiles.fullProfile();

  });

const customerDetiles = {
  customerName: customerName.value,
  dateOfBirth: dateOfBirth.value,
  mobileNumber: mobileNumber.value,
  billNumber: billNumber.value,

  fullProfile() {
    console.log(
      `My name is ${this.customerName} and my date of birth ${this.dateOfBirth} my mobile no is ${this.mobileNumber} and billno is ${this.billNumber} `
    );
  },
};

// read
// customerDetiles.fullProfile();

// // update
// customerDetiles.billNumber = 2111111;

// customerDetiles.fullProfile();

// // add

// customerDetiles.Price = 120;

// console.log(customerDetiles);

// // delete

// delete customerDetiles.Price;

// console.log(customerDetiles);
