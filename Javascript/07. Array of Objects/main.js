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