# Object for Myself (Javascript Challenge)
This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.


>## Task #3: Create a Object for Customer Details Display and Logging condition with CRUD operation

### Customer Details Display and Logging"

This JavaScript code captures customer information from HTML input elements, dynamically updates a styled border, and displays the details on the screen. Additionally, it logs the customer's full profile to the console. The implementation includes an event listener on a button click, manipulating styles and updating screen elements with the entered customer information

## My Object challenge code


### Html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript Object Project</title>
</head>
<body>
    
<!-- Welcome Section -->
<div style="text-align: center;">
   <h1>Welcome to Our Shop</h1>
    <p>Thank you for your continued support! &#128519;<br>Here's a small token of your appreciation &#128525; <br>(a Gift card just for you. Enjoy!) &#127873;</p>
</div>

<!-- User Input Section -->
<div style="text-align: center; ">
    <!-- Input fields for user details -->
    <input id="name" style="outline: none;"  type="text" placeholder="Enter your name"> <br> <br>
    <input id="dob" style="outline: none;"  type="date" placeholder="Enter your dob">  <br> <br>
    <input id="mobileNumber" style="outline: none;"  type="number" placeholder="Enter your mobile number"> <br> <br>  
    <input id="billno" style="outline: none;"  type="number" placeholder="Enter your bill no">  <br> <br>
    <!-- Button to submit user input -->
    <button id="btn" type="button" style="color: rgb(51, 255, 0); color: rgb(0, 0, 0);">Submit</button>
</div>
 
<br>
<br>
<br>

<!-- Display Section -->
<div id="bor" style="text-align: center;">
    <!-- Display user details -->
    <h4 id="screenName"></h4>
    <h4 id="screenDob"></h4>
    <h4 id="screenMobileNo"></h4>
    <h4 id="screenbillno"></h4>
</div>

<!-- JavaScript file inclusion -->
<script src="main.js"></script>
</body>
</html>


```
### JavaScript 

```
// Fetching HTML elements by their IDs
const customerName = document.getElementById("name");
const dateOfBirth = document.getElementById("dob");
const mobileNumber = document.getElementById("mobileNumber");
const billNumber = document.getElementById("billno");

// Adding a click event listener to the button with the ID "btn"
const btn = document.getElementById("btn").addEventListener("click", function () {
  
    // Changing the style of the element with the ID "bor" to have a red solid border
    const border = document.getElementById("bor");
    border.style.border = "Solid";
    border.style.borderColor = "red";

    // Fetching HTML elements by their IDs for displaying customer details
    const screenName = document.getElementById("screenName");
    const screenDob = document.getElementById("screenDob");
    const screenMobNum = document.getElementById("screenMobileNo");
    const screenBillno = document.getElementById("screenbillno");

    // Updating the inner text of the display elements with user input values
    screenName.innerText = `CustomerName : ${customerName.value}`;
    screenDob.innerText = `DateOfBirth : ${dateOfBirth.value}`;
    screenMobNum.innerText = `MobileNumber : ${mobileNumber.value}`;
    screenBillno.innerText = `BillNo : ${billNumber.value}`;
  
  // Calling the fullProfile method of the customerDetails object
  return customerDetails.fullProfile();

});

// Object containing customer details and a fullProfile method
const customerDetails = {
  customerName: customerName.value,
  dateOfBirth: dateOfBirth.value,
  mobileNumber: mobileNumber.value,
  billNumber: billNumber.value,

  // Method to log the customer's full profile to the console
  fullProfile() {
    console.log(
      `My name is ${this.customerName} and my date of birth is ${this.dateOfBirth}. My mobile number is ${this.mobileNumber} and my bill number is ${this.billNumber}.`
    );
  },
};

```


### Live link -> 
Deploy it and put the link here.




## Acknowledgement:
 // none


## References:

#### Video url :
 https://www.youtube.com/watch?v=y_dx6GO3gjY

![y_dx6GO3gjY-HD](https://github.com/SuriyaMassMsd/My-Project/assets/53015384/d26e4644-ec60-4d6e-bf27-53e3f4fc20e6)
