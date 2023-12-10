"use strict"

// Default Parameters
// function sum(a, b = 10) { //If we set value in parameters then it calls default parameters
//     return a + b;
// }; console.log(sum(25));

// // Value VS Reference
// const student1 = {
//     name: "Ruhi",
//     city: "Dhaka",
// };
// // const student2 = student1;  //Here student2 is sharing same memory location of student1 and it's call Reference
// const student2 = { ...student1 };  // Value
// student2.name = "Mimi";
// student2.roll = 25;
// console.log(student1);
// console.log(student2);

// // First Class Function: Below exampls will show us the characteristics of first class function.
// const firstClass = (a, b) => { //a,b are parameters of firstClass function.
//     return a + b;
// };
// // console.log(firstClass(4, 12)); //Can be stored in a variable(Characteristics of first class function).

// //Higher Order Function (HOF)
// const otherFunction = (a, b, fn) => { //Here otherFunction is a Higher Order Function (HOF) cause its taking a function as a parameter and it also returning a function.

//     return fn(a, b); //Here fn is a call back funtion and first class function cause its waiting for otherFunction to call it and its an argument of otherFunction so thats why its a first class function too.

// }; console.log(otherFunction(5, 15, firstClass)); //Can be passed as an argument to other function which is a characteristics of first class function.

// // Call Back Function
// const greet = document.querySelector(".greet");
// const callBack = () => {
//     document.body.style.backgroundColor = "pink";
// }
// greet.addEventListener("mouseover", callBack);

// Curriying Function
