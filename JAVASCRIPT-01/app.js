// //QUESTION NO 1

// // let num1 = +prompt("enter first number");
// // let num2 = +prompt("enter second number");

// // if(num1>num2){
// //     console.log(num1);
// // }
// // else if(num2>num1){
// //     console.log(num2);
// // }
// // else{
// //     console.log("both  numbers are equal")
// // }

// //QUESTION NO 2 

// let num = +prompt("Enter a number");

// if(num>=0){
//     alert("the sign is positive");
// }
// else{
//     alert("the sign is negative");
// }


// //QUESTION NO 3

// let num1 = +prompt("enter first number");
// let num2 = +prompt("enter second number");
// let num3 = +prompt("enter third number");
// let num4 = +prompt("enter fourth number");
// let num5 = +prompt("enter fifth number");

// if (num1>num2 && num1>num3 && num1>num4 && num1>num5 ){
//     console.log(num1);
// }

// else if (num2>num1 && num2>num3 && num2>num4 && num2>num5 ){
//     console.log(num2);
// }

// else if (num3>num1 && num3>num2 && num3>num4 && num3>num5 ){
//     console.log(num3);
// }

// else if (num4>num1 && num4>num2 && num4>num3 && num4>num5 ){
//     console.log(num4)
// }

// else{
//     console.log(num5)
// }


// // QUESTION NO 4 

// for(let i = 0; i<=15; i++){
//     if (i%2===0){
//         console.log(i+" even")
//     }
//     else {
//         console.log(i+" odd")
//     }
// }


// // QUESTIION NUMBER 5

// let marks = +prompt("Enter your marks");

// if (marks<=60){
//     console.log("GRADE F");
// }

// else if (marks<70){
//     console.log("GRADE D");
// }

// else if (marks<80){
//     console.log("GRADE C");
// }

// else if (marks<90){
//     console.log("GRADE B")
// }

// else if (marks<=100){
//     console.log("GRADE A .")
// }

// else{
//     console.log(" Marks are out of range")
// }


// // QUESTION NO 6

// for(let i = 0; i<=100; i++){
//     if  (i%3===0 && i%5===0){
//         console.log(i+" FIZZ BUZZ")
//     }
//     else if(i%5===0){
//         console.log(i+" BUZZ")
//     }
//     else if (i%3===0){
//         console.log(i+" FIZZ")
//     }
//     else{
//         console.log(i);
//     }    
// }


// // QUESTION NO 7


// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += "*";
//     }
//     console.log(row);
//   }





                             // CLASS 04 

    //Functions
  // jo fucntion hum khud banate hain wo custom function kehlate hain
  //alert = builtin function


// function greet (studentName) {        //round bracket mai parameter hai
//     console.log("Hello Student " + studentName);
// }

// greet("Anas");    // the name added like this in  bracket after calling a fucntion is called an argument
// greet("Sheza");


// function employee (FileNo) {        
//         return ("Working on file no :  " + FileNo);
//      }
    
//     let data = employee(8);     
//     console.log(data);


// function add (num1, num2){
//     return add = num1 + num2;

// }

// add(5, 7);
// let result = add;
// console.log(result);
// document.write(result);     

      //Recursion

// function writedata (data, time){
//     document.write(data);
//     if (time > 0){
//         writedata(data, time - 1)
//     }
// }    
// writedata("hello", 5);


//function factorial (num){
//     if (num >= 1){
//         return num * factorial(num - 1);
//     }
//     return 1;
// }
// console.log(factorial(5))


   // CLOSURES => scopes
   // global scopes=whole file
   // child scope= inside function only

//    let abc = 7;   // global scope

//    function print(){
//     def = 14;   // child scope/local scope
//     console.log(abc)
//    }

//    console.log(abc)   // agar "def" dalenge error ayega kiunke aik local scope ko globally use karne ki koshish krrhe hain.
   
//    print();

// function doprint(ghi){
//     //ghi= local scope
//     return function(jkl){     // anonymous function
//         console.log(ghi + jkl);

//     }
// }

// let innerFunction = doprint(7);
// let innerFunction2 = doprint(8);

// innerFunction(8);
// innerFunction2(9);


// function saveUrl(url){
//     return function(){
//         fetch(url)
//   .then((response) => response.json())
//   .then((json) => console.log(json));
//     }
// }

// let makerequest = saveUrl('https://jsonplaceholder.typicode.com/posts/1');

