# Array of Objects (Javascript Challenge)
This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.


>## Task #6: Create a Employee Profiles Management System

## Employee Profiles Management System

This JavaScript script manages employee profiles, allowing users to create profiles, filter data, and manipulate information. The script utilizes object-oriented programming principles for employee profile creation.

# Key Features

## Profile Creation

Users can create employee profiles with unique IDs, names, and departments.
## Object-Oriented Approach

Employs object-oriented principles with a constructor function for creating employee profiles.
## Profile Filtering

Demonstrates how to filter and recreate specific employee profiles based on criteria.
## Profile Modification

Allows users to modify profiles by updating names and ID numbers through user input.
## Sorting and Display

Implements sorting of profiles based on ID numbers and displays the information in a tabular format.
## Looping Through Profiles

Utilizes various loop structures, such as for and while, to iterate through and display employee profiles.

## My Reference Array challenge code


```
let employees = [];

// const employesName = prompt("enter your name");
// const employesIdNo = prompt("enter your id number");
// const employesDepartment = prompt("enter you department");

function Emploesprofiles(employeesIdNo,employeesName,  employeesDepartment) {
  (this.employeesIdNo = employeesIdNo),
  (this.employeesName = employeesName),
  (this.employeesDepartment = employeesDepartment);
}

const newUser = new Emploesprofiles(1,"dhoni","cricket");
const newUser2 = new Emploesprofiles(2,"jackie chan","film");

employees.push(newUser);
employees.push(newUser2);

// console.table(employees)





// const p = [];


// const array1 = employees.filter((name)=>{
//         if(name.employeesName === "jackie chan"){
//             const recreate = {names:name.employeesName , idNumber : name.employeesIdNo , industry: name.employeesDepartment}
//              p.push(recreate)            
//         }
// })


// console.table(p);


// const some = employees.map(function (value) {
//   const chooseYourName = prompt("enter your name")
//   return {
//    idNumber: value.employeesIdNo * 3, changeName:value.employeesName + chooseYourName,
//   };
// });

// console.log(some);

// const sort = some.sort(function (a, b) {
//   return b.idNumber - a.idNumber;
// });

// console.log(sort);

// for(let key of some){
//         console.log("idNumber : " , key.idNumber);
// }

// for(let key in p){
//     console.log(p[key]);
// }

// for(i=0;i<employees.length;i++){
//         console.table(employees[i]);
// }

let i = 0;

while(i<employees.length){
     console.table(employees);
  i++
  break
}


```


### Live link -> 
Deploy it and put the link here.


## Acknowledgement:
 // none


## References:

#### Video url :
https://www.youtube.com/watch?v=WHtXXwAzj6Q

![WHtXXwAzj6Q-HD](https://github.com/Mushkir/cyberdude-challenges/assets/53015384/1af59ba7-127d-44f8-bee7-590cca638e25)

