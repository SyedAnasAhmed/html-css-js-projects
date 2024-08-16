//                      ASSIGNMENT NUMBER 2 
//          QUESTION NUMBER 01

// function doprint(ghi){
//         return function(jkl){     
//             console.log(ghi + jkl);
//         }
//     }
    
//     let innerFunction = doprint(7);
//     let innerFunction2 = doprint(8);
    
//     innerFunction(8);
//     innerFunction2(9);

//         QUESTION NUMBER 02

// function SearchArray(arr,input){
//     if(arr.length === 0){
//         return false
//     }
//     if(arr[0] === input){
//         return true
//     }
//     return SearchArray(arr.slice(1),input)
// }
// let arr = [2,4,6,8,10,12,14,16]
// console.log(SearchArray(arr,14))

    

//           QUESTION NUMBER 03

// function AddPara(paraText){
//     let pageBody = document.getElementById("page-body")
//     let para = "p"
//     let myPara = document.createElement(para)
//     myPara.innerText = paraText
//     pageBody.appendChild(myPara)
//     console.log(pageBody)
// }
// AddPara("A new paragraph is added")

//           QUESTION  NUMBER 04

// function AddListItem(listText){
//     let pageBody = document.getElementById("page-body")
//     let uList = document.getElementById("u-list")
//     let listItem = "li"
//     let newListItem = document.createElement(listItem)
//     newListItem.innerText = listText
//     uList.appendChild(newListItem)
//     console.log(pageBody)
// }
// AddListItem("List Item 3")

//           QUESTION NUMBER 05

// function changeBackground(tagName, colorName){
//     let pageBody = document.getElementById("page-body")
//     // let tagName = " "
//     // let colorName = " "
//     let elementReference = document.querySelector(tagName)
//     elementReference.style.backgroundColor = colorName
//     console.log(pageBody)
// }
// changeBackground("ul", "green")


 //             QUESTION NUMBER 06

// let prevEmployees = localStorage.getItem("Employees");
// let Employees = prevEmployees ? JSON.parse(prevEmployees) : [];
// function provideEmployees () {
//     let emp = {
//  name : prompt("enter your name"),
//  cnic : +prompt("enter your cnic no"),
//  department : prompt("enter the department you belong to"),//  salary : +prompt("enter your monthly salary"),
// }
// Employees.push(emp);
// console.log(Employees);
// let stringyfy = JSON.stringify(Employees)    
//     localStorage.setItem("Employees", stringyfy);
// }


//             QUESTION  NUMBER 07

// function getObject(keyName){
//     let objName = localStorage.getItem(keyName)
//     return JSON.parse(objName)
// }
// let obj = getObject("courses")
// console.log(obj)


//             QUESTION NUMBER 08

// function saveToLocalStorage(egkey, obj) {
//     try {
//       const Object = JSON.stringify(obj);
//       localStorage.setItem(egkey, Object);
//       console.log(`Object saved to localStorage with key: ${egkey}`);
      
//       // Retrieve object from localStorage
//       const retrievedObject = JSON.parse(localStorage.getItem(egkey));
//       console.log(`Object retrieved from localStorage with key: ${egkey}`);
      
//       return retrievedObject;
//     } catch (error) {
//       console.error('Error saving/retrieving object to/from localStorage:', error);
//     }
//   }
//   const myObj = { name: "John", age: 30 };

//   // Save object to localStorage and retrieve it
//   const retrievedObject = saveToLocalStorage("myKey", myObj);
  
//   console.log(retrievedObject); // { name: "Shazzy", age: 23 }
  





 let prevStudents = localStorage.getItem("students");
let students = prevStudents ? JSON.parse(prevStudents) : [];
function provideStudents () {
    let std = {
 name : prompt("enter your name"),
 rollNo : +prompt("enter your roll no"),
 course : prompt("enter the course you are enrolled in"),
 teacher : prompt("enter your teacher's name"),
}
students.push(std);
console.log(students);
let stringyfy = JSON.stringify(students)    //this is done because(explained in line no.386/387)
    localStorage.setItem("students", stringyfy);
}