// makerequest();           // the benefit of a closure is that no one can change the url/value now.
// makerequest();


                           //CLASS 05
    // ARRAYS
    
//     let months = ["January", "February", "March", "April","May","June","July","August"];
//  months[8] = "september";     // not recommended;

//  console.log(months);

//  let shouldIStore = prompt("Array mai value rakhun?")
//  if(shouldIStore === "yes"){
//     months.push("october");      // push is used to insert a new value in to an array
//  }
 
// let months = ["January", "February","sept", "March", "April","May"];
//months.shift();    // removes first index
//months.unshift('jan')  // adds value on first index
//months.pop();   //removes last index
//months.splice(2, 1); //removes the value of the index number pointed out
//months.length    // to get the length of the array
//months.splice(2, 1, "june", "july");     // remove or replace values
//let newArray = months.slice(0,2)     // fetch values from other arrays 

// console.log(newArray);
// console.log(months);

// let arr = [1,2,3,4,5];
// arr.forEach   // loops through array values
// arr.forEach(function(val, index){
//     console.log(index, val, arr);
// })


// .filter    // filters array values acc to cond.
// let arrr = [1,2,3,4,5]

// let filteredarray = arrr.filter(function(val){
//     return val % 2 === 0;
//          //or
//     // if(val % 2 === 0 ){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }

// })

// console.log(filteredarray);


//.sort   // sorts array values or rearranges 

// let arrno = [1,5,2,7,8,9,6];

// let sortedArray = arrno.sort(function(a ,b){
//       if(a > b){
//         return 1;
//       }
//       else{
//         return -1;
//       }
// })

// console.log(sortedArray)


//.reduce

// let arrno = [1,5,2,7,8,9,6];
// let total = arrno.reduce(function (prevValues, currValue) {
//       return prevValues + currValue;
// } ,0) 

// console.log(total);


// let arrayy = ["Happy", "Birthday", "Amin"];
// let finalString = arrayy.reduce(function (prevValues, currValue) {
//            return prevValues + currValue;
//      } ,) 

// console.log(finalString);




              // CLASS 06

//   OBJECTS

// let person = {
//     name: "Anas",
//     age: 19,
//     eyescolor: "black",
//     canSpeakEnglish: false, 
//     speak: function(sentence){    // a function isnide an object is called an method
//         console.log(sentence);
//     }
// }

// person.speak("hello my name is Anas")
// console.log(person)



// let student1 = {
//     name : "nadirr",
//     rollNo : 420,
//     course : "javascript",
//     teacher : "ameen"
// }

// let student2 = {
//     name : "shazaib",
//     rollNo : 421,
//     course : "css",
//     teacher : "saleem"
// }

// let students = [student1, student2]

// console.log(students)


// function provideStudents (name1, rollNo1, course1, teacher1) {
//     return{
        
//     name : name1,
//      rollNo : rollNo1,
//      course : course1,
//      teacher : teacher1,
//     }
// }

// let students = [
//     provideStudents("anas", 80, "java", "abdullah"),
//     provideStudents("ameen", 90, "ruby", "ikhlas"),

// ];
    
// console.log(students);

// let students = []

// function provideStudents () {
//         let std = {
//      name : prompt("enter your name"),
//      rollNo : +prompt("enter your roll no"),
//      course : prompt("enter the course you are enrolled in"),
//      teacher : prompt("enter your teacher's name"),
//     }
//     students.push(std)
//     console.log(students)
//     }

//localStorage.setItem("name", "anas")    // local storage is used because when we refresh the page our data is lost, but when LS is used, it is saved in local storage


// we face difficulties in storing data in local stroage when we are using an object.>
// we use json in order to convert an object into a string when stored in local storage
    
// let prevStudents = localStorage.getItem("students");
// let students = prevStudents ? JSON.parse(prevStudents) : [];
// function provideStudents () {
//     let std = {
//  name : prompt("enter your name"),
//  rollNo : +prompt("enter your roll no"),
//  course : prompt("enter the course you are enrolled in"),
//  teacher : prompt("enter your teacher's name"),
// }
// students.push(std);
// console.log(students);
// let stringyfy = JSON.stringify(students)    //this is done because(explained in line no.386/387)
//     localStorage.setItem("students", stringyfy);
// }



//                      CLASS 07
//        DOM => DOCUMENT OBJECT MODEL

       









